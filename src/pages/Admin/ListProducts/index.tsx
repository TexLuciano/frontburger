import { useEffect, useState } from 'react';
import * as C from './style';
import api from '../../../services/api';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductType } from '../../../types/types';
import { GiConfirmed } from 'react-icons/gi';
import { AiOutlineStop } from 'react-icons/ai';
import { formateCurrency } from '../../../utils/FormateValue';

import TransitionsModal from './Popup/Popup';
import ModalEdit from './EditProduct/EditProductModal';

export const ListProducts = () => {
  const [products, setProducts] = useState<ProductType[] | []>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');

      setProducts(data);
    }
    loadProducts();
  }, []);

  function isOfer(value: boolean) {
    if (value) return <GiConfirmed style={{ color: 'green' }} />;
    return <AiOutlineStop style={{ color: 'red' }} />;
  }

  return (
    <C.Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Nome</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center">Produto em Oferta</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell align="center">Editar Produto </TableCell>
              <TableCell align="center">Deletar Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center" component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="center">
                    {formateCurrency(Number(product.price))}
                  </TableCell>
                  <TableCell align="center">{isOfer(product.offer)}</TableCell>
                  <TableCell align="center">
                    <C.ProductImg src={product.url} alt={product.name} />
                  </TableCell>
                  <TableCell align="center">
                    <ModalEdit product={product} setProducts={setProducts} />
                  </TableCell>
                  <TableCell align="center">
                    <TransitionsModal
                      id={product.id}
                      setProducts={setProducts}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
};
