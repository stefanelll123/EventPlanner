
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
