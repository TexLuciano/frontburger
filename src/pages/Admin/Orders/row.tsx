import React, { useEffect, useState } from 'react';
import * as C from './style';
import { OrdersType, OrderFormated } from '../../../types/types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import api from '../../../services/api';
import Select from 'react-select';
import { states } from './order-status';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';

interface Props {
  row: OrderFormated;
  orders: OrdersType[];
  setOrders: React.Dispatch<React.SetStateAction<[] | OrdersType[]>>;
  loadOrders: () => void;
}

const Row = ({ row, orders, setOrders, loadOrders }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  async function setNewStatus(id: string, status: string | undefined) {
    setIsLoading(true);
    await api.put(`orders/${id}`, { status });

    const newOrders = orders.map((order) => {
      return order._id === id ? { ...order, status } : order;
    });

    setOrders(newOrders);
    setIsLoading(false);
  }

  async function deleteOrder(id: string) {
    try {
      await api.delete(`orders/${id}`);
      toast.success('Pedido deletado')
    } catch (error) {
      console.log(error);
      toast.error('Tente novamente mais tarde')
    }

    loadOrders();
  }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderId}
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          <Select
            className="selectstyle"
            options={states.filter((item) => item.label !== 'Todos')}
            menuPortalTarget={document.body}
            placeholder="Status"
            defaultValue={states.find(
              (option) => option.value === row.status || null,
            )}
            onChange={(newStatus) => {
              setNewStatus(row.orderId, newStatus?.value);
            }}
            isLoading={isLoading}
          />
        </TableCell>
        <TableCell>
          <C.Button onClick={() => deleteOrder(row.orderId)}>
            <AiFillDelete />
          </C.Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Pedido
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Quantidade</TableCell>
                    <TableCell>Produto</TableCell>
                    <TableCell>Categoria</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((product) => (
                    <TableRow key={product._id}>
                      <TableCell component="th" scope="row">
                        {product.quantity}
                      </TableCell>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>
                        <C.ProductImg src={product.url} alt={product.name} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
