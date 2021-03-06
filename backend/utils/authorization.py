import os
import jwt
import logging

from functools import wraps
from flask import request, Response
from bson import ObjectId

from utils.databaseContext import identityDatabase
from utils.cache import executeWithCache
from utils.constants import ADMIN_ROLE

key = os.getenv('SECRET')

def getUserRoleById(userId):
    users = identityDatabase.get_collection('users')
    user = users.find_one(ObjectId(userId))
    
    return user['role'] if user != None else None

def authorizeAdmin():
    def _authorizeAdmin(f):
        @wraps(f)
        def __authorizeAdmin(*args, **kwargs):
            unauthorizedResponse = Response('{"error": "%s"}' % ("Unable to perform this operation."), 401)
            token = request.headers.get('Authorization')
            if token == None:
                return unauthorizedResponse
            userId = None
            try:
                userId = jwt.decode(token, key, algorithms=['HS256'])['sub']
            except:
                logging.debug('Unable to decode the token: %s' % (token))
                return unauthorizedResponse
                
            role = executeWithCache(lambda: getUserRoleById(userId), key=f'authorizeAdmin-role-{userId}')
            if role != None and role != ADMIN_ROLE:
                return unauthorizedResponse
                
            result = f(*args, **kwargs)
            return result
        return __authorizeAdmin
    return _authorizeAdmin