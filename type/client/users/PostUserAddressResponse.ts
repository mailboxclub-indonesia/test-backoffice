import { Address } from "../Address";
import { BaseEntity } from "../BaseEntity";

export interface PostUserAddressResponse extends Address, BaseEntity {
  userId: string;
}
