import { Dispatch ,SetStateAction} from 'react';
import * as C from './style';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CreateCategoryType } from '../../../../types/types';
import DeleteModal from './Popup/Popup';

interface PopupProps {
  category: CreateCategoryType[];
  setCategory: Dispatch<SetStateAction<[] | CreateCategoryType[]>>;
}

export const ListCategories = ({category, setCategory}:PopupProps) => {

  return (
    <C.Container >
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Imagem</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {category.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.id}</TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">
                <C.ProductImg src={row.url} alt={row.name}/>
              </TableCell>
              <TableCell align="center">
                  <DeleteModal id={row.id} setCategory={setCategory}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </C.Container>
  );
};
