import { AppProvider } from './context';
import { useRoutes } from 'react-router-dom';
import routes from './routes';




function App() {
  const element = useRoutes(routes)
  
  return (
    <>
      <AppProvider>
           {element}
      </AppProvider>
    </>
  );
}

export default App;
