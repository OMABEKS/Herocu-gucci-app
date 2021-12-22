
import React, { useContext, useEffect, useState } from "react";
import { Modal, Button, Form, Input } from "antd";

import { newsContext } from "../../contexts/newsContext";

const AddNewsModal = () => {
  const { createNews } = useContext(newsContext);
  const { getNews } = useContext(newsContext);
  useEffect(() => {
    getNews();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createNews(values).then(() => handleCancel());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Perfume
      </Button>
      <Modal
        title="Add Perfume"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Perfume title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input perfume title!",
              },
            ]}
          >
           <Input />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          

           <Form.Item
            label="Image"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add Perfume
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddNewsModal;