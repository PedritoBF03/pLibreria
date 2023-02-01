import { Button } from '@mui/material';
import React, { FC } from 'react'

interface Props {
    children: any;
}
export const MainLayouts:FC<Props> = ( {children} ) => {
  return (
    <>
        <header>
            <h2>Header de la página</h2>
            <Button 
                sx={{ backgroundColor:'red' }} variant='contained'
            >
                Hola mundo
            </Button>
        </header>
        <main>

        </main>
        <footer>

        </footer>
    </>
  )
}
