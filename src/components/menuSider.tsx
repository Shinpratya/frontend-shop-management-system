import { Popover } from "antd";
import {
  DashboardOutlined,
  LogoutOutlined,
  LoginOutlined,
  ShopOutlined,
  ReconciliationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { css } from "@emotion/css";
import React from "react";
import { useSelector } from "react-redux";
import { authSelector } from "../stores";
import { useAppDispatch } from "../stores";
import { logout, login } from "../stores/slices";

type MenuItem = {
  role: string;
  key: string;
  icon: React.ReactNode;
  label: string;
};

const items: MenuItem[] = [
  {
    key: "/",
    icon: <DashboardOutlined />,
    label: "Dashboard",
    role: "all",
  },
  {
    key: "/pos",
    icon: <ShopOutlined />,
    label: "Point of Sale",
    role: "all",
  },
  {
    key: "/pm",
    icon: <ReconciliationOutlined />,
    label: "Product Management",
    role: "all",
  },
  {
    key: "/um",
    icon: <UserOutlined />,
    label: "User Management ",
    role: "admin",
  },
];

const MenuSider = () => {
  const { token, role } = useSelector(authSelector);
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: calc(100vh - 4rem);
      `}
    >
      <div>
        {items.map((value: MenuItem) => {
          if (value?.role) {
            if (value?.role === "all") {
              return (
                <Popover
                  key={value.key}
                  placement="right"
                  content={<>{value?.label ?? ""}</>}
                >
                  <div
                    onClick={() => navigate(`${value?.key ?? "/"}`)}
                    className={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      height: 60px;
                      width: 100%;
                      background: ${pathname === value.key
                        ? "white"
                        : "#001529"};
                      color: ${pathname === value.key ? "black" : "white"};
                      font-size: 20px;
                      :hover {
                        background: ${pathname === value.key
                          ? "white"
                          : "#e5e4e2"};
                        cursor: pointer;
                        color: black;
                      }
                    `}
                  >
                    {value?.icon ?? ""}
                  </div>
                </Popover>
              );
            } else if (value?.role === role) {
              return (
                <Popover placement="right" content={<>{value?.label ?? ""}</>}>
                  <div
                    onClick={() => navigate(`${value?.key ?? "/"}`)}
                    className={css`
                      display: flex;
                      flex-direction: column;
                      justify-content: center;
                      align-items: center;
                      height: 60px;
                      width: 100%;
                      background: ${pathname === value.key
                        ? "white"
                        : "#001529"};
                      color: ${pathname === value.key ? "black" : "white"};
                      font-size: 20px;
                      :hover {
                        background: ${pathname === value.key
                          ? "white"
                          : "#e5e4e2"};
                        cursor: pointer;
                        color: black;
                      }
                    `}
                  >
                    {value?.icon ?? ""}
                  </div>
                </Popover>
              );
            }
          }
        })}
      </div>
      <div>
        {token ? (
          <Popover placement="right" content={<>Logout</>}>
            <div
              onClick={() => dispatch(logout())}
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 100%;
                background: #001529;
                color: white;
                font-size: 20px;
                :hover {
                  background: #e5e4e2;
                  cursor: pointer;
                  color: black;
                }
              `}
            >
              <LogoutOutlined />
            </div>
          </Popover>
        ) : (
          <Popover placement="right" content={<>Login</>}>
            <div
              //   onClick={() => navigate("/login")}
              onClick={() => dispatch(login())}
              className={css`
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 60px;
                width: 100%;
                background: #001529;
                color: white;
                font-size: 20px;
                :hover {
                  background: #e5e4e2;
                  cursor: pointer;
                  color: black;
                }
              `}
            >
              <LoginOutlined />
            </div>
          </Popover>
        )}
      </div>
    </div>
  );
};

export default MenuSider;
