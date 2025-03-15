export interface User {
  id: string;
  lastName: string;
  firstName: string;
  fullName: string;
  email: string;
  workingFolder: string;
  organization: Organization;
  subordinateLoanAccess: string;
  userIndicators: string[];
  peerLoanAccess: string;
  lastLogin: string;
  personalStatusOnline: boolean;
  comments: string;
  personas: Persona[];
}

export interface Organization {
  entityId: string;
  entityType: string;
  entityName: string;
  entityUri: string;
}

export interface Persona {
  entityId: string;
  entityType: string;
  entityName: string;
}
