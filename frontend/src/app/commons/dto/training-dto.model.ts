import { RoomDto } from './room-dto.model';
import { TrainingTypDto } from './training-typ-dto.model';
export interface TrainingDto{
  id?: number,
  trainingTyp?: TrainingTypDto,
  room?: RoomDto,
}
