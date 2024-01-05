import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useContext } from 'react';
import variables from '../../styles/components/main.module.scss';
import { AppContext } from '@/app/context/AppProvider';

const SelectComponent = () => {
    const { species, setSpecies, pageSize, setPageSize } = useContext(AppContext);

    const handleChangeSpecies = (event) => {
        setSpecies(event.target.value);
    };

    const handleChangePageSize = (event) => {
        setPageSize(event.target.value);
    };

    return (
        <div className={variables.select_container}>
            <FormControl fullWidth className={variables.select}>
                <InputLabel id="demo-simple-select-label">Especie</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={species}
                    label="Age"
                    onChange={handleChangeSpecies}
                >
                    <MenuItem value={'Human'}>Human</MenuItem>
                    <MenuItem value={'Alien'}>Alien</MenuItem>
                </Select>
            </FormControl>

            <FormControl fullWidth className={variables.select}>
                <InputLabel id="demo-simple-select-label">Results</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={pageSize}
                    label="PageSize"
                    onChange={handleChangePageSize}
                >
                    <MenuItem value={'1'}>1</MenuItem>
                    <MenuItem value={'2'}>2</MenuItem>
                    <MenuItem value={'3'}>3</MenuItem>
                    <MenuItem value={'4'}>4</MenuItem>
                    <MenuItem value={'5'}>5</MenuItem>
                    <MenuItem value={'6'}>6</MenuItem>
                    <MenuItem value={'7'}>7</MenuItem>
                    <MenuItem value={'8'}>8</MenuItem>
                    <MenuItem value={'9'}>9</MenuItem>
                    <MenuItem value={'10'}>10</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectComponent;
