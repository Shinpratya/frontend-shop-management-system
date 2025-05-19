import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import { css } from "@emotion/css";

function App() {
  return (
    <>
      <Nav />
      <div
        className={css`
          padding-top: 30px;
        `}
      >
        <Outlet />
      </div>
    </>
  );
}

export default App;
