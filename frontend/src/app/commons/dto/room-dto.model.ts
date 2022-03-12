import { Dto } from "./dto.model";

export interface RoomDto extends Dto  {
  id?: number,
  name?: string,
  image?: string
}
