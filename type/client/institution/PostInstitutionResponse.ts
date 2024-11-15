import { BaseEntity } from "../BaseEntity";

export interface PostInstitutionResponse extends BaseEntity {
  name: string;
  type: string;
}
