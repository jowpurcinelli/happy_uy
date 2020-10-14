import { text } from "express";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602636230693 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // realiza alteraciones que solicitamos en el banco de datos
        await queryRunner.createTable( new Table( {
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true, //osea, no puede ser negativa
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment', //para cada nuevo registro, sera generada utilizando una logica de imcrementacion, osea, aumenta el id en 1+

                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                }, 
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                }, 
                {
                    name: 'opening_hours',
                    type: 'varchar',
                },                                    
            ],
        }))
    
    
    
    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    // desace lo que fue hecho por el up
    await queryRunner.dropTable( 'orphanages');
    }

}
