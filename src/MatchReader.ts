import { dateStringToDate } from './utils';

interface DataReader {
  read(): void;
  data: string[][]
}

export class MatchReader {
  constructor(public reader: DataReader) {}
}