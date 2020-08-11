#!/bin/bash

set -eux

docker-compose down -v

docker-compose up -d

docker-compose logs --follow mysql | grep -m1 'mysqld: ready for connections'

sleep 3

TYPEORM_CLI="yarn ts-node ./node_modules/typeorm/cli.js"

$TYPEORM_CLI migration:run --config src/config.ts

$TYPEORM_CLI migration:generate --dir migrations --config src/config --name $1