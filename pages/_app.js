import { useState } from "react";
import Topbar from "../frontend/components/Topbar";
import Sidebar from "../frontend/components/Sidebar";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../frontend/theme";

import "../styles/globals.css";
import Layout from "@/frontend/components/Layout";

import { ProSidebarProvider } from 'react-pro-sidebar';


export default function App({ Component, pageProps }) {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return(

    <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ProSidebarProvider>
            <div className="app">
          

              <Sidebar />
              <main className="content">
                <Topbar  />
                <Component {...pageProps} />
              </main>
            </div>
            </ProSidebarProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>

      
  );
}
