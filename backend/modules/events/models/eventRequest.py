import json
from datetime import datetime

from utils.constants import DATE_FORMAT

class EventRequest():
    def __init__(self, dictionary) -> None:
        self.name = dictionary.get('name')
        self.edition = dictionary.get('edition') or '1'
        self.startDate = datetime.strptime(dictionary.get('startDate'), DATE_FORMAT)
        self.endDate = datetime.strptime(dictionary.get('endDate'), DATE_FORMAT)
        self.registerStartDate = datetime.strptime(dictionary.get('registerStartDate'), DATE_FORMAT)
        self.registerEndDate = datetime.strptime(dictionary.get('registerEndDate'), DATE_FORMAT)
        self.maximumNumberOfParticipans = dictionary.get('maximumNumberOfParticipans') or 9999
        self.isActive = True
    
    def __str__(self):
        return json.dumps(self.__dict__)

schema = {
    'type': 'object',
    'properties': {
        'name': {'type': 'string', "minLength": 3, "maxLength": 50},
        'edition': {'type': 'string', "minLength": 1, "maxLength": 20},
        'startDate': {'type': 'string', "format": "date"},
        'endDate': {'type': 'string', "format": "date"},
        'registerStartDate': {'type': 'string', "format": "date"},
        'registerEndDate': {'type': 'string', "format": "date"},
        'maximumNumberOfParticipans': {'type': 'number'},
    },
    'required': ['name', 'startDate', 'endDate', 'registerStartDate', 'registerEndDate']
}
