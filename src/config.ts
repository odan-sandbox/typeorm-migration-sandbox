import { ConnectionOptions } from "typeorm";

const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "typeorm-migration-sandbox",
  password: "typeorm-migration-sandbox",
  database: "typeorm-migration-sandbox",
  entities: [__dirname + "/entity/*.ts"],
  synchronize: false,
  cli: {
    migrationsDir: "migrations",
  },
};

export = config;
