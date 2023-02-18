import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";
import TopNav from "./utils/TopNav/TopNav";
import { colors, createTheme, ThemeProvider } from "@mui/material";
// mulitple screen size xs,sm,md,lg,xl

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.blueGrey[200],
      },
      secondary: {
        main: colors.blue[300],
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <UseState>
          <TestState>
            <UseEffectState>
              <TopLoadingBar />
              <AppLoader />
              <AppAlert />
              <TopNav />
              <Route />
            </UseEffectState>
          </TestState>
        </UseState>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
