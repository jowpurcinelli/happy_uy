import {Request, Response} from 'express';
import { getRepository } from "typeorm";

import  Orphanage from '../models/Orphanage';


//CONTROLLERS :  index, show, create, update, delete

export default {
    async index (request: Request, response: Response){
        const orphanagesRepository = getRepository(Orphanage);

        const orphanages = await orphanagesRepository.find();  //can pass {conditions} 

        return response.json(orphanages);
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
    
         } = request.body;
        
         const orphanagesRepository = getRepository(Orphanage);
    
         const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
    
         })
    
            await orphanagesRepository.save(orphanage);
            //assincrono
            return response.status(201).json(orphanage);
        //201 is the http code for created
    }
};