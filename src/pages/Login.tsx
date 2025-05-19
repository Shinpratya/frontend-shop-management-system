import { Button, Card, Input, Form } from "antd";
import { css } from "@emotion/css";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Card
        className={css`
          width: 50%;
        `}
        title="Login"
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Email"
            name={"email"}
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Password"
            name={"password"}
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              className={css`
                margin-bottom: 10px;
              `}
            ></Input>
          </Form.Item>
        </Form>

        <Button
          className={css`
            width: 100%;
            margin-top: 10px;
          `}
          type="primary"
        >
          Login
        </Button>
      </Card>
    </>
  );
};

export default Login;
