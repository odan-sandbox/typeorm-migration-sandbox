import {MigrationInterface, QueryRunner} from "typeorm";

export class changeStatus1597167363399 implements MigrationInterface {
    name = 'changeStatus1597167363399'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `category` ADD `status` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `category` DROP COLUMN `status`");
        await queryRunner.query("ALTER TABLE `category` ADD `status` varchar(255) NOT NULL");
    }

}
