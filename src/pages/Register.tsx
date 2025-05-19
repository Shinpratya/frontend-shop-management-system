import { Button, Card, Input, Form, FormInstance } from "antd";
import { css } from "@emotion/css";

const Register = () => {
  const [form] = Form.useForm();

  const onSubmit = (data: FormInstance) => {
    console.log("ffffff", data);
  };
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Card
        className={css`
          width: 50%;
        `}
        title="Register"
      >
        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item
            label="First Name"
            name={"firstname"}
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
          >
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={"lastname"}
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
          >
            <Input></Input>
          </Form.Item>

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
            rules={[
              { required: true, message: "Please input your Password!" },
              { min: 6, message: "Password must be at least 6 characters!" },
              { max: 20, message: "Password must not exceed 20 characters!" },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/,
                message:
                  "Password must contain uppercase, lowercase, number, and special character!",
              },
            ]}
          >
            <Input type="password"></Input>
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name={"comfirm_password"}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input type="password"></Input>
          </Form.Item>
        </Form>
        <Button
          className={css`
            width: 100%;
            margin-top: 10px;
          `}
          type="primary"
          onClick={() => form.submit()}
        >
          Register
        </Button>
      </Card>
    </div>
  );
};

export default Register;
