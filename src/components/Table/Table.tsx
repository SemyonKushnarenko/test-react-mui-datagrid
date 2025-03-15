import { DataGrid, GridEventListener, GridFilterModel, GridPaginationModel, GridSortModel } from "@mui/x-data-grid";
import { useGetFilms } from "../../api/hooks/queries/use-get-films";
import { useState } from "react";
import { Portal } from "@mui/material";
import FilmModal from "../Modals/FilmModal";
import { Film } from "../../types";
import useFilmsColumns from "../../hooks/use-films-columns";
import ImgModal from "../Modals/ImgModal";
import useLocalStorageState from "../../hooks/use-local-storage";
import { pageSizeOptions } from "../../constants/table";

export default function Table() {
    const {data, isLoading} = useGetFilms();
    const [modalRow, setModalRow] = useState<Film | null>(null);
    const handleOnRowClick: GridEventListener<'rowClick'> = (params, event) => {
        event.stopPropagation();
        setModalRow(params.row);
    };
    const {
        filmsColumns,
        closeImgModal,
        imgModal,
    } = useFilmsColumns();

    const [sortModel, setSortModel] = useLocalStorageState<GridSortModel>([], 'sortModel');

    const handleSortChange = (model: GridSortModel) => {
        if (JSON.stringify(model) !== JSON.stringify(sortModel)) {
            setSortModel(model);
        }
    };

    const [filterModel, setFilterModel] = useLocalStorageState<GridFilterModel>({items: []}, 'filterModel');

    const handleFilterChange = (model: GridFilterModel) => {
        if (JSON.stringify(model) !== JSON.stringify(filterModel)) {
            setFilterModel(model);
        }
    };

    const [paginationModel, setPaginationModel] = useLocalStorageState<GridPaginationModel>({pageSize: pageSizeOptions[0], page: 0}, 'paginationModel');

    const handlePaginationChange = (model: GridPaginationModel) => {
        if (JSON.stringify(model) !== JSON.stringify(filterModel)) {
            setPaginationModel(model)
        }
    };
    
    return (
        <>
            <DataGrid 
                rows={data?.Response === 'True' ?  data?.Search : []} 
                columns={filmsColumns}
                getRowId={(row) => row.imdbID}
                getRowHeight={() => "auto"}
                loading={isLoading}
                initialState={{
                    pagination: {
                        paginationModel: paginationModel ? paginationModel : {
                            pageSize: pageSizeOptions[0],
                            page: 0,
                        },
                    },
                }}
                pageSizeOptions={pageSizeOptions}
                onPaginationModelChange={handlePaginationChange}
                onSortModelChange={handleSortChange}
                sortModel={sortModel ? sortModel : []}
                onFilterModelChange={handleFilterChange}
                filterModel={filterModel ? filterModel : {items: []}}
                onRowClick={handleOnRowClick}
                sx={{
                    "& .MuiDataGrid-cell": {
                        minHeight: 100,
                        maxHeight: 300,
                        border: 1,
                        borderRight: 0,
                        borderTop: 0,
                        borderColor: 'success.main',
                    },
                    backgroundColor: 'primary.main',
                    transition: 'all .3s ease',
                    "& .film-title-cell": {
                        backgroundColor: 'secondary.main',
                        fontSize: '2rem',
                    }
                }}
            />
            <Portal 
                children={
                    <FilmModal
                        film={modalRow}
                        isOpened={!!modalRow}
                        handleClose={() => setModalRow(null)} 
                    />
                }
                container={document.body}
            />
            <Portal 
                children={
                    <ImgModal
                        image={imgModal}
                        isOpened={!!imgModal}
                        handleClose={closeImgModal} 
                    />
                }
                container={document.body}
            />
        </>
    )
}