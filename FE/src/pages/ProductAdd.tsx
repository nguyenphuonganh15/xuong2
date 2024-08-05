import instance from '@/configs/axios';
import { BackwardFilled } from '@ant-design/icons';
import { useMutation } from '@tanstack/react-query';
import { Button, Form, FormProps, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Link } from 'react-router-dom';

type FieldType = {
    name?: string;
    price?: number;
    image?: string;
    description?: string;
};

const ProductAdd = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [form] = Form.useForm();
    const { mutate } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.post(`/products`, product)
            } catch (error) {
                throw new Error('Them san pham that bai')
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: 'Them thanh cong'
            });
            form.resetFields();
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
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Thêm sản phẩm</h1>
                <Button type="primary">
                    <Link to={`/products`}>
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                // autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Ten san pham"
                        name="name"
                        rules={[{ required: true, message: 'Nhap ten day du' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Gia san pham"
                        name="price"
                        rules={[{ required: true, message: 'Gia ten day du' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Anh san pham"
                        name="image"
                        rules={[{ required: true, message: 'Nhap anh day du' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Mo ta san pham"
                        name="description"
                    // rules={[{ required: true, message: 'Nhap ten day du' }]}
                    >
                        <TextArea rows={4} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Them
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default ProductAdd