import { Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid"
import { useState } from "react";
import { FilmImage } from "../types";

export default function useFilmsColumns() {
    const [imgModal, setImgModal] = useState<FilmImage | null>(null)

    const handleImgModalClick = (event: React.MouseEvent, image: FilmImage) => {
        event.stopPropagation();

        setImgModal(image)
    }
    const closeImgModal = () => {
        setImgModal(null)
    }

    return {
        filmsColumns: [
            { 
                field: "imdbID", 
                headerName: "ID", 
                flex: .3 
            },
            { 
                field: "Title", 
                headerName: "Title", 
                flex: .6, 
                cellClassName: 'film-title-cell',
                renderCell: (params: GridRenderCellParams<any, string>) => (
                    <Typography variant="h4">{params.value}</Typography>
                ),  
            },
            { 
                field: "Year",
                headerName: "Year", 
                flex: .4,
                renderCell: (params: GridRenderCellParams<any, string>) => (
                    <Typography variant="h5" color="secondary.main">{params.value}</Typography>
                ),
            },
            { 
                field: 'Poster', 
                headerName: "Poster", 
                flex: 1,
                sortable: false,
                filterable: false,
                renderCell: (params: GridRenderCellParams<any, string>) => (
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        sx={{ height: '100%' }}
                    >
                        <img
                            onClick={(e) => handleImgModalClick(e, {
                                Poster: params.value,
                                Title: params.row.Title,
                            })}
                            src={params.value}
                            alt={params.row.Title}
                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                        />
                    </Box>
                ), 
            },
        ],
        imgModal,
        closeImgModal,
    }
}