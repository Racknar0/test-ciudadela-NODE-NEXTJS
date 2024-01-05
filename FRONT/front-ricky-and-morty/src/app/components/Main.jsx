import React from 'react';
import SelectComponent from './MainComponents/SelectComponent';
import BasicTable from './MainComponents/BasicTable';
import variables from '../styles/components/main.module.scss';
import Image from 'next/image';
import PaginationOutlined from './Pagination';

const Main = () => {
    return (
        <div className={variables.main}>
            <h2>
                Ayuda a Rick a clasificar a los personajes de la serie por su
                especie
            </h2>
            <Image src="/rick.png" alt="rick" width={270} height={200} />
            <SelectComponent />
            <BasicTable />
            {/* <Button variant="text">Enviar</Button> */}
            <PaginationOutlined />
        </div>
    );
};

export default Main;
