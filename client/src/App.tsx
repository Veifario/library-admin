import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />

      <Header />
      <Outlet />
    </>
  );
}

export default App;
