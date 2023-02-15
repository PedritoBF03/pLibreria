import { PublicLayouts } from '../../layouts/PublicLayouts';
import { LibrosCardList } from '../../components/libros';
import { useLibros } from '../../hooks/useLibros';

export const indexLibrosPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { libros, isLoading } = useLibros('/libros');
    console.log("l=", isLoading, "c=", libros);

  return (
    <PublicLayouts>
            <h2>Seccion de Libros</h2>
            <LibrosCardList libros = {libros} />
    </PublicLayouts>
  )
}

export default indexLibrosPage