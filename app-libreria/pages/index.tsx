
import { NextPage } from "next"
// import { NavBar } from "../components/commons";
import { PublicLayouts } from "../layouts";
import { useClientes } from '../hooks/useClientes';



//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {

  // Linea de excepcion para el createHook, me falla en una regla de los hooks
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { clientes, isLoading } = useClientes ('/clientes');

  console.log(isLoading, "c=", clientes);
  return (
    <PublicLayouts>

      {/* {
        (isLoading )
          ? <ClientesList clientes={ clientes } />
          : <Mundo />
      } */}


      {/* <NavBar /> */}
      {/* <h2>Libreria Picasso </h2> */}

    </PublicLayouts>
  )
}

export default indexPage

// const indexPage = () => {
//   return (
//     <h1>
//       Hola mundo
//     </h1>
//   )
// }