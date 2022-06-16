import { assertPlain, expectBoolean, expectDate, expectDateOrNull, expectNumber, expectString, expectStringOrNull, parseDateToString, parseDateToStringOrNull } from "src/app/shared/validation";

export interface Event {
  id: string | null;
  name: string;
  edition: string;
  color: string | null;
  startDate: Date;
  endDate: Date | null;
  registerStartDate: Date;
  registerEndDate: Date | null;
  maximumNumberOfParticipans: number;
  isActive: boolean;
}

export default Event;

export function validateEvent(value: any): Event {
  assertPlain(value);
  return {
      id: expectString(value["id"]),
      name: expectString(value["name"]),
      edition: expectString(value["edition"]),
      color: expectStringOrNull(value["color"]),
      startDate: expectDate(value["startDate"]),
      endDate: expectDateOrNull(value["endDate"]),
      registerStartDate: expectDate(value["registerStartDate"]),
      registerEndDate: expectDateOrNull(value["registerEndDate"]),
      maximumNumberOfParticipans: expectNumber(value["maximumNumberOfParticipans"]),
      isActive: expectBoolean(value["isActive"])
  };
}

export function parseEventToJson(event: Event): string {
  return JSON.stringify({
    id: event.id,
    name: event.name,
    color: event.color,
    startDate: parseDateToString(event.startDate),
    endDate: parseDateToStringOrNull(event.endDate),
    registerStartDate: parseDateToString(event.registerStartDate),
    registerEndDate: parseDateToStringOrNull(event.registerEndDate),
    maximumNumberOfParticipans: event.maximumNumberOfParticipans,
    isActive: event.isActive
  })
}
