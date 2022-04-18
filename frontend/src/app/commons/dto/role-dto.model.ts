export type Roles = Authority[];

export interface Authority {
  authority: 'ROLE_ADMIN' | 'ROLE_TRAINER' | 'ROLE_SUPERIOR' | 'ROLE_FINANCE';
}
