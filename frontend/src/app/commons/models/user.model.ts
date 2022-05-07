import { Roles } from './role.model';

export interface User {
  id?: number;
  lastName?: string;
  firstName?: string;
  email?: string;
  username?: string;
  roles?: Roles[];
}
