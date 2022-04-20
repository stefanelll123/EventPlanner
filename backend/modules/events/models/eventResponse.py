import json

class EventResponse():
    def __init__(self, id, name, edition, startDate, endDate, registerStartDate, registerEndDate, maximumNumberOfParticipans, isActive):
        self.id = str(id)
        self.name = name
        self.edition = edition
        self.startDate = str(startDate)
        self.endDate = str(endDate)
        self.registerStartDate = str(registerStartDate)
        self.registerEndDate = str(registerEndDate)
        self.maximumNumberOfParticipans = maximumNumberOfParticipans
        self.isActive = isActive
    
    def __str__(self):
        return json.dumps(self.__dict__)