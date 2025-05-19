import { css } from "@emotion/css";
import { Card, Row, Table } from "antd";
import Linechart from "../components/linechart";

const Dashboard = () => {
  return (
    <div
      className={css`
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 4rem);
      `}
    >
      <Row
        className={css`
          margin-top: 30px;
          width: 100%;
        `}
        justify={"space-around"}
      >
        <Card
          className={css`
            width: 65%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 400px;
            .ant-card-head {
              border-bottom: none;
              padding: 5px 15px;
            }
            .ant-card-body {
              padding: 10px;
            }
          `}
          title="ยอดขาย"
        >
          {/* กราฟยอดขาย 7 วันล่าสุด */}
          <Linechart />
        </Card>
        <Card
          className={css`
            width: 30%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 400px;
          `}
        >
          สินค้าขายดี (Top 5)
        </Card>
      </Row>
      <Row
        className={css`
          margin-top: 30px;
          width: 100%;
        `}
        justify={"space-around"}
      >
        <Card
          className={css`
            width: 30%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100px;
          `}
        >
          ยอดขายวันนี้
        </Card>
        <Card
          className={css`
            width: 30%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100px;
          `}
        >
          สินค้าใกล้หมดสต๊อก
        </Card>
        <Card
          className={css`
            width: 30%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            height: 100px;
          `}
        >
          จำนวนสินค้าทั้งหมด [ จำนวนสินค้าทั้งหมด/ที่หมดแล้ว]
        </Card>
      </Row>
      <Row
        className={css`
          margin-top: 30px;
          width: 100%;
        `}
        justify={"center"}
      >
        <Card
          className={css`
            width: 97%;
          `}
          title="รายการขาย"
        >
          <Table />
        </Card>
      </Row>
    </div>
  );
};

export default Dashboard;
