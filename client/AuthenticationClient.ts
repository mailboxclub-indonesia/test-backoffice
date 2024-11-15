import { HttpClient } from "./HttpClient";
import { ENVIRONMENT } from "../constant/env";
import {
  LoginPayload,
  LoginResponse,
  SignupPayload,
  SignupResponse,
} from "../type/client/authentication";

export class AuthenticationClient extends HttpClient {
  constructor() {
    super(`${ENVIRONMENT.HOST}/api/auth`);
  }

  public async login(payload: LoginPayload) {
    return this.post<LoginResponse>("/login", payload);
  }

  public async signup(payload: SignupPayload) {
    return this.post<SignupResponse>("/signup", payload);
  }
}
