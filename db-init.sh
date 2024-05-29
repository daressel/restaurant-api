#!/bin/sh -e

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE DATABASE "restaurant_development";
  CREATE DATABASE "restaurant_test";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=restaurant_development <<-EOSQL
  CREATE EXTENSION "citext";
  CREATE EXTENSION "uuid-ossp";
EOSQL

psql --variable=ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname=restaurant_test <<-EOSQL
  CREATE EXTENSION "citext";
  CREATE EXTENSION "uuid-ossp";
EOSQL
