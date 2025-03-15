import { Box, Modal, Typography } from "@mui/material";
import { Film } from "../../types";

interface FilmModalProps {
    isOpened: boolean;
    handleClose: () => void;
    film: Film | null;
}

export default function FilmModal(
    { isOpened, handleClose, film }: FilmModalProps
) {
    return ( 
        <Modal
            open={isOpened}
            onClose={handleClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'secondary.main',
                    maxWidth: '1024px',
                    padding: '24px',
                    display: "flex",
                    gap: '24px',
                }}
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '100%' }}
                >
                    <img
                        src={film?.Poster}
                        alt={film?.Title}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                    />
                </Box>
                <Box
                    sx={{
                        
                    }}
                >
                    <Typography variant="h6">
                        {film?.Title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {film?.Type}
                    </Typography>
                </Box>
            </Box>
        </Modal>
    )
}