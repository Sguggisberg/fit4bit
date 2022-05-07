import { Roles } from '../dto/role-dto.model';

export interface JwtToken {
  token: string;
}

export interface DecodedJwtTokenData {
  sub: string;
  Roles: Roles[];
  exp: number;
  iat: number;
}
