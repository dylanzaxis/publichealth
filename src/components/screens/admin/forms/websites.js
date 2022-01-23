import { Form, Input, Button, Checkbox } from "antd";
import ImageUpload from "../../../../utils/imageUpload";

const LoginForm = (props) => {
  const { onSubmit, loading } = props;
  const [form] = Form.useForm();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const upload = {
    config: {
      name: "logo",
      label: "Add Private Files",
    },
    deco: {
      aspect: 1 / 1,
      icon: "fas fa-camera-retro",
      hide: ["type", "folder"],
    },
    field_props: {
      max: 1,
      placeholder: "Add Private Files",
    },
    values: {},
    indie: {
      link: "papi_private_files",
    },
  };

  const SetFieldsValue = (payload) => {
    console.log(payload, "handlePhotoUpload");

    form.setFieldsValue(payload);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        title: "title 1",
        link: "https://americasfrontlinedoctors.org",
      }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      layout="vertical"
      form={form}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input a title",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>
      <Form.Item
        label="Link"
        name="link"
        rules={[
          {
            required: true,
            message: "Please input a link",
          },
        ]}
      >
        <Input size="large" />
      </Form.Item>

      <Form.Item label="Upload Logo" name="logo">
        <ImageUpload SetFieldsValue={SetFieldsValue} {...upload} />
      </Form.Item>

      <Form.Item>
        <Button
          loading={loading}
          size="large"
          block
          type="primary"
          htmlType="submit"
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
