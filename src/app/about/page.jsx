'use client';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

export default function About() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        mx: 'auto',
        p: 2,
      }}
    >
      <Box component="main" sx={{ py: 5 }}>
        <Typography level="h1" sx={{ mb: 2 }}>
          Sobre Nosotros
        </Typography>
        <Typography sx={{ mb: 3 }}>
          Esta es la página de "Sobre Nosotros" donde puedes incluir información acerca de tu empresa, 
          equipo o proyecto.
        </Typography>
        
        <Typography level="h2" sx={{ mt: 4, mb: 2 }}>
          Nuestra Historia
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros vitae 
          nibh tincidunt facilisis. Curabitur at fermentum metus. Ut ac augue vel libero
          sollicitudin feugiat ac ac nisi.
        </Typography>
      </Box>
    </Box>
  );
} 