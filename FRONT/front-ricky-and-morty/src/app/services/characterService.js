import { UseAxios } from '../hooks/useAxios.jsx';

const axiosClient = UseAxios();
const url = '/characters';

// http://localhost:3300/api/characters?species=human&pageSize=5&page=2

const getCharacters = async (species, pageSize, page) => {
    // Si viene vacio, se asigna un valor por defecto
    species = species || 'human';
    pageSize = pageSize || 5;
    page = page || 1;

    try {
        // Por query params
        const response = await axiosClient.get(`${url}?species=${species}&pageSize=${pageSize}&page=${page}`);
        //console.log('response----------', response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
};

// const addCharacters = async (post) => {
//     try {
//         const response = await axiosClient.post(url, post);
//         return response.data;
//     } catch (error) {
//         console.log('error', error);
//     }
// };

// const updateCharacters = async (post) => {
//     try {
//         const response = await axiosClient.put(`${url}/${post.id}`, post);
//         return response.data;
//     } catch (error) {
//         console.log('error', error);
//     }
// };

// const deleteCharacters = async (id) => {
//     try {
//         const response = await axiosClient.del(`${url}/${id}`);
//         return response.data;
//     } catch (error) {
//         console.log('error', error);
//     }
// };

export { getCharacters };
