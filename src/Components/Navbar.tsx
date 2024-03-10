import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <StorageIcon />
                <Typography variant="h6" component="div">
                    poker-db
                </Typography>
                <IconButton size="large" edge="start" color="inherit" aria-label="home">
                    <Link to="/">
                        <HomeIcon style={{ fill: '#818181'}} />
                    </Link>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}