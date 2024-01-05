import express from 'express';
import axios from 'axios';
const router = express.Router();

router.get('/characters', async (req, res) => {
    try {
        const speciesParam = req.query.species || 'human';
        const page = parseInt(req.query.page as string, 10) || 1;
        const pageSize = parseInt(req.query.pageSize as string, 10) || 5;

        const response = await axios.get(
            'https://rickandmortyapi.com/graphql',
            {
                params: {
                    query: `
          query {
            characters(filter: { species: "${speciesParam}" }) {
              results {
                id
                name
                status
                species
                type
                gender
                origin {
                  name
              
                }
                image
                created
              }
            }
          }
          `,
                },
            }
        );

        // http://localhost:3300/api/characters?species=human&pageSize=5&page=2

        // Obtenemos todos los personajes de la respuesta de la API
        const allCharacters = response.data.data.characters.results;

        // Calculamos el índice de inicio y fin para la paginación
        const startIndex : number = (page - 1) * pageSize;
        const endIndex : number = page * pageSize;

        // Extraemos solo los personajes que pertenecen a la página actual
        const charactersOnPage = allCharacters.slice(startIndex, endIndex);
        //console.log('Characters on Page:', charactersOnPage);

        // Calculamos el número total de páginas
        const totalPages = Math.ceil(allCharacters.length / pageSize);

        // Creamos un objeto con la información de paginación
        const paginationInfo = {
            totalPages,
            currentPage: page,
            pageSize,
            totalCharacters: allCharacters.length,
        };

        // Incluimos tanto los personajes de la página actual como la información de paginación en la respuesta
        const responsePayload = {
            characters: charactersOnPage,
            pagination: paginationInfo,
        };

        res.json(responsePayload);
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
        res.status(500).json({ error: 'Error al obtener los personajes' });
    }
});

export default router;
