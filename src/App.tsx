import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Table from './components/Table/Table';
import { Switch, Theme, ThemeProvider } from '@mui/material';
import { darkTheme, lightTheme } from './theme';
import { useEffect, useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(localStorage.getItem('theme') === 'dark');
  const handleSwitchTheme = (e: any) => {
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    switch(isDarkMode) {
      case true: 
        setTheme(darkTheme);
        break;
      case false: 
        setTheme(lightTheme);
        break;
    }
  }, [isDarkMode, setTheme])

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Switch
          checked={isDarkMode}
          onClick={handleSwitchTheme}
          aria-label='Dark'
        />
        <Box sx={{ my: 4 }}>
          <Table />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
