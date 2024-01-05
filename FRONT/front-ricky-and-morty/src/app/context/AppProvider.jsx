// @jsxRuntime client
// src/app/context/AppProvider.jsx
'use client';

import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCharacters } from '../services/characterService';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    const [species, setSpecies] = useState('');
    const [pageSize, setPageSize] = useState(5);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState({});
    

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            
            try {
                const res = await getCharacters(species, pageSize, page);
                console.log(res.characters);
                setCharacters(res?.characters || []);
                setPagination(res?.pagination || {});
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1000); // Oculta el Spinner después de 1 segundo
            }
        };
    
        fetchData();
    }, [species ,pageSize, page]);

    const data = {
        name: 'Ricky and Morty App',
        characters,
        setCharacters,
        loading,
        setLoading,
        species,
        setSpecies,
        pageSize,
        setPageSize,
        page,
        setPage,
        pagination,
        setPagination,
    };

    console.log('data', data);

    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
