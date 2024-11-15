import * as dotenv from "dotenv";
dotenv.config();

export function getEnvironmentVariable(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable ${key}`);
  return value;
}

export const ENVIRONMENT = {
  HOST: getEnvironmentVariable("HOST"),
  DB_NAME: getEnvironmentVariable("DB_NAME"),
  DB_USERNAME: getEnvironmentVariable("DB_USERNAME"),
  DB_PASSWORD: getEnvironmentVariable("DB_PASSWORD"),
};
