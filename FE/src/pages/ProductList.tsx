import { IProduct } from '@/common/product'
import instance from '@/configs/axios'
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button, message, Popconfirm, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const queryClient = useQueryClient();
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                return await instance.get('/products')
            } catch (error) {
                throw new Error("Call API that bai")
            }
        }
    });

    const { mutate } = useMutation({
        mutationFn: async (id) => {
            try {
                return await instance.delete(`/products/${id}`)
            } catch (error) {
                throw new Error("Xoa that bai")
            };
        },
        onSuccess: () => {
            messageApi.open({
                type: "success",
                content: "Xoa thanh cong"
            });
            queryClient.invalidateQueries({
                queryKey: ['products']
            });
        },
        onError: (error) => {
            messageApi.open({
                type: "error",
                content: error.message
            })
        }
    });


    const dataSource = data?.data.map((product: IProduct) => ({
        key: product.id,
        ...product,
    }));


    const columns = [
        {
            title: 'Ten san pham',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Gia san pham',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Anh san pham',
            dataIndex: 'image',
            key: 'image',
        },
        {
            title: 'Mo ta san pham',
            dataIndex: 'description',
            key: 'description',
        },
        {
            key: "action",
            render: (_: any, product: IProduct) => {
                return <div className='flex space-x-3'>
                    <Popconfirm
                        title="Xoa san pham"
                        description="Ban chac chan muon xoa no?"
                        onConfirm={() => mutate(product.id!)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                    <Button>
                        <Link to={`/products/${product.id}/edit`}>Cap nhat</Link>
                    </Button>
                </div>
            }
        },
    ];

    if (isLoading) return <div>Loading.....</div>
    if (isError) return <div>{error.message}</div>

    return (
        <div>
            {contextHolder}
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-2xl font-semibold">Quản lý sản phẩm</h1>
                <Button type="primary">
                    <Link to={`/products/add`}>
                        <PlusCircleFilled /> Thêm sản phẩm
                    </Link>
                </Button>
            </div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    )
}

export default ProductList