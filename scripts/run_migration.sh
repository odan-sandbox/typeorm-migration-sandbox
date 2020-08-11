#!/bin/bash

set -eux

TYPEORM_CLI="yarn ts-node ./node_modules/typeorm/cli.js"

$TYPEORM_CLI migration:run --config src/config