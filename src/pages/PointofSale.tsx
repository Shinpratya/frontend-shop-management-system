import { css } from "@emotion/css";
import { Card } from "antd";

const PointofSale = () => {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        /* background-color: red; */
        width: 100%;
        min-height: calc(100vh - 4rem);
      `}
    >
      <Card
        className={css`
          width: 70%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 80vh;
        `}
      >
        Items
      </Card>
      <Card
        className={css`
          width: 25%;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 80vh;
        `}
      >
        Price
      </Card>
    </div>
  );
};

export default PointofSale;
