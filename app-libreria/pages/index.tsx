
import { NextPage } from "next"
import { MainLayouts } from "../layouts";
import { NavBar } from '../components/commons';


//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {


  return (
    <MainLayouts>
      <NavBar />
      <h2>Libreria Picasso </h2>
    </MainLayouts>
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