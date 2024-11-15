import { Person } from "../Person";
import { BaseEntity } from "../BaseEntity";

export interface PostUserDetailResponse extends Person, BaseEntity {
  userId: string;
  phone: string;
}
