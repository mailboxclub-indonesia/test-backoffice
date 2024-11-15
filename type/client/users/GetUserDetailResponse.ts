import { Person } from "../Person";
import { BaseEntity } from "../BaseEntity";

export interface GetUserDetailResponse extends Person, BaseEntity {
  userId: string;
}
