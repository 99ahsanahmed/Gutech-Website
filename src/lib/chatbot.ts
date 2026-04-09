import { programs } from '@/lib/site-data';

export function extractLead(message: string) {
  const email = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0];
  const name = message.match(/(?:my name is|i am|i'm)\s+([A-Za-z][A-Za-z\s]{1,40})/i)?.[1];
  const lower = message.toLowerCase();

  const programInterest =
    programs.find((program) => lower.includes(program.shortTitle.toLowerCase()))?.title ??
    programs.find((program) => lower.includes(program.title.toLowerCase()))?.title;

  return {
    name: name?.trim(),
    email,
    programInterest,
  };
}
