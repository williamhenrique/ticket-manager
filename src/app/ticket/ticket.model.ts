export interface Ticket{
  id: number;
  title: string;
  description: string;
  assigneeId: number;
  assigneeName?: string;
  completed: boolean;
}
