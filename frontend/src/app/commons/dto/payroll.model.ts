import { TrainingDto } from 'src/app/commons/dto/training-dto.model';
interface payroll {
  id?: number,
  month: number,
  year: number,
  trainings: TrainingDto[]
}

