import { TrainingTyp } from './training-typ.model';

export interface Training {
  id?: number;
  duration?: number;
  runningDate: Date;
  amountOfCustomer?: number;
  trainingTyp: TrainingTyp;
}
