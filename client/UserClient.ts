import { HttpClient } from "./HttpClient";
import { ENVIRONMENT } from "../constant/env";
import {
  GetUserAddressResponse,
  PostUserAddressPayload,
  PostUserAddressResponse,
  PostUserDetailPayload,
  PostUserDetailResponse,
} from "../type/client/users";
import { GetUserDetailResponse } from "../type/client/users/GetUserDetailResponse";

export class UserClient extends HttpClient {
  constructor() {
    super(`${ENVIRONMENT.HOST}/api/users`);
  }

  public async postUserDetail(payload: PostUserDetailPayload) {
    return this.post<PostUserDetailResponse>("/detail", payload);
  }

  public async getUserDetail(id: string) {
    return this.get<GetUserDetailResponse>(`/detail/${id}`);
  }

  public async putUserDetail(id: string, payload: PostUserDetailPayload) {
    return this.put<PostUserDetailResponse>(`/detail/${id}`, payload);
  }

  public async postUserAddress(payload: PostUserAddressPayload) {
    return this.post<PostUserAddressResponse>("/address", payload);
  }

  public async getUserAddress(id: string) {
    return this.get<GetUserAddressResponse>(`/address/${id}`);
  }

  public async putUserAddress(id: string, payload: PostUserAddressPayload) {
    return this.put<PostUserAddressResponse>(`/address/${id}`, payload);
  }
}
