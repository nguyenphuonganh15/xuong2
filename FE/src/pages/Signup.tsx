import instance from '@/configs/axios';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, FormProps, Input, message } from 'antd';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

type FieldType = {
    email?: string;
    password?: string;
    cofirmPassword?: string;
};

const Signup = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const navigate = useNavigate();
    const { mutate, isPending } = useMutation({
        mutationFn: async (values: FieldType) => {
            try {
                return await axios.post(`http://localhost:3000/signup`, values)
            } catch (error) {
                throw new Error('Dang ki that bai')
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: 'Dang ki thanh cong'
            });
            setTimeout(() => navigate('/signin'), 2000)
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
                <h1 className='text-2xl font-semibold'>Dang ki </h1>
                <Button type='primary'>
                    <Link to={`/signin`}>
                        Signin
                    </Link>
                </Button>
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

                    <Form.Item<FieldType>
                        label="CofirmPassword"
                        name="cofirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[{ required: true, message: 'Nhap cofirmPassword day du' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue("password") === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("Mat khau Confirm khong khop")
                                );
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Dang ki
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div >
    )
}

export default Signup