import { BaseEntity } from "../BaseEntity";

export interface PostUserInstitutionResponse extends BaseEntity {
  userId: string;
  institutionId: string;
}
