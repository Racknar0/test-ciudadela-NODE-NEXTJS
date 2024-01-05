import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import variables from '../styles/components/pagination.module.scss';
import { AppContext } from '../context/AppProvider';

export default function PaginationOutlined() {
    const { pagination, setPage, page } = React.useContext(AppContext);

    const handlePageChange = (event, newPage) => {
        // Llama a la función setPage del contexto para actualizar la página actual
        setPage(newPage);
    };

    return (
        <div className={variables.pagination_container}>
            <Stack spacing={1}>
                <Pagination 
                    count={pagination.totalPages}
                    page={page} // Establece la página actual
                    onChange={handlePageChange} // Maneja el cambio de página
                    variant="outlined" 
                    color="secondary" />
            </Stack>
            <p className={variables.pagination_text}>
                Page {pagination.currentPage} of {pagination.totalPages}
            </p>
            <p>
                
            </p>
        </div>
    );
}