import { BaseEntity } from "../BaseEntity";

export interface GetInstitutionResponse extends BaseEntity {
  name: string;
  type: string;
}
