import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, AppBar, IconButton, Toolbar, Typography, Button, Container,  Card,  Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './logo.svg';

interface GithubRepos {
  id: number;
  name: string;
  description: string;
}

const getData = async () => {
  return await fetch(`https://api.github.com/users/vladdy-moses/repos`)
    .then(res => res.json())
    .then((res: GithubRepos[]) => {
      console.log(res);
      return res
    })
};

function App() {
  const [data, setData] = useState<GithubRepos[]>([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <Container>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Репозитории пользователя vladdy-moses
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {data.map((item) => (
        <Grid>
          <Box sx={{ flexWrap: 'wrap'}}>
            <Card key={item.id} className='card' sx={{ marginTop: 10, maxWidth: 500 }}>
              <h3 className='repo-text'>{item.name}</h3>
              <span className='repo-description'>{item.description}</span>
            </Card>
          </Box>
        </Grid>
      ))}
    </Container>
  );
}

export default App;