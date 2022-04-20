import os
from pymongo import MongoClient

client = MongoClient(os.getenv('CONNECTION_STRING'))

identityDatabase = client['identity']
eventsDatabase = client['events']
