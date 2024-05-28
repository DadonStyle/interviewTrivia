import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7188D8",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          overlay: "none",
          outline: "none !important", // removes chrome blue highlight
          borderRadius: "14px",
          fontSize: "14px",
          fontWeight: "500",
          justifyContent: "flex-start",
          "&:hover": {
            "@media (hover: hover)": {
              backgroundColor: "rgba(113,136,216,0.8)",
            },
          },
          "&:disabled": {
            backgroundColor: "rgba(255,255,255,0.5)",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingLeft: "0",
          paddingRight: "0",
        },
      },
    },
  },
});

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SpeedInsights />
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
