let data: IOrder[] = [
    {
        id: 'ORD.1851',
        status: 'Processing',
        submitted: '2017/10/27',
        products_count: 5,
        customer_name: "Jack Estrada",
        total_price: 572,
    },
    {
        id: 'ORD.1850',
        status: 'Canceled',
        submitted: '2017/10/26',
        products_count: 7,
        customer_name: "Albert Ray",
        total_price: 692,
    },
    {
        id: 'ORD.1849',
        status: 'Pending',
        submitted: '2017/10/26',
        products_count: 9,
        customer_name: "Lisa Jenkins",
        total_price: 583,
    },
    {
        id: 'ORD.1848',
        status: 'Completed',
        submitted: '2017/10/26',
        products_count: 2,
        customer_name: "Marie Duncan",
        total_price: 172,
    },
    { id: 'ORD.1847', status: 'Pending', submitted: '2017/10/23', products_count: 2, customer_name: 'Jack Greene', total_price: 258},
    { id: 'ORD.1846', status: 'Canceled', submitted: '2017/10/22', products_count: 6, customer_name: 'Betty Kelley', total_price: 202},
    { id: 'ORD.1845', status: 'Pending', submitted: '2017/10/21', products_count: 1, customer_name: 'Jesse Fisher', total_price: 717},
    { id: 'ORD.1844', status: 'Processing', submitted: '2017/10/20', products_count: 2, customer_name: 'Lori Moore', total_price: 603},
    { id: 'ORD.1843', status: 'Canceled', submitted: '2017/10/19', products_count: 9, customer_name: 'Carol White', total_price: 761},
    { id: 'ORD.1842', status: 'Canceled', submitted: '2017/10/18', products_count: 1, customer_name: 'Marie Duncan', total_price: 269},
    { id: 'ORD.1841', status: 'Processing', submitted: '2017/10/17', products_count: 3, customer_name: 'Jack Greene', total_price: 867},
    { id: 'ORD.1840', status: 'Completed', submitted: '2017/10/16', products_count: 4, customer_name: 'Marie Duncan', total_price: 172},
    { id: 'ORD.1839', status: 'Processing', submitted: '2017/10/15', products_count: 7, customer_name: 'Lisa Jenkins', total_price: 673},
    { id: 'ORD.1838', status: 'Pending', submitted: '2017/10/14', products_count: 4, customer_name: 'Jose Parker', total_price: 289},
    { id: 'ORD.1837', status: 'Completed', submitted: '2017/10/13', products_count: 5, customer_name: 'Barbara Scott', total_price: 191},
]

interface IOrder {
    id: string;
    status: string;
    submitted: string;
    products_count?: number;
    customer_id?: string;
    customer_name?: string;
    total_price?: number;
}

const getList = (orders: IOrder[]) => {
    return data;
}

const getOrder = (id: any) => {
    return data.find(order => order.id === id);
}

const getOrderByStatus = (status: string) => {
    if (!status) {
        return data;
    }

    return data.filter(order => order.status === status);
}

const countByStatus = (status: string) => {
    if (!status) {
        return data.length;
    }

    return data.filter(order => order.status === status).length;
}


export {
    data,
    IOrder,
    getList,
    getOrder,
    getOrderByStatus,
    countByStatus,
}
