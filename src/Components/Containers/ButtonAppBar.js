import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter} from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar style={{backgroundColor: '#EF5350'}}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                Hsk Practice
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Link style={{marginRight:10, color:'white'}} to="/">Home</Link>
            <Link style={{marginRight:10, color:'white'}} to="/about">About</Link>
            <Link style={{marginRight:10, color:'white'}} to="/dictionary">Dictionary</Link>
            </Toolbar>
        </AppBar>
    </Box>
  );
}