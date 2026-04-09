export type InquiryRecord = {
  id: string;
  name: string;
  email: string;
  interest: string;
  message: string;
  createdAt: string;
};

export type ChatLeadRecord = {
  id: string;
  name?: string;
  email?: string;
  programInterest?: string;
  createdAt: string;
};

type Store = {
  inquiries: InquiryRecord[];
  chatLeads: ChatLeadRecord[];
};

declare global {
  var __gutechStore: Store | undefined;
}

const store =
  globalThis.__gutechStore ??
  (globalThis.__gutechStore = {
    inquiries: [],
    chatLeads: [],
  });

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function saveInquiry(input: Omit<InquiryRecord, 'id' | 'createdAt'>) {
  const record: InquiryRecord = {
    id: makeId(),
    createdAt: new Date().toISOString(),
    ...input,
  };

  store.inquiries.push(record);
  return record;
}

export function saveChatLead(input: Omit<ChatLeadRecord, 'id' | 'createdAt'>) {
  const normalized = {
    name: input.name?.trim(),
    email: input.email?.trim(),
    programInterest: input.programInterest?.trim(),
  };

  if (!normalized.name && !normalized.email && !normalized.programInterest) {
    return null;
  }

  const record: ChatLeadRecord = {
    id: makeId(),
    createdAt: new Date().toISOString(),
    ...normalized,
  };

  store.chatLeads.push(record);
  return record;
}
