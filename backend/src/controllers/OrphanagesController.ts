import {Request, Response} from 'express';
import { getRepository } from "typeorm";

import  Orphanage from '../models/Orphanage';
import orphanageView from '../views/orphanages_view';
import * as Yup from 'yup';

//CONTROLLERS :  index, show, create, update, delete

export default {
    async index (request: Request, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find({
            relations: [ 'images' ]
        });  //can pass {conditions} 

        return response.json(orphanageView.renderMany(orphanages));
    },
    async show (request: Request, response: Response) {
        const { id } = request.params;

        const orphanagesRepository = getRepository(Orphanage);

        const orphanage = await orphanagesRepository.findOneOrFail(id, {
            relations: ['images']
        });  //can pass {conditions} 

        return response.json(orphanageView.render(orphanage));
    },
    
    async create(request: Request, response: Response ){
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
            phone_number,
         } = request.body;
        
         const orphanagesRepository = getRepository(Orphanage);
    
         const requestImages = request.files as Express.Multer.File[]; // Array de arquivos do multer

         const images = requestImages.map( image => {
             return { path: image.filename };
         });

         const data = {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends: open_on_weekends === 'true' ,
            phone_number,
            images
         };

         const schema = Yup.object( ).shape({
             name: Yup.string( ).required( ),
             latitude: Yup.number( ).required( ),
             longitude: Yup.number( ).required( ),
             about: Yup.string( ).required( ).max(800),
             instructions: Yup.string( ).required( ),
             opening_hours: Yup.string( ).required( ),
             open_on_weekends: Yup.boolean( ).required( ),
             images: Yup.array( 
                 Yup.object( ).shape( {
                    path: Yup.string( ).required( )
             }) ),

         } );

         
         await schema.validate( data, {
             abortEarly: false, //return all errors together
         } );

         const orphanage = orphanagesRepository.create( data );
    
            await orphanagesRepository.save(orphanage);
            //assincrono
            return response.status(201).json(orphanage);
        //201 is the http code for created
    },
};