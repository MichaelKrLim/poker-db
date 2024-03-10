import {HashRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./Layout.tsx";
import { Menu } from "./Menu.tsx";
import { AddUser } from "./Pages/AddUser.tsx";
import { RecordGames } from "./Pages/RecordGames.tsx";
import { ThemeProvider, createTheme, } from "@mui/material";
import './App.css'

function App() {
    const blackWhiteTheme = createTheme({
        palette: {
            primary: {
                main: "#d7d7d7",
                light: "#FAFAFA",
                dark: "#979797",
                contrastText: "#3C3C3C"
            },
            secondary: {
                main: "#3C3C3C",
                light: "#818181",
                dark: "#2A2A2A",
                contrastText: "#DEDEDE",
            }
        }
    });

    return (
      <ThemeProvider theme={blackWhiteTheme}>
          <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Menu />} />
                    <Route path="/AddUser" element={<AddUser />} />
                    <Route path="/RecordGames" element={<RecordGames />} />
                </Route>
            </Routes>
          </Router>
      </ThemeProvider>
    );
}

export default App;
