import { expect, test } from "@playwright/test";
import { AuthenticationClient } from "../client/AuthenticationClient";
import { UserClient } from "../client/UserClient";
import { PostmanClient } from "../client/PostmanClient";
import { Store } from "../client/Store";
import { resetDatabase } from "../util/db";
import { InstitutionClient } from "../client/InstitutionClient";

const authenticationClient = new AuthenticationClient();
const userClient = new UserClient();
const institutionClient = new InstitutionClient();
const postmanClient = new PostmanClient(
  authenticationClient,
  userClient,
  institutionClient,
);

test.describe.configure({ mode: "serial" });

test("auth", async function() {
  await postmanClient.auth.signup({
    email: "reizkian@mailboxclubindonesia.org",
    password: "reizkian123",
    confirmPassword: "reizkian123",
  });

  const loginResponse = await postmanClient.auth.login({
    email: "reizkian@mailboxclubindonesia.org",
    password: "reizkian123",
  });

  expect(loginResponse).toHaveProperty("id");
  expect(loginResponse).toHaveProperty("token");

  Store.userId = loginResponse.id;
  Store.token = loginResponse.token;
});

test("institution", async function() {
  const postInstitutionResponse =
    await postmanClient.institution.postInstiution({
      name: "The Mailbox Club Indonesia",
      type: "FOUNDATION",
    });

  expect(postInstitutionResponse).toHaveProperty("id");
  Store.institutionId = postInstitutionResponse.id;

  const getInstitutionResponse = await postmanClient.institution.getInstitution(
    Store.institutionId,
  );
  expect(getInstitutionResponse).toHaveProperty("id");

  const putInstitutionResponse = await postmanClient.institution.putInstitution(
    Store.institutionId,
    {
      name: "The Mailbox Club International",
      type: "FOUNDATION",
    },
  );
  expect(putInstitutionResponse).toHaveProperty("name");
  expect(putInstitutionResponse.name).toBe("The Mailbox Club International");
});

test("user", async function() {
  const postUserDetailResponse = await postmanClient.user.postUserDetail({
    userId: Store.userId,
    firstname: "Reizkian",
    lastname: "Yesaya",
    gender: "MALE",
    birthdate: "1996-03-10",
    phone: "+6285157236637",
  });

  Store.userDetailId = postUserDetailResponse.id;

  const getUserDetailResponse = await postmanClient.user.getUserDetail(
    Store.userDetailId,
  );
  expect(getUserDetailResponse).toHaveProperty("id");
  expect(getUserDetailResponse).toHaveProperty("userId");

  const putUserDetailResponse = await postmanClient.user.putUserDetail(
    Store.userDetailId,
    {
      userId: Store.userId,
      firstname: "Reizkian",
      lastname: "Radityatama",
      gender: "MALE",
      birthdate: "1996-03-10",
      phone: "+6285157236638",
    },
  );
  expect(putUserDetailResponse.lastname).toBe("Radityatama");
  expect(putUserDetailResponse.phone).toBe("+6285157236638");
});

test("cleanup", async function() {
  await resetDatabase();
});
