import { Button } from '@mui/material';
import React, { FC } from 'react'
import { NavBar } from '../components/commons';

interface Props {
    children: any;
}
export const MainLayouts:FC<Props> = ( {children} ) => {
  return (
    <>
        <header>
            <NavBar />
            {/* <h2>Header de la página</h2> */}
            {/* <Button 
                sx={{ backgroundColor:'red' }} variant='contained'
            >
                Hola mundo
            </Button> */}
        </header>
        <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer>
            <h2>Footer de la pagina</h2>
        </footer>
    </>
  )
}
