import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;

 

  ::-webkit-scrollbar {
  background: #fff;  
  width: 12px;

}

::-webkit-scrollbar-thumb {
  background: #fff;    
  border-radius: 20px;      
  border: 3px solid  #07BC0C;  
 
}
}



`;
