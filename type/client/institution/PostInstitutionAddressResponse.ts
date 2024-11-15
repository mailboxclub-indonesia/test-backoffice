import { Address } from "../Address";
import { BaseEntity } from "../BaseEntity";

export interface PostInstitutionAddressResponse extends Address, BaseEntity {
  institutionId: string;
}
