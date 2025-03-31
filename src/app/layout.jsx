'use client';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import NavigationMenu from './components/NavigationMenu';
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`backgorund-color antialiased`}
      >
        <CssVarsProvider defaultMode="light">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
            }}
          >
              <Box sx={{ maxWidth: '1200px', mx: 'auto', width: '100%', px: 2, py: 2 }}>
                <Box sx={{marginBottom: '30px'}}>
                  <NavigationMenu />
                </Box>
              {children}
              </Box>
          </Box>
        </CssVarsProvider>
      </body>
    </html>
  );
}
