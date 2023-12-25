import { Theme } from "@emotion/react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { styled, ThemeProvider } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

interface Props {
    darkMode: boolean;
    handleThemeChanged: () => void;
}

export default function Header({darkMode, handleThemeChanged}: Props) {
    return (
        <AppBar position = 'static' sx = {{mb : 4}} >
            <Toolbar>
                <Typography variant='h6'>
                    RESTORE
                </Typography>
                <Typography sx = {{position: 20}}>
                    <Switch checked={darkMode} onChange={handleThemeChanged}/> 
                </Typography>   
            </Toolbar>
        </AppBar>
    )
}