import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';
import Image from "next/image";

export const NavBar = () => {
  return (
    <AppBar sx={{ backgroundColor:'green'}}>
        <Toolbar>
            <Image src="/DM.png" width={80} height={60}  alt="logo" />

            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/libros' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Libros</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Editores</Button>
                </Link>
                <Box flex={1} />
                
            </Box>
            <Box flex={1} />
            <Link href='/auth/login' passHref component={ NextLink }>
                <Button sx={{ color: 'white'}}>Login</Button>
            </Link>
            <Box flex={1} />
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
  )

  }

// import { AppBar, Box, Button, Link, Toolbar, Typography } from "@mui/material"
// import NextLink from 'next/link';

// import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
// import MenuIcon from '@mui/icons-material/Menu'
// import NextLink from 'next/link';



// export const NavBar = () => {
//   return (
//     <AppBar>
//       <Toolbar>
//         <IconButton
//           size="large"
//           edge="start"
//           aria-label="menu"
//           color='inherit'
//           sx={{  }}
//         >
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" component="div" sx={{ color:"black" }}>
//           Home
//         </Typography>
//         <Box flex={1} />
//         <Box>
//           Registro
//         </Box>
//         <Box component="nav"
//           sx= {{ display: {xs: 'none', sm: 'flex'} }}
//         >
//           <Link href='/libros' passHref component={ NextLink }>
//             <Button sx={{ color:'white' }}>Libros</Button>
//           </Link>
//           <Link href='/categorias' component={ NextLink }>
//             <Button sx={{ color:'white' }}>Categorias</Button>
//           </Link>
//           <Link href='/editores' component={ NextLink }>
//             <Button sx={{ color:'white' }}>Editores</Button>
//           </Link>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export const NavBar = () => {
//   return (
//     <AppBar>
//       <Toolbar>
//         <Link href='/' passHref component={ NextLink }>
//           <Button sx={{ color: 'white'}}>Home</Button>
//         </Link>
//         <Box flex={1} />
//         <Box>
//           <Link href='/libros' passHref component={ NextLink }>
//             <Button sx={{ color: 'white'}}>Libros</Button>
//           </Link>
//           <Link href='/categorias' component={ NextLink }>
//             <Button sx={{ color: 'white'}}>Categorias</Button>
//           </Link>
//           <Link href='/editores' component={ NextLink }>
//             <Button sx={{ color: 'white'}}>Editores</Button>
//           </Link>
//         </Box>
//         <Box flex={1} />
//       </Toolbar>
//     </AppBar>
//   )
// }