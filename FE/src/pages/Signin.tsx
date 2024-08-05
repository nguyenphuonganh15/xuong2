
import { useMutation } from '@tanstack/react-query';
import { Button, Form, FormProps, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

type FieldType = {
    email?: string;
    password?: string;
};

const Signin = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: async (values: FieldType) => {
            try {
                return await axios.post(`http://localhost:3000/signin`, values)
            } catch (error) {
                throw new Error('Dang nhap that bai')
            }
        },
        onSuccess: (data) => {
            localStorage.setItem("user", JSON.stringify(data.data.user));
            messageApi.open({
                type: 'success',
                content: 'Dang nhap thanh cong'
            });
            setTimeout(() => navigate('/products'), 2000)
        },

        onError: (error) => {
            messageApi.open({
                type: 'error',
                content: error.message
            })
        }
    });

    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
        mutate(values);
    };


    return (
        <div className='container mx-auto mt-16'>
            {contextHolder}
            <div className='flex items-center justify-between mb-5'>
                <h1 className='text-2xl font-semibold'>Dang nhap </h1>
            </div>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    disabled={isPending}
                // autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Nhap email day du' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Nhap password day du' }]}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Dang nhap
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div >
    )
}

export default Signin