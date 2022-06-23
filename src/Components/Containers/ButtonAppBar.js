import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";
import About from './About';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                Hsk Practice
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                
            </Typography>
            <Link style={{marginRight:10}} to="/">Home</Link>
            <Link style={{marginRight:10}} to="/about">About</Link>
            <Link style={{marginRight:10}} to="/multiHsk1">Hsk 1</Link>
            <Link style={{marginRight:10}} to="/multiHsk2">Hsk 2</Link>
            <Link style={{marginRight:10}} to="/multiHsk3">Hsk 3</Link>
            <Link style={{marginRight:10}} to="/multiHsk4">Hsk 4</Link>
            <Link style={{marginRight:10}} to="/multiHsk5">Hsk 5</Link>
            <Link style={{marginRight:10}} to="/multiHsk6">Hsk 6</Link>
            </Toolbar>
        </AppBar>
    </Box>
  );
}