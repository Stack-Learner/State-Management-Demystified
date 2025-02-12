import { RecoilRoot } from "recoil";
import "./App.css";
import { JotaiUserDetails } from "./atomic/jotai/JotaiUserDetails";
import { ReduxUserDetails } from "./redux-toolkit/ReduxUserDetails";
import { ReduxWrapper } from "./redux-toolkit/ReduxWrapper";
import { ZustandDemoString } from "./zustand/ZustandDemoString";
import { ZustandUserDetails } from "./zustand/ZustandUserDetails";
import { ValtiouserDetails } from "./proxy/voltio/ValtiouserDetails";
import { ValtioEmail } from "./proxy/voltio/ValtioEmail";

function App() {
  return (
    <>
      {/* <ZustandUserDetails />
      <ZustandDemoString /> */}
      {/* <ReduxWrapper>
        <ReduxUserDetails />
      </ReduxWrapper> */}

      {/* <RecoilRoot>

      </RecoilRoot> */}
      {/* <JotaiUserDetails /> */}
      <ValtiouserDetails />
      <br />
      <br />
      <br />
      <br />
      <ValtioEmail />
    </>
  );
}

export default App;
