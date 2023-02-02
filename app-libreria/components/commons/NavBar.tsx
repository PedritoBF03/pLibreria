import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material"
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Link href='/' passHref component={ NextLink }>
          <Button sx={{ color: 'white'}}>Home</Button>
        </Link>
        <Box flex={1} />
        <Box>
          <Link href='/libros' passHref component={ NextLink }>
            <Button sx={{ color: 'white'}}>Libros</Button>
          </Link>
          <Link href='/categorias' component={ NextLink }>
            <Button sx={{ color: 'white'}}>Categorias</Button>
          </Link>
          <Link href='/editores' component={ NextLink }>
            <Button sx={{ color: 'white'}}>Editores</Button>
          </Link>
        </Box>
        <Box flex={1} />
      </Toolbar>
    </AppBar>
  )
}
