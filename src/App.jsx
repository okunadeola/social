import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import AllApps from "./pages/AllApps";
import Authentication from "./pages/Authentication";
import Settings from "./pages/Settings";
import Stroage from "./pages/Stroage";

const App = () => {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<AllApps />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/Enterprise/storage" element={<Stroage />} />
        <Route path="/Enterprise/app-settings" element={<Settings />} />

      </Routes>
    </RootLayout>
  );
};

export default App;
