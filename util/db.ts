import { Client } from "pg";
import { ENVIRONMENT } from "../constant/env";

const client = new Client({
  database: ENVIRONMENT.DB_NAME,
  user: ENVIRONMENT.DB_USERNAME,
  password: ENVIRONMENT.DB_PASSWORD,
  host: "localhost",
  port: 5432,
});

export async function resetDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database");

    // Get a list of all tables in the public schema
    const res = await client.query(`
      SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
    `);

    // Generate and execute a DELETE statement for each table
    for (let table of res.rows) {
      const tableName = table.table_name;
      await client.query(`TRUNCATE TABLE ${tableName} CASCADE`);
      console.log(`Deleted all records from ${tableName}`);
    }
  } catch (err) {
    console.error("Error deleting records:", err);
  } finally {
    await client.end();
    console.log("Connection closed");
  }
}
