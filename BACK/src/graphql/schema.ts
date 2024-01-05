import axios from 'axios';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Character {
    id: ID!
    name: String!
    status: String!
    species: String!
    type: String!
    gender: String!
    origin: String!
    image: String!
    created: String!
  }

  type Query {
    getHumanCharacters: [Character]!
  }
`);

const root = { 
    getHumanCharacters: async () => {
        console.log('Entrando en getHumanCharacters'); // Agrega este 
      try {
        const response = await axios.get('https://rickandmortyapi.com/graphql', {
          params: {
            query: `
            query {
                characters(filter: { species: "human" }) {
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
        });

        console.log('API Response:', response.data);  // Imprime toda la respuesta de la API
        console.log('Characters:', response.data.data.characters.results);  // Imprime la lista de personajes
  
        return response.data;
      } catch (error) {
        console.error('Error al obtener los personajes humanos:', error);
        throw new Error('Error al obtener los personajes humanos');
      }
    },
  };

export { schema, root };



