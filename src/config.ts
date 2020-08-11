import path from "path";
import { ConnectionOptions } from "typeorm";
import { CategoryEntity } from "./entity/category";

const config: ConnectionOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "typeorm-migration-sandbox",
  password: "typeorm-migration-sandbox",
  database: "typeorm-migration-sandbox",
  entities: [CategoryEntity],
  synchronize: false,
  logging: true,
  migrationsRun: true,
  migrations: [path.join(__dirname, "..", "migrations", "*.ts")],
};

export = config;
