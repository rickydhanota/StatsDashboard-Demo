import React, {useContext} from 'react';
import { Box, useTheme } from '@mui/material';
import { IconButton } from '@mui/material';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = (props) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display={"flex"} justifyContent="space-between" p={2}> 
            {/* Box component is cool because we can put css properties to this, makes it more convenient. for other components you have to use sx={{whatever css}}  */}
            {/* Search bar first */}
            <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius="3px">
                <InputBase sx={{ml: 2, flex: 1}} placeholder="Search" />
                <IconButton>
                    <SearchIcon type="button" sx={{p:0.25 ,fontSize: "1.5rem"}} />
                </IconButton>
            </Box>

            {/* Icons */}
            <Box display={"flex"}>
                <IconButton onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? (<DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon />)}
                </IconButton>
                <IconButton>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton>
                    <PersonOutlineOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Topbar;