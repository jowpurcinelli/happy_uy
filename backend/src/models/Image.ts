import {  Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
//ManyToOne = Many images that belongs to 1 orphanage
import Orphanage from './Orphanage';


@Entity( 'images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column( )
    path: string;

    //outside db

    @ManyToOne(( ) => Orphanage, orphanage => orphanage .images)
    @JoinColumn({ name: 'orphanage_id' })
    orphanage: Orphanage;

}