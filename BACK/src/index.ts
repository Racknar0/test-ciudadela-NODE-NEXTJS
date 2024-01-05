import * as dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

// importar express
import express from 'express';
import http from 'http';

// Importar graphql
import { graphqlHTTP } from 'express-graphql';
import {schema, root } from './graphql/schema';

// importar rutas
import router from './routes/index';


const app = express();
const server = http.createServer(app);


// Configurar cors con las opciones adecuadas
app.use(cors({
  origin: 'http://localhost:3000', // o el origen de tu aplicación de frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));


// Configura el endpoint GraphQL
// app.use('/graphql', graphqlHTTP({
//     schema,  // Usa el esquema GraphQL que has importado
//     graphiql: true,  // Habilita GraphiQL para pruebas interactivas
//   }));
  

// ruta principal
app.use('/api', router);


server.listen(process.env.API_PORT, () => {
  console.log(`Server running on port ${process.env.API_PORT}`);
});


