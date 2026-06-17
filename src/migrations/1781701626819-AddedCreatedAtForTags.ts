import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedCreatedAtForTags1781701626819 implements MigrationInterface {
    name = 'AddedCreatedAtForTags1781701626819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" DROP COLUMN "createdAt"`);
    }

}
