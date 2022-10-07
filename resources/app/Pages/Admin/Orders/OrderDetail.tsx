import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb, PageContentHeader } from '../../../Components';
import * as OrderModel from '../../../Models/Order';

interface OrderDetailProps {
}

const OrderDetail: React.FunctionComponent<OrderDetailProps> = (props) => {
    const { id } = useParams<{ id: any }>()
    const [order, setOrder] = useState<OrderModel.IOrder>();

    useEffect(() => {
        setOrder(OrderModel.getOrder(id));
    }, [id])

    return <React.Fragment>
        <PageContentHeader title={order?.id}></PageContentHeader>

        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            {name: 'Orders', link: '/orders'},
            {name: order?.id, active: true},
        ]}></Breadcrumb>

        <div className="content">
            {/* <!-- Products --> */}
            <h2 className="content-heading">Products (5)</h2>
            <div className="block block-rounded">
                <div className="block-content">
                    <div className="table-responsive">
                        <table className="table table-borderless table-striped">
                            <thead>
                                <tr>
                                    <th style={{ width: '100px' }}>ID</th>
                                    <th>Product</th>
                                    <th className="text-center">Stock</th>
                                    <th className="text-center">QTY</th>
                                    <th className="text-right" style={{ width: '10%' }}>UNIT</th>
                                    <th className="text-right" style={{ width: '10%' }}>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="/admin/products/PID.445">PID.258</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Dark Souls III</a>
                                    </td>
                                    <td className="text-center">92</td>
                                    <td className="text-center font-w600">1</td>
                                    <td className="text-right">$69,00</td>
                                    <td className="text-right">$69,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="/admin/products/PID.445">PID.263</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Bloodborne</a>
                                    </td>
                                    <td className="text-center">32</td>
                                    <td className="text-center font-w600">1</td>
                                    <td className="text-right">$29,00</td>
                                    <td className="text-right">$29,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="/admin/products/PID.445">PID.214</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">The Surge</a>
                                    </td>
                                    <td className="text-center">15</td>
                                    <td className="text-center font-w600">1</td>
                                    <td className="text-right">$59,00</td>
                                    <td className="text-right">$59,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="/admin/products/PID.445">PID.358</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Bioshock Collection</a>
                                    </td>
                                    <td className="text-center">77</td>
                                    <td className="text-center font-w600">1</td>
                                    <td className="text-right">$39,00</td>
                                    <td className="text-right">$39,00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a className="font-w600" href="/admin/products/PID.445">PID.425</a>
                                    </td>
                                    <td>
                                        <a href="be_pages_ecom_product_edit.html">Until Dawn</a>
                                    </td>
                                    <td className="text-center">25</td>
                                    <td className="text-center font-w600">1</td>
                                    <td className="text-right">$49,00</td>
                                    <td className="text-right">$49,00</td>
                                </tr>
                                <tr>
                                    <td colSpan={5} className="text-right font-w600">Total Price:</td>
                                    <td className="text-right">$245,00</td>
                                </tr>
                                <tr>
                                    <td colSpan={5} className="text-right font-w600">Total Paid:</td>
                                    <td className="text-right">$245,00</td>
                                </tr>
                                <tr className="table-success">
                                    <td colSpan={5} className="text-right font-w600 text-uppercase">Total Due:</td>
                                    <td className="text-right font-w600">$0,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <!-- END Products --> */}


            {/* <!-- Customer --> */}
            <h2 className="content-heading">
                <button type="button" className="btn btn-sm btn-secondary float-right">
                    <i className="fa fa-envelope-o text-info mr-5"></i>Contact
                </button>
                Customer
            </h2>
            <div className="row row-deck">
                {/* <!-- Customer's Basic Info --> */}
                <div className="col-lg-4">
                    <a className="block block-rounded block-link-shadow text-center" href="be_pages_ecom_customer.html">
                        <div className="block-content bg-gd-dusk">
                            <div className="push">
                                <img className="img-avatar img-avatar-thumb" src="/media/avatars/avatar15.jpg" alt="" />
                            </div>
                            <div className="pull-r-l pull-b py-10 bg-black-op-25">
                                <div className="font-w600 mb-5 text-white">
                                    John Smith <i className="fa fa-star text-warning"></i>
                                </div>
                                <div className="font-size-sm text-white-op">Premium Member</div>
                            </div>
                        </div>
                        <div className="block-content">
                            <div className="row items-push text-center">
                                <div className="col-6">
                                    <div className="mb-5"><i className="si si-bag fa-2x"></i></div>
                                    <div className="font-size-sm text-muted">6 Orders</div>
                                </div>
                                <div className="col-6">
                                    <div className="mb-5"><i className="si si-basket-loaded fa-2x"></i></div>
                                    <div className="font-size-sm text-muted">15 Products</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Customer's Basic Info --> */}

                {/* <!-- Customer's Past Orders --> */}
                <div className="col-lg-8">
                    <div className="block block-rounded">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Past Orders</h3>
                        </div>
                        <div className="block-content">
                            <table className="table table-borderless table-sm table-striped">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="be_pages_ecom_order.html">ORD.560</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Completed</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            2017/10/27                                </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">John Smith</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$830</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="be_pages_ecom_order.html">ORD.496</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Completed</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            2017/10/26                                </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">John Smith</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$976</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="be_pages_ecom_order.html">ORD.906</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Completed</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            2017/10/25                                </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">John Smith</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$577</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="be_pages_ecom_order.html">ORD.822</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Completed</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            2017/10/24                                </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">John Smith</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$243</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="be_pages_ecom_order.html">ORD.933</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-success">Completed</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            2017/10/23                                </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">John Smith</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$982</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- END Customer's Past Orders --> */}
            </div>
            {/* <!-- END Customer --> */}

            {/* <!-- Addresses --> */}
            <h2 className="content-heading">Addresses</h2>
            <div className="row row-deck gutters-tiny">
                {/* <!-- Billing Address --> */}
                <div className="col-md-6">
                    <div className="block block-rounded">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Billing Address</h3>
                        </div>
                        <div className="block-content">
                            <div className="font-size-lg text-black mb-5">John Smith</div>
                            <address>
                                5110 8th Ave<br />
                                New York 11220<br />
                                United States<br />
                                <i className="fa fa-phone mr-5"></i> (999) 111-222222<br />
                                <i className="fa fa-envelope-o mr-5"></i> <a href="javascript:void(0)">company@example.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                {/* <!-- END Billing Address --> */}

                {/* <!-- Shipping Address --> */}
                <div className="col-md-6">
                    <div className="block block-rounded">
                        <div className="block-header block-header-default">
                            <h3 className="block-title">Shipping Address</h3>
                        </div>
                        <div className="block-content">
                            <div className="font-size-lg text-black mb-5">John Smith</div>
                            <address>
                                5110 8th Ave<br />
                                New York 11220<br />
                                United States<br /><br />
                                <i className="fa fa-phone mr-5"></i> (999) 111-222222<br />
                                <i className="fa fa-envelope-o mr-5"></i> <a href="javascript:void(0)">company@example.com</a>
                            </address>
                        </div>
                    </div>
                </div>
                {/* <!-- END Shipping Address --> */}
            </div>
            {/* <!-- END Addresses --> */}

        </div>
    </React.Fragment >
}

export default OrderDetail
