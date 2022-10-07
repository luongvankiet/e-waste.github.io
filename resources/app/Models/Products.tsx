let data: IProduct[] = [
    {id: 'PID.424', status: 'Out of Stock', submitted: '2017/09/27', name:'Product #24', category_id: 'CID.221', category: 'Switch', price: 37, in_stock: 40, image_url: '/media/products/9.png'},
    {id: 'PID.423', status: 'Available', submitted: '2017/09/26', name:'Product #23', category_id: 'CID.221', category: 'Switch', price: 96, in_stock: 40, image_url: '/media/products/2.png'},
    {id: 'PID.422', status: 'Available', submitted: '2017/09/25', name:'Product #22', category_id: 'CID.221', category: 'Switch', price: 18, in_stock: 40, image_url: '/media/products/3.png'},
    {id: 'PID.421', status: 'Available', submitted: '2017/09/24', name:'Product #21', category_id: 'CID.221', category: 'Router', price: 94, in_stock: 40, image_url: '/media/products/4.png'},
    {id: 'PID.420', status: 'Out of Stock', submitted: '2017/09/23', name:'Product #20', category_id: 'CID.221', category: 'Router', price: 73, in_stock: 40, image_url: '/media/products/5.png'},
    {id: 'PID.419', status: 'Out of Stock', submitted: '2017/09/22', name:'Product #19', category_id: 'CID.221', category: 'Switch', price: 51, in_stock: 40, image_url: '/media/products/6.png'},
    {id: 'PID.418', status: 'Available', submitted: '2017/09/21', name:'Product #18', category_id: 'CID.221', category: 'Laptop', price: 66, in_stock: 40, image_url: '/media/products/7.png'},
    {id: 'PID.417', status: 'Available', submitted: '2017/09/20', name:'Product #17', category_id: 'CID.221', category: 'Mobile Phone', price: 75, in_stock: 40, image_url: '/media/products/8.png'},
    {id: 'PID.416', status: 'Available', submitted: '2017/09/19', name:'Product #16', category_id: 'CID.221', category: 'Tablet', price: 15, in_stock: 40, image_url: '/media/products/9.png'},
    {id: 'PID.415', status: 'Available', submitted: '2017/09/18', name:'Product #15', category_id: 'CID.221', category: 'Switch', price: 17, in_stock: 40, image_url: '/media/products/10.png'},
    {id: 'PID.414', status: 'Out of Stock', submitted: '2017/09/17', name:'Product #14', category_id: 'CID.221', category: 'Router', price: 79, in_stock: 40, image_url: '/media/products/11.png'},
    {id: 'PID.413', status: 'Available', submitted: '2017/09/16', name:'Product #13', category_id: 'CID.221', category: 'Laptop', price: 64, in_stock: 40, image_url: '/media/products/12.png'},
    {id: 'PID.412', status: 'Available', submitted: '2017/09/15', name:'Product #12', category_id: 'CID.221', category: 'Laptop', price: 96, in_stock: 40, image_url: '/media/products/5.png'},
    {id: 'PID.411', status: 'Available', submitted: '2017/09/14', name:'Product #11', category_id: 'CID.221', category: 'Mobile Phone', price: 58, in_stock: 40, image_url: '/media/products/6.png'},
    {id: 'PID.410', status: 'Available', submitted: '2017/09/13', name:'Product #10', category_id: 'CID.221', category: 'Mobile Phone', price: 50, in_stock: 40, image_url: '/media/products/2.png'},
]

interface IProduct {
    id?: string;
    status?: string;
    submitted?: string;
    name?: any;
    category_id?: string;
    category?: string;
    price?: number;
    in_stock?: number;
    image_url?: string;
}

const getList = () => {
    return data;
}

const getProduct = (id?: string) => {
    if (!id) {
        return data[0];
    }

    return data.find(item => item.id === id);
}
const getByCategory = (category: string) => {
    if (!category) {
        return data;
    }

    return data.filter(product => product.category === category);
}

const getByStatus = (status: string) => {
    if (!status) {
        return data;
    }

    return data.filter(product => product.status === status);
}

const countByStatus = (status: string) => {
    if (!status) {
        return data.length;
    }

    return data.filter(product => product.status === status).length;
}

export {
    data,
    IProduct,
    getList,
    getProduct,
    countByStatus,
    getByStatus,
    getByCategory,
}
