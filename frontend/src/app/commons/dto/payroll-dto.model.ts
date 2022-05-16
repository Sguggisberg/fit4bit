import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
import { UserDto } from './user-dto.model';
import { BillState } from '../models/bill-state.model';
export interface PayrollDto {
  id?: number;
  month?: number;
  year?: number;
  trainings?: TrainingDto[];
  user?: UserDto;
  billState: BillState;
}
