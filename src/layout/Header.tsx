import * as React from "react";
import {Link} from "react-router-dom";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Interfaces + Constants
import {MenuConfig} from "./menu-items";

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" enableColorOnDark>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Logo
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                        onClick={handleMenu}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom', // Anchor to the bottom of the IconButton
                            horizontal: 'right', // Align to the right horizontally
                        }}
                        transformOrigin={{
                            vertical: 'top', // Opens downwards
                            horizontal: 'right', // Aligns to the right horizontally
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {MenuConfig.map((item, index) => (
                            <MenuItem key={index} onClick={handleClose}>
                                <Link to={item.path} style={{ width: '100%' }}>
                                    <Typography
                                        variant="subtitle1"
                                        component="span"
                                        sx={{ textAlign: 'right', display: 'block' }}
                                    >
                                        {item.display}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
