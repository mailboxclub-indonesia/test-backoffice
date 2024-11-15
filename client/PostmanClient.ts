import { AuthenticationClient } from "./AuthenticationClient";
import { UserClient } from "./UserClient";
import { InstitutionClient } from "./InstitutionClient";

export class PostmanClient {
  public auth: AuthenticationClient;
  public user: UserClient;
  public institution: InstitutionClient;

  constructor(
    auth: AuthenticationClient,
    user: UserClient,
    institution: InstitutionClient,
  ) {
    this.auth = auth;
    this.user = user;
    this.institution = institution;
  }
}
