import { BaseEntity } from "../BaseEntity";
import { Person } from "../Person";

export interface PostUserDetailPayload extends Person {
  userId: string;
  phone: string;
}
