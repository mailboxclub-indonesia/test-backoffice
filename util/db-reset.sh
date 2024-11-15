#!/bin/bash

# Load environment variable
source "$(dirname "$0")/../.env"

# Database connection parameters
echo "DB_NAME $DB_NAME"
echo "DB_USERNAME $DB_USERNAME"
echo "DB_HOST $DB_HOST"
echo "DB_CONTAINER_NAME $DB_CONTAINER_NAME"

echo "Reseting $DB_NAME dabatabase."
# Export the password so `psql` doesn't prompt for it
export PGPASSWORD=$DB_PASS
# Get all table names from the database inside the container
TABLES=$(docker exec -e PGPASSWORD=$DB_PASS $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_NAME -Atc "SELECT tablename FROM pg_tables WHERE schemaname='public';")

# Iterate over each table and delete data
for TABLE in $TABLES; do
  docker exec -e PGPASSWORD=$DB_PASS $DB_CONTAINER_NAME psql -U $DB_USERNAME -d $DB_NAME -c "TRUNCATE TABLE $TABLE CASCADE;"
done

echo "All data has been deleted from all tables."
