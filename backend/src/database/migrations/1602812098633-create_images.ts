import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602812098633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, 
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment', 
                },
                {
                    name: 'path',
                    type: 'varchar',
                },
                {
                    name: 'orphanage_id',
                    type: 'integer',
                }

            ],
            foreignKeys: [
                {
                    name: 'OrphanageImage',
                    columnNames: [  'orphanage_id' ],
                    referencedTableName: 'orphanages',
                    referencedColumnNames:  [ 'id' ],
                    onUpdate: ' CASCADE ', //efecto cascata 
                    onDelete: ' CASCADE ', //if orphanage deleted = image deleted aswell
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images');
    }

}
