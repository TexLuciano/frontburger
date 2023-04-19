import React, { Dispatch, SetStateAction } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from './ModalCreateCategory/style';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { AiFillDelete } from 'react-icons/ai';
import { NewCategory } from './ModalCreateCategory';
import {CreateCategoryType} from '../../../../types/types'


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 520,
  bgcolor: 'none',
  border: '2px solid #07BC0C',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

export interface PopupProps {
 
  setCategory: Dispatch<SetStateAction<[] | CreateCategoryType[]>>;
}

export default function ModalCreateCategory({setCategory}:PopupProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{marginLeft:'30px'}}>
      <Button onClick={handleOpen}>Nova Categoria</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <NewCategory setCategory={setCategory}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
