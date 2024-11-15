import { HttpClient } from "./HttpClient";
import { ENVIRONMENT } from "../constant/env";
import {
  GetInstitutionAddressResponse,
  GetInstitutionResponse,
  PostInstitutionAddressPayload,
  PostInstitutionAddressResponse,
  PostInstitutionPayload,
  PostInstitutionResponse,
} from "../type/client/institution";

export class InstitutionClient extends HttpClient {
  constructor() {
    super(`${ENVIRONMENT.HOST}/api/institutions`);
  }

  public async postInstiution(payload: PostInstitutionPayload) {
    return this.post<PostInstitutionResponse>("", payload);
  }

  public async getInstitution(id: string) {
    return this.get<GetInstitutionResponse>(`/${id}`);
  }

  public async putInstitution(id: string, payload: PostInstitutionPayload) {
    return this.put<PostInstitutionResponse>(`/${id}`, payload);
  }

  public async postInstitutionAddress(payload: PostInstitutionAddressPayload) {
    return this.post<PostInstitutionAddressResponse>("/address", payload);
  }

  public async getInstitutionAddress(id: string) {
    return this.get<GetInstitutionAddressResponse>(`/address/${id}`);
  }

  public async putInstitutionAddress(
    id: string,
    payload: PostInstitutionAddressPayload,
  ) {
    return this.post<PostInstitutionAddressResponse>(`/address/${id}`, payload);
  }
}
