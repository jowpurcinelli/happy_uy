import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';


const app = express( );

app.use(cors( )); //if on production, determine inside { } which frontend is the development 
app.use(express.json( ));
app.use(routes);
app.use('/uploads', express.static(path.join( __dirname, '..',  'uploads')));
app.use(errorHandler);

app.listen(3333);


/*
Driver nativo:
     permite ejecutar querys del banco de datos diectamente por el node, pero no tiene abstraccion
-----------------
Query builder (knex):
    Permite escribir las querys utilizando syntax javascript
----------------
ORM (Object Relational Mapping):
    Hace un relacionamento de objectos para cada  registro de una tabla (si tengo 3 users, orm vas a representalos como User User User, osea, 3 instancias/objectos de la clase user)


    */