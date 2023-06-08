import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import './App.css'
import Cargues from '../Cargues'
import Home from '../Home'
import Compra from '../Compra'
import Materiales from "../Materiales";
import MensualReport from "../MensualReport";
import NavBar from '../../Components/NavBar'

function App() {

  const AppRoutes = () =>{
    let routes = useRoutes([
      {
        path: '/cargues', 
        element: <Cargues/>
      },
      {
        path: '/', 
        element: <Home/>
      },
      {
        path: '/compra', 
        element: <Compra/>
      },
      {
        path: '/materiales', 
        element: <Materiales/>
      },
      {
        path: '/mensual-report', 
        element: <MensualReport/>
      },
    ])
    return routes
  }
  return (
    <BrowserRouter>
    <NavBar/>
      <AppRoutes/>
        
    </BrowserRouter>
  
  );
}

export default App;
