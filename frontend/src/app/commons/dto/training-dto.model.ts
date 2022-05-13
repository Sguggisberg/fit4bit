import { UserDto } from 'src/app/commons/dto/user-dto.model';
import { RoomDto } from './room-dto.model';
import { TrainingTypDto } from './training-typ-dto.model';
import {PayrollDto} from "./payroll-dto.model";
export interface TrainingDto {
  id?: number;
  trainingTyp?: TrainingTypDto;
  room?: RoomDto;
  user?: UserDto;
  duration?: number;
  runningDate?: Date;
  amountOfCustomer?: number;
  payrollDto?:PayrollDto;
}
