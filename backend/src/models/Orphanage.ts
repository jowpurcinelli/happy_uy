import {  Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
//OneToMany = Relationship of 1 orphanage to Many images
// *****important *****
import Image from './Image';

@Entity( 'orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column( )
    name: string;

    @Column( )
    latitude: number;

    @Column( )
    longitude: number;

    @Column( )
    about: string;

    @Column( )
    instructions: string;

    @Column( )
    open_on_weekends: boolean;

    @Column( )
    opening_hours: string;


    //out of database, so it's not a Column
    @OneToMany( ( ) => Image, image => image.orphanage, {
        cascade: [ 'insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image [ ];
    
}