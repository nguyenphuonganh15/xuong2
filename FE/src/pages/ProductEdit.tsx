import instance from '@/configs/axios';
import { BackwardFilled } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Form, FormProps, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { Link, useParams } from 'react-router-dom';

type FieldType = {
    name?: string;
    price?: number;
    image?: string;
    description?: string;
};

const ProductEdit = () => {
    const { id } = useParams();
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data: product, isLoading, isError, error } = useQuery({
        queryKey: ['products', id],
        queryFn: async () => {
            try {
                return await instance.get(`/products/${id}`)
            } catch (error) {
                throw new Error('Lay thong tin san pham that bai')
            }
        }
    })

    const { mutate } = useMutation({
        mutationFn: async (product: FieldType) => {
            try {
                return await instance.put(`/products/${id}`, product)
            } catch (error) {
                throw new Error('Cap nhat san pham that bai')
            }
        },
        onSuccess: () => {
            messageApi.open({
                type: 'success',
                content: 'Cap nhat thanh cong'
            });
            queryClient.invalidateQueries({
                queryKey: ['products']
            })
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


    if (isLoading) return <div>Loading.....</div>
    if (isError) return <div>{error.message}</div>
    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Cập nhật: {product?.data?.name}</h1>
                <Button type="primary">
                    <Link to={`/products`}>
                        <BackwardFilled /> Quay lại
                    </Link>
                </Button>
            </div>
            <div className="max-w-4xl mx-auto">
                <Form
                    // form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={product?.data}
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
                            Cap nhat
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}

export default ProductEdit