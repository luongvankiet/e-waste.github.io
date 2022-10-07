let data: ICategory[] = [
    {id: 'CID.210', name: 'Switch', products_count: 10},
    {id: 'CID.211', name: 'Router', products_count: 150},
    {id: 'CID.212', name: 'Laptop', products_count: 310},
    {id: 'CID.213', name: 'Mobile Phone', products_count: 30},
    {id: 'CID.214', name: 'Tablet', products_count: 20},
]

interface ICategory {
    id?: string;
    name?: string
    products_count?: number;
}

const getList = () => {
    return data;
}

const getDetail = (id: any) => {
    return data.find(item => item.id == id) ?? data[0];
}

export {
    data,
    ICategory,
    getList,
    getDetail,
}
