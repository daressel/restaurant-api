import { MigrationInterface, QueryRunner } from "typeorm";

export class InitDatabaseEntityes1717590842900 implements MigrationInterface {
    name = 'InitDatabaseEntityes1717590842900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "companies" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "opening_time" TIME NOT NULL, "closing_time" TIME NOT NULL, "name" character varying NOT NULL, "company_id" uuid, CONSTRAINT "PK_e2133a72eb1cc8f588f7b503e68" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "halls" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "type" json NOT NULL, "restaurant_id" uuid, CONSTRAINT "PK_4665c2f3b1e718e12b06278bae8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tables" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "hall_id" uuid, CONSTRAINT "PK_7cf2aca7af9550742f855d4eb69" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "restaurants" ADD CONSTRAINT "FK_35430d3ca6c57f91da0f35e0cf2" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "halls" ADD CONSTRAINT "FK_48ab3cc0fc29d3566ddf1f3cfb5" FOREIGN KEY ("restaurant_id") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "tables" ADD CONSTRAINT "FK_3228fd90773f1fa732f16ae3616" FOREIGN KEY ("hall_id") REFERENCES "halls"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tables" DROP CONSTRAINT "FK_3228fd90773f1fa732f16ae3616"`);
        await queryRunner.query(`ALTER TABLE "halls" DROP CONSTRAINT "FK_48ab3cc0fc29d3566ddf1f3cfb5"`);
        await queryRunner.query(`ALTER TABLE "restaurants" DROP CONSTRAINT "FK_35430d3ca6c57f91da0f35e0cf2"`);
        await queryRunner.query(`DROP TABLE "tables"`);
        await queryRunner.query(`DROP TABLE "halls"`);
        await queryRunner.query(`DROP TABLE "restaurants"`);
        await queryRunner.query(`DROP TABLE "companies"`);
    }

}
