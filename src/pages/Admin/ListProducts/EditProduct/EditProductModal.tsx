import React, { Dispatch, SetStateAction } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import * as C from './style'
import Typography from '@mui/material/Typography';
import { AiFillDelete } from 'react-icons/ai';
import api from '../../../../services/api';
import { toast } from 'react-toastify';
import { ProductType } from '../../../../types/types';
import { EditProduct } from './Form';
import { RiEdit2Fill } from 'react-icons/ri';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 564,
  bgcolor: 'none',
  border: '2px solid #07BC0C',
  borderRadius:'15px',
  boxShadow: 24,
  p: 4,
};

interface PopupProps {
  product: ProductType;
  setProducts: Dispatch<SetStateAction<[] | ProductType[]>>;
}

export default function ModalEdit({ product, setProducts }: PopupProps) {




  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function loadProducts() {
    const { data } = await api.get('products');
    setProducts(data);
  }


  return (
    <div>
      <C.ButtonOpen onClick={handleOpen}>
        <RiEdit2Fill />
      </C.ButtonOpen>
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
              <EditProduct product={product}/>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
