import {MigrationInterface, QueryRunner} from "typeorm";

export class addStatus1597166656257 implements MigrationInterface {
    name = 'addStatus1597166656257'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` ADD `status` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `status`");
    }

}
