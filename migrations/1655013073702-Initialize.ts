import { MigrationInterface, QueryRunner } from "typeorm";

export class Initialize1655013073702 implements MigrationInterface {
  name = "Initialize1655013073702";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`createdAt\` datetime(0) NOT NULL COMMENT '作成日時' DEFAULT CURRENT_TIMESTAMP, \`updatedAt\` datetime(0) NOT NULL COMMENT '更新日時' DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP(0), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
