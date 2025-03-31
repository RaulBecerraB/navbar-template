'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { styled } from '@mui/joy/styles';
import menuItems from './links.json';

// Iconos
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// Mapa de iconos para convertir nombres de strings a componentes
const iconMap = {
  'HomeRoundedIcon': <HomeRoundedIcon />,
  'InfoRoundedIcon': <InfoRoundedIcon />,
  'SchoolRoundedIcon': <SchoolRoundedIcon />
};

// Función para renderizar el icono correcto
const renderIcon = (iconName) => {
  // Si no hay icono, retornar null
  if (!iconName) return null;
  
  // Retornar el icono del mapa o null si no existe
  return iconMap[iconName] || null;
};

// Menu desplegable personalizado
const Popup = styled(Sheet)({
  position: 'absolute',
  top: '100%',
  left: 0,
  width: '100%',
  zIndex: 1,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '0 0 8px 8px',
  overflow: 'hidden',
  display: 'none',
});

export default function NavigationMenu() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [focusedItem, setFocusedItem] = React.useState(null);
  const [activeItem, setActiveItem] = React.useState(null);

  // Manejo de teclado para navegación accesible
  const handleKeyDown = (event, itemId) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      const item = menuItems.find(item => item.id === itemId);
      if (item?.submenu?.length) {
        setActiveItem(itemId);
      }
    } else if (event.key === 'Escape') {
      setActiveItem(null);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        position: 'relative',
      }}
    >
      <List
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px',
          bgcolor: 'background.surface',
          boxShadow: 'sm',
        }}
      >
        {menuItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton
              component={item.submenu?.length ? 'div' : Link}
              href={!item.submenu?.length ? item.path : undefined}
              selected={pathname === item.path || activeItem === item.id}
              variant={(pathname === item.path || activeItem === item.id) ? 'soft' : 'plain'}
              color={(pathname === item.path || activeItem === item.id) ? 'primary' : 'neutral'}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onFocus={() => setFocusedItem(item.id)}
              onBlur={() => setFocusedItem(null)}
              onClick={() => {
                if (item.submenu?.length) {
                  setActiveItem(activeItem === item.id ? null : item.id);
                }
              }}
              onKeyDown={(event) => handleKeyDown(event, item.id)}
              sx={{
                justifyContent: 'center',
                fontWeight: 'lg',
                '&:hover': {
                  bgcolor: 'background.level1',
                },
              }}
            >
              {item.icon && (
                <Box component="span" sx={{ display: 'inline-flex', mr: 1 }}>
                  {renderIcon(item.icon)}
                </Box>
              )}
              <ListItemContent>{item.label}</ListItemContent>
              {item.submenu?.length && (
                <KeyboardArrowDownIcon
                  sx={{
                    transform: activeItem === item.id ? 'rotate(180deg)' : 'none',
                    transition: '0.2s',
                  }}
                />
              )}
            </ListItemButton>
            {item.submenu?.length && (
              <Popup
                sx={{
                  display: (hoveredItem === item.id || activeItem === item.id) ? 'block' : 'none',
                  p: 2,
                }}
              >
                <List
                  size="sm"
                  sx={{
                    '--ListItem-radius': '8px',
                    '--ListItemDecorator-size': '32px',
                  }}
                >
                  {item.submenu.map((subItem) => (
                    <ListItem key={subItem.id}>
                      <ListItemButton component={Link} href={subItem.path}>
                        <ListItemContent>
                          {subItem.label}
                          {subItem.highlight && (
                            <Typography
                              level="body-xs"
                              color="danger"
                              sx={{ ml: 1 }}
                            >
                              {subItem.highlight}
                            </Typography>
                          )}
                        </ListItemContent>
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Popup>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
} 