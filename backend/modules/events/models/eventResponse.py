import json
from utils.constants import DATE_FORMAT

class EventResponse():
    def __init__(self, id, name, edition, startDate, endDate, registerStartDate, registerEndDate, maximumNumberOfParticipans, isActive):
        self.id = str(id)
        self.name = name
        self.edition = edition
        self.startDate = startDate.strftime(DATE_FORMAT)
        self.endDate = endDate.strftime(DATE_FORMAT)
        self.registerStartDate = registerStartDate.strftime(DATE_FORMAT)
        self.registerEndDate = registerEndDate.strftime(DATE_FORMAT)
        self.maximumNumberOfParticipans = maximumNumberOfParticipans
        self.isActive = isActive
    
    def __str__(self):
        return json.dumps(self.__dict__)