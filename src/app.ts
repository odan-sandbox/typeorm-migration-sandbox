import { createConnection } from "typeorm";
import config from "./config";

async function main(): Promise<void> {
  const connection = await createConnection(config);
  console.log(connection);
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
