import React, { useEffect, useState } from 'react';
import { DataTable, Breadcrumb } from '../../../Components';
import * as Order from '../../../Models/Order';
import { Link } from 'react-router-dom';
import PageContentHeader from '../../../Components/PageContentHeader/index';

interface OrdersProps {
}

interface OrdersComponent extends React.FunctionComponent<OrdersProps> {

}

const Orders: OrdersComponent = () => {
    const [orders, setOrders] = useState<Order.IOrder[]>();

    const getOrderList = () => {
        setOrders(Order.data)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Processing':
                return 'info';

            case 'Canceled':
                return 'danger';

            case 'Pending':
                return 'warning';

            case 'Completed':
                return 'success';

            default:
                return 'primary';
        }
    }

    const getOrderByStatus = (status?: string) => {
        setOrders(Order.getOrderByStatus(status ?? ''));
    }

    const countByStatus = (status?: string) => {
        return Order.countByStatus(status ?? '');
    }

    useEffect(() => {
        getOrderList();
    }, []);


    return <React.Fragment>
        <PageContentHeader title="Orders"></PageContentHeader>
        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            { name: 'Orders', active: true }
        ]} />
        <div className="content">
            {/* <!-- Statistics --> */}
            {/* <!-- CountTo ([data-toggle="countTo"] is initialized in Helpers.coreAppearCountTo()) --> */}
            <div className="content-heading">
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-orders-stats-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Today
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-orders-stats-drop">
                        <a className="dropdown-item active" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>Today
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Year
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-circle-o mr-5"></i>All Time
                        </a>
                    </div>
                </div>
                Statistics
            </div>
            <div className="row gutters-tiny">
                {/* <!-- Processing --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-aqua" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-spinner fa-spin text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to={countByStatus('Processing')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Processing</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Processing --> */}

                {/* <!-- Pending --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-sun" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-spinner fa-spin text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to={countByStatus('Pending')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Pending</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Pending --> */}

                {/* <!-- Canceled --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-cherry" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-times text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to={countByStatus('Canceled')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Canceled</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Canceled --> */}

                {/* <!-- Completed --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-lake" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-check text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to={countByStatus('Completed')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Completed</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Completed --> */}
            </div>
            {/* <!-- END Statistics --> */}

            {/* <!-- Orders --> */}
            <div className="content-heading">
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-orders-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Today
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-orders-drop">
                        <a className="dropdown-item active" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>Today
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Week
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Month
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-calendar mr-5"></i>This Year
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)">
                            <i className="fa fa-fw fa-circle-o mr-5"></i>All Time
                        </a>
                    </div>
                </div>
                <div className="dropdown float-right mr-5">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-orders-filter-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-orders-filter-drop">
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getOrderByStatus('Pending')}>
                            <i className="fa fa-fw fa-spinner fa-spin text-warning mr-5"></i>Pending
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getOrderByStatus('Processing')}>
                            <i className="fa fa-fw fa-refresh fa-spin text-info mr-5"></i>Processing
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getOrderByStatus('Canceled')}>
                            <i className="fa fa-fw fa-times text-danger mr-5"></i>Canceled
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getOrderByStatus('Completed')}>
                            <i className="fa fa-fw fa-check text-success mr-5"></i>Completed
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item active" href="javascript:void(0)" onClick={() => getOrderByStatus()}>
                            <i className="fa fa-fw fa-circle-o mr-5"></i>All
                        </a>
                    </div>
                </div>
                Orders ({countByStatus()})
            </div>
            <div className="block block-rounded">
                <div className="block-content bg-body-light">
                    {/* <!-- Search --> */}
                    <form action="be_pages_ecom_orders.html" method="post" >
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search orders.." />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- END Search --> */}
                </div>
                <div className="block-content">
                    {/* <!-- Orders Table --> */}
                    <table className="table table-borderless table-striped">
                        <thead>
                            <tr>
                                <th style={{ width: '100px' }}>ID</th>
                                <th>Status</th>
                                <th className="d-none d-sm-table-cell">Submitted</th>
                                <th className="d-none d-sm-table-cell">Products</th>
                                <th className="d-none d-sm-table-cell">Customer</th>
                                <th className="text-right">Value</th>
                            </tr>
                        </thead>
                        {/* <tbody>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1851</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/27                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">6</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Jack Estrada</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$572</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1850</a>
                            </td>
                            <td>
                                <span className="badge badge-info">Processing</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/26                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">6</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Albert Ray</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$692</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1849</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/25                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">9</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Lisa Jenkins</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$583</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1848</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/24                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">4</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Wayne Garcia</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$759</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1847</a>
                            </td>
                            <td>
                                <span className="badge badge-warning">Pending</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/23                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">2</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Jack Greene</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$258</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1846</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/22                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">6</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Betty Kelley</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$202</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1845</a>
                            </td>
                            <td>
                                <span className="badge badge-warning">Pending</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/21                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">1</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Jesse Fisher</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$717</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1844</a>
                            </td>
                            <td>
                                <span className="badge badge-info">Processing</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/20                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">2</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Lori Moore</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$603</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1843</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/19                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">9</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Carol White</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$761</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1842</a>
                            </td>
                            <td>
                                <span className="badge badge-danger">Canceled</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/18                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">1</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Marie Duncan</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$269</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1841</a>
                            </td>
                            <td>
                                <span className="badge badge-info">Processing</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/17                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">3</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Jack Greene</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$867</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1840</a>
                            </td>
                            <td>
                                <span className="badge badge-success">Completed</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/16                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">4</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Marie Duncan</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$172</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1839</a>
                            </td>
                            <td>
                                <span className="badge badge-info">Processing</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/15                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">7</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Lisa Jenkins</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$673</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1838</a>
                            </td>
                            <td>
                                <span className="badge badge-warning">Pending</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/14                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">4</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Jose Parker</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$289</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="font-w600" href="be_pages_ecom_order.html">ORD.1837</a>
                            </td>
                            <td>
                                <span className="badge badge-success">Completed</span>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                2017/10/13                        </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="javascript:void(0)">5</a>
                            </td>
                            <td className="d-none d-sm-table-cell">
                                <a href="be_pages_ecom_customer.html">Barbara Scott</a>
                            </td>
                            <td className="text-right">
                                <span className="text-black">$191</span>
                            </td>
                        </tr>
                    </tbody> */}
                        <tbody>
                            {orders?.map(order =>
                                <tr>
                                    <td>
                                        <Link className="font-w600" to={`/admin/orders/${order.id}`}>{order.id}</Link>
                                    </td>
                                    <td>
                                        <span className={`badge badge-${getStatusColor(order.status)}`}>{order.status}</span>
                                    </td>
                                    <td className="d-none d-sm-table-cell">{order.submitted}</td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="javascript:void(0)">{order.products_count}</a>
                                    </td>
                                    <td className="d-none d-sm-table-cell">
                                        <a href="be_pages_ecom_customer.html">{order.customer_name}</a>
                                    </td>
                                    <td className="text-right">
                                        <span className="text-black">${order.total_price}</span>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                    {/* <!-- END Orders Table --> */}

                    {/* <!-- Navigation --> */}
                    <nav aria-label="Orders navigation">
                        <ul className="pagination justify-content-end">
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Previous">
                                    <span aria-hidden="true">
                                        <i className="fa fa-angle-left"></i>
                                    </span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li className="page-item disabled">
                                <a className="page-link" href="javascript:void(0)">...</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">8</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">9</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)" aria-label="Next">
                                    <span aria-hidden="true">
                                        <i className="fa fa-angle-right"></i>
                                    </span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- END Navigation --> */}
                </div>
            </div>
        </div>
        {/* <!-- END Orders --> */}
    </React.Fragment>
}

export default Orders
