import { Address } from "../Address";
import { BaseEntity } from "../BaseEntity";

export interface GetInstitutionAddressResponse extends Address, BaseEntity {
  institutionId: string;
}
