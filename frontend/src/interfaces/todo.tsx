import { StatusEnum } from "../enums/status";

export interface TodoInterface {
  id?: string;
  title: string;
  status: StatusEnum;
}
