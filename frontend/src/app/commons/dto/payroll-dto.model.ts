import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
export interface PayrollDto {
  id?: number,
  month: number,
  year: number,
  trainings: TrainingDto[]
}

