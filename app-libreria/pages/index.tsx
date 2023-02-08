
import { NextPage } from "next"
// import { NavBar } from "../components/commons";
import { PublicLayouts } from "../layouts";



//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {


  return (
    <PublicLayouts>
      {/* <NavBar /> */}
      <h2>Libreria Picasso </h2>
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