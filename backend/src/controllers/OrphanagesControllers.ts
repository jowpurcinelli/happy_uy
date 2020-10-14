import {Request, Response} from 'express';

import  Orphanage from './models/Orphnage';
import { getRepository } from "typeorm";



export default {
    async create(request: Request, response: Response, ){
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