import logging
from bson import ObjectId

from utils.databaseContext import eventsDatabase
from utils.result import Result

from modules.events.models.eventResponse import EventResponse

events = eventsDatabase.get_collection('events')

def createEvent(event):
    databaseEvent = events.find_one({"name": event.name, "edition": event.edition})
    if databaseEvent != None:
        return Result.error("One event with name %s and edition %s already exists." % (event.name, event.edition))
    
    eventId = events.insert_one(event.__dict__)
    logging.debug('New event with id %s inserted' % str(eventId.inserted_id))
    
    return Result()

def getEvents():
    results = [toEventResponse(x) for x in list(events.find({"isDeleted": {"$ne": True}}))]
    
    return Result(results)

def getEvent(id):
    event = events.find_one({"_id": ObjectId(id), "isDeleted": {"$ne": True}})
    if event == None:
        return Result.error('Cannot find event with id %s' % (id), 404)
    
    return Result(toEventResponse(event))

def markEventAsComplete(id):
    event = events.find_one_and_update({"_id": ObjectId(id)}, {"$set": {"isActive": False}})
    if event == None:
        return Result('Cannot find event with id %s' % id, 404)
    
    return Result()

def markEventAsDeleted(id):
    event = events.find_one_and_update({"_id": ObjectId(id)}, {"$set": {"isDeleted": True}})
    if event == None:
        return Result('Cannot delete event with id %s' % id, 404)
    
    return Result()

def toEventResponse(databaseEvent):
    return EventResponse(databaseEvent["_id"], databaseEvent["name"], databaseEvent["edition"], databaseEvent["startDate"],
                         databaseEvent["endDate"], databaseEvent["registerStartDate"], databaseEvent["registerEndDate"],
                         databaseEvent["maximumNumberOfParticipans"], databaseEvent["isActive"])
