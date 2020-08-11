import { createConnection, getRepository } from "typeorm";
import config from "./config";
import { CategoryEntity, Category } from "./entity/category";

async function main(): Promise<void> {
  const connection = await createConnection(config);
  console.log(await connection.driver.createSchemaBuilder().log());
  const categoryRepository = getRepository<Category>(CategoryEntity);
  const category = await categoryRepository.findOne(1);
  console.log(category);
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
