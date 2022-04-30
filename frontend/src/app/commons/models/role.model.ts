export interface Roles {
  authority:Authority[]
}

export type Authority =
   'ROLE_ADMIN' | 'ROLE_TRAINER' | 'ROLE_SUPERIOR' | 'ROLE_FINANCE';

