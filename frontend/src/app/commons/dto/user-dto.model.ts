import { Roles } from "./role-dto.model";

export interface UserDto {
  id?: number,
  lastName?: string,
  firstName?: string,
  email?:string,
  username?:string,
  roles?: Roles[];
}
