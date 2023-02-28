import useSWR, { SWRConfiguration } from 'swr';
import { ICliente } from '../interfaces/clientes/IClientes';
import { ILibro } from '../interfaces/libros/ILibros';


export const useLibros = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<ILibro[]>(`http://localhost:3000/api${url}`, config);
    console.log(data);
    return {
        libros: data || [],
        isLoading: !error && !data,
        isError: error
    }
}