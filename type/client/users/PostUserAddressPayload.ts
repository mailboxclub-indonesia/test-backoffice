import { Address } from "../Address";

export interface PostUserAddressPayload extends Address {
  userId: string;
}
