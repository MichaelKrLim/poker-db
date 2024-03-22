import { Link } from "react-router-dom";

import { AppBar, Toolbar, Typography, Box, Button, Container } from "@mui/material";
import StorageIcon from '@mui/icons-material/Storage';
import HomeIcon from '@mui/icons-material/Home';

export const Navbar = () => {

    return (
        <AppBar position="static" sx={{ width: 'fit-content', height: '100vh' }}>
            <Container disableGutters className="navbarContainer">
                <Toolbar disableGutters sx={{ flexDirection: 'column' }}>
                    <StorageIcon sx={{ mb: '1rem', mt: '1rem' }} />

                    <Typography
                        variant="h6"
                        noWrap
                        className="logoText"
                    >
                        POKER-DB
                    </Typography>
                </Toolbar>

                <Toolbar disableGutters sx={{ flexDirection: 'column' }}>
                    <Box>
                        <Button
                            className='squareButton'
                        >
                            <Link to={"/"}>
                                <HomeIcon style={{ color: "#979797" }} />
                            </Link>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}