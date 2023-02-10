import TestState from "./State/Test/TestState";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import UseEffectState from "./State/UseEffect/UseEffectState";
import UseState from "./State/UseState/UseState";
import AppLoader from "./utils/AppLoader/AppLoader";
import AppAlert from "./utils/AppAlert/AppAlert";
import TopLoadingBar from "./utils/TopLoadingBar/TopLoadingBar";

function App() {
  return (
    <BrowserRouter>
      <UseState>
        <TestState>
          <UseEffectState>
            <TopLoadingBar />
            <AppLoader />
            <AppAlert />
            <Route />
          </UseEffectState>
        </TestState>
      </UseState>
    </BrowserRouter>
  );
}

export default App;
