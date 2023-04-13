import React, { useEffect, useState } from 'react';
import * as C from './style';
import api from '../../../services/api';
import { OrdersType, OrderFormated } from '../../../types/types';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Row from './row';
import { formateDate } from '../../../utils/FormateDate';
import { states } from './order-status';

type States ={
  id?:number,
  label?:string,
  value?:string
}


const Orders = () => {
  const [orders, setOrders] = useState<OrdersType[] | []>([]);
  const [rows, setRows] = useState<OrderFormated[] | []>([]);
  const [ordersFiltered, setOrdersFiltered] = useState<OrderFormated[] | []>(rows);
  const [activeCategory, setActiveCategory] = useState<States>({id:1});
  const [activeStatus, setActiveStatus] = useState<number | undefined | null>(null);

  useEffect(() => {
    async function loadOrders() {
      const { data }: { data: OrdersType[] } = await api.get('orders');

      setOrders(data);
    }
    loadOrders();
  }, []);

  useEffect(() => {
    if (activeCategory.id === 1 ) {
      setOrdersFiltered(rows);
    } else {
      const newFiltereds = rows.filter(
        (item) => item.status === activeCategory.label,
      );
      setOrdersFiltered(newFiltereds);
    }
    setActiveStatus(activeCategory?.id)
  }, [activeCategory, rows]);

  

  function createData(order: OrdersType) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formateDate(order.createdAt),
      status: order.status,
      products: order.products,
    };
  }
  useEffect(() => {
    const newRows = orders.map((ord) => createData(ord));

    setRows(newRows);

  }, [orders]);

  return (
    <C.Container>
      <C.Menu>
        {states &&
          states.map((item) => (
            <C.LinkMenu
              key={item.id}
              onClick={() => setActiveCategory(item)}
              active={item.id === activeStatus}
            >
              {item.label}
            </C.LinkMenu>
          ))}
      </C.Menu>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ordersFiltered.map((row: OrderFormated) => (
              <Row key={row.orderId} row={row}  orders={orders} setOrders={setOrders}/>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </C.Container>
  );
};

export default Orders;
