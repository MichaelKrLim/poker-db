import { Link } from "react-router-dom";

import CardIcon from './assets/menuPlayingCardLogo.svg';

import { Box, IconButton } from "@mui/material";
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';

export const Menu = () => {

    return (
        <div className="menu">
            <img className="animatedCardIcon fadeInDown" src={CardIcon} height='20%' />
            <Box>
                <IconButton
                    sx={{
                        ml: 1,
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "transparent"
                        }
                    }}
                    aria-label='add user'
                >
                    <Link to={"/AddUser"}>
                        <PersonIcon style={{ color: "#979797" }} />
                    </Link>
                </IconButton>

                <IconButton
                    sx={{
                        ml: 1,
                        "&.MuiButtonBase-root:hover": {
                          bgcolor: "transparent"
                        }
                    }}
                    aria-label='record game'
                >
                    <Link to={"/RecordGames"}>
                        <BookIcon style={{ color: "#979797" }} />
                    </Link>
                </IconButton>
            </Box>
        </div>
    )
}