// import "./App.css";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { css } from "@emotion/css";
import MenuSider from "../components/menuSider";

function BaseLayout() {
  return (
    <div>
      <Layout
        className={css`
          min-height: calc(100vh - 4rem);
        `}
      >
        <Layout.Sider width={80}>
          <MenuSider />
        </Layout.Sider>

        <Layout.Content
          className={css`
            /* padding-top: 30px; */
            place-items: center;
          `}
        >
          <Outlet />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default BaseLayout;
