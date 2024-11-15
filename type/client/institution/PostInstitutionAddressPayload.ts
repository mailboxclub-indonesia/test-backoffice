import { Address } from "../Address";

export interface PostInstitutionAddressPayload extends Address {
  institutionId: string;
}
