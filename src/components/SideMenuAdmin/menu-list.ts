import { FaShoppingBag } from 'react-icons/fa';
import { TiShoppingCart } from 'react-icons/ti';
import { BsFillClipboardPlusFill } from 'react-icons/bs';


export const list =
[
  {
    id:1,
    label:'Pedidos',
    link:'pedidos',
    icon:FaShoppingBag
  },
  {
    id:2,
    label:'Produtos',
    link:'listar-produtos',
    icon:TiShoppingCart
  },
  {
    id:3,
    label:'Novo Produto',
    link:'cadastrar-produtos',
    icon:BsFillClipboardPlusFill
  },
]