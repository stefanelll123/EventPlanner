from flask import Blueprint, request, Response
from flask_expects_json import expects_json

from utils.authorization import authorizeAdmin

from modules.events.models.eventRequest import EventRequest, schema as eventSchema
import modules.events.eventsService as eventsService

eventsBlueprint = Blueprint('events', __name__)

@eventsBlueprint.route('', methods = ['POST'])
@authorizeAdmin()
@expects_json(eventSchema)
def createEvent():
    event = EventRequest(request.json)
    response = eventsService.createEvent(event)
    
    return response.makeResponse()

@eventsBlueprint.route('', methods = ['GET'])
@authorizeAdmin()
def getEvents():
    response = eventsService.getEvents()
    
    return response.makeResponse()

@eventsBlueprint.route('<id>', methods = ['GET'])
@authorizeAdmin()
def getEvent(id):
    response = eventsService.getEvent(id)
    
    return response.makeResponse()

@eventsBlueprint.route('<id>', methods = ['DELETE'])
@authorizeAdmin()
def deleteEvent(id):
    response = eventsService.markEventAsDeleted(id)
    
    return response.makeResponse()

@eventsBlueprint.route('<id>/complete', methods = ['PATCH'])
@authorizeAdmin()
def markEventAsComplete(id):
    response = eventsService.markEventAsComplete(id)
    
    return response.makeResponse()