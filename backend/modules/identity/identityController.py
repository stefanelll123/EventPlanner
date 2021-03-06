from flask import Blueprint, request
from flask_expects_json import expects_json

from utils.authorization import authorizeAdmin

from modules.identity.models.userLoginRequest import UserLoginRequest
from modules.identity.models.userLoginRequest import schema as loginSchema

from modules.identity.models.userRegisterRequest import UserRegisterRequest
from modules.identity.models.userRegisterRequest import schema as registerSchema

import modules.identity.identityService as identityService

identityBlueprint = Blueprint('identity', __name__)

@identityBlueprint.route('login', methods = ['POST'])
@expects_json(loginSchema)
def login():
    user = UserLoginRequest(request.get_json())
    result = identityService.login(user)
    
    return result.makeResponse()

@identityBlueprint.route('register', methods = ['POST'])
@expects_json(registerSchema)
def register():
    user = UserRegisterRequest(request.get_json())
    result = identityService.register(user)
    
    return result.makeResponse()

@identityBlueprint.route('admin/register', methods = ['POST'])
@authorizeAdmin()
@expects_json(registerSchema)
def registerAdmin():
    user = UserRegisterRequest(request.get_json())
    result = identityService.register(user)
    
    return result.makeResponse()

@identityBlueprint.route('accounts/<email>', methods = ['DELETE'])
@authorizeAdmin()
def deleteAccount(email):
    result = identityService.deleteAccount(email)
    
    return result.makeResponse()

    
