import { Address } from "../Address";
import { BaseEntity } from "../BaseEntity";

export interface GetUserAddressResponse extends Address, BaseEntity {
  userId: string;
}
