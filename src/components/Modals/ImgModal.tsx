import { Box, Modal } from "@mui/material";
import { FilmImage } from "../../types";

interface ImgModalProps {
    isOpened: boolean;
    handleClose: () => void;
    image: FilmImage | null;
}

export default function ImgModal(
    { isOpened, handleClose, image }: ImgModalProps
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
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ 
                        height: '80%', 
                        width: 'auto', 
                        padding: '24px',
                        backgroundColor: 'secondary.main',
                    }}
                >
                    <img
                        src={image?.Poster}
                        alt={image?.Title}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }}
                    />
                </Box>
        </Modal>
    )
}