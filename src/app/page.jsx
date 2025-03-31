'use client';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        p: 2,
      }}
    >
      <Box component="main" sx={{ flex: 1, py: 5 }}>
        <Typography level="h1" sx={{ mb: 2 }}>
          Ejemplo de Menú de Navegación
        </Typography>
        <Typography sx={{ mb: 4 }}>
          Este es un ejemplo de menú de navegación implementado con MUI Joy UI, diseñado para Next.js 15.
        </Typography>
        
        <Typography level="h2" sx={{ mt: 4, mb: 2 }}>
          Características
        </Typography>
        <ul>
          <li>
            <Typography>
              Navegación con rutas de Next.js
            </Typography>
          </li>
          <li>
            <Typography>
              Menús desplegables
            </Typography>
          </li>
          <li>
            <Typography>
              Totalmente accesible
            </Typography>
          </li>
          <li>
            <Typography>
              Diseño responsive
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
  );
}
