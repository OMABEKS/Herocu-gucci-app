import react from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, InputNumber } from 'antd';
import './Checkout.css'


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const CreditCart = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  

  return (
      <div className='checkout-form'>
    <Form
     {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        
        name={['user', ' Полное имя']}
        label="Полное имя"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'email']}
        label="Email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'age']}
        label="Адрес"
        rules={[
          {
            type: 'text',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name={['user', 'website']} label="Город">
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Cтрана">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Link to='/creditCart'>
        <button className='btn' htmlType="submit">
          Оформить заказ
        </button>
        </Link>
      </Form.Item>
    </Form>
    </div>
  );
};

export default CreditCart;