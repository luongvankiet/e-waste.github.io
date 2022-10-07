import React from 'react';
import { DataTable, Breadcrumb, PageContentHeader } from '../../../Components';

interface DashboardProps {
}

interface DashboardComponent extends React.FunctionComponent<DashboardProps> {

}

const Dashboard: DashboardComponent = () => {
    return <React.Fragment>
        <PageContentHeader title="Dashboard"/>

        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            { name: 'Orders', active: true }
        ]} />

        <div className="content">
            {/* <!-- Statistics --> */}
            {/* <!-- CountTo ([data-toggle="countTo"] is initialized in Helpers.coreAppearCountTo()) --> */}
            {/* <!-- For more info and examples you can check out https://github.com/mhuggins/jquery-countTo --> */}
            <div className="content-heading">
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-dashboard-stats-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Today
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-dashboard-stats-drop">
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
                {/* <!-- Earnings --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-elegance" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-area-chart text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="2420" data-before="$">0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Earnings</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Earnings --> */}

                {/* <!-- Orders --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-dusk" href="be_pages_ecom_orders.html">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-archive text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="35">0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Orders</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Orders --> */}

                {/* <!-- New Customers --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-sea" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-users text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white" data-toggle="countTo" data-to="15">0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">New Customers</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END New Customers --> */}

                {/* <!-- Conversion Rate --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-transparent bg-gd-aqua" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-cart-arrow-down text-white-op"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-white">5.6%</div>
                                <div className="font-size-sm font-w600 text-uppercase text-white-op">Conversion</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Conversion Rate --> */}
            </div>
            {/* <!-- END Statistics --> */}

            {/* <!-- Orders Overview --> */}
            <div className="content-heading">
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-orders-overview-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        This Week
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-orders-overview-drop">
                        <a className="dropdown-item active" href="javascript:void(0)">
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
                Orders <small className="d-none d-sm-inline">Overview</small>
            </div>

            {/* <!-- Chart.js Chart functionality is initialized in js/pages/be_pages_ecom_dashboard.min.js which was auto compiled from _js/pages/be_pages_ecom_dashboard.js --> */}
            {/* <!-- For more info and examples you can check out http://www.chartjs.org/docs/ --> */}
            <div className="row gutters-tiny">
                {/* <!-- Orders Earnings Chart --> */}
                <div className="col-md-6">
                    <div className="block block-rounded block-mode-loading-refresh">
                        <div className="block-header">
                            <h3 className="block-title">
                                Earnings
                            </h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i className="si si-refresh"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content block-content-full bg-body-light text-center">
                            <div className="row gutters-tiny">
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">All</div>
                                    <div className="font-size-h3 font-w600">$9,587</div>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Profit</div>
                                    <div className="font-size-h3 font-w600 text-success">$8,087</div>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Expenses</div>
                                    <div className="font-size-h3 font-w600 text-danger">$1,500</div>
                                </div>
                            </div>
                        </div>
                        <div className="block-content block-content-full">
                            <div className="pull-all">
                                {/* <!-- Earnings Chart Container --> */}
                                <canvas className="js-chartjs-ecom-dashboard-earnings"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Orders Earnings Chart --> */}

                {/* <!-- Orders Volume Chart --> */}
                <div className="col-md-6">
                    <div className="block block-rounded block-mode-loading-refresh">
                        <div className="block-header">
                            <h3 className="block-title">
                                Volume
                            </h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                    <i className="si si-refresh"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content block-content-full bg-body-light text-center">
                            <div className="row gutters-tiny">
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">All</div>
                                    <div className="font-size-h3 font-w600">183</div>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Completed</div>
                                    <div className="font-size-h3 font-w600 text-success">175</div>
                                </div>
                                <div className="col-4">
                                    <div className="font-size-sm font-w600 text-uppercase text-muted">Canceled</div>
                                    <div className="font-size-h3 font-w600 text-danger">8</div>
                                </div>
                            </div>
                        </div>
                        <div className="block-content block-content-full">
                            <div className="pull-all">
                                {/* <!-- Orders Chart Container --> */}
                                <canvas className="js-chartjs-ecom-dashboard-orders"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Orders Volume Chart --> */}
            </div>
            {/* <!-- END Orders Overview --> */}

            {/* <!-- Latest Orders and Top Products --> */}
            <div className="row gutters-tiny">
                {/* <!-- Latest Orders --> */}
                <div className="col-xl-6">
                    <h2 className="content-heading">Latest Orders</h2>
                    <div className="block block-rounded">
                        <div className="block-content">
                            <table className="table table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th style={{ width: '100px' }}>ID</th>
                                        <th>Status</th>
                                        <th className="d-none d-sm-table-cell">Customer</th>
                                        <th className="text-right">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1851</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Canceled</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Jesse Fisher</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$468</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1850</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Canceled</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Andrea Gardner</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$986</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1849</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-info">Processing</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Laura Carr</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$545</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1848</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-info">Processing</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Amanda Powell</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$665</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1847</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning">Pending</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Jesse Fisher</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$498</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1846</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning">Pending</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Scott Young</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$652</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1845</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-info">Processing</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Henry Harrison</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$134</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1844</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Canceled</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">David Fuller</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$663</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1843</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-danger">Canceled</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Jose Wagner</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$732</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a className="font-w600" href="/admin/orders/ORD.1851">ORD.1842</a>
                                        </td>
                                        <td>
                                            <span className="badge badge-warning">Pending</span>
                                        </td>
                                        <td className="d-none d-sm-table-cell">
                                            <a href="be_pages_ecom_customer.html">Melissa Rice</a>
                                        </td>
                                        <td className="text-right">
                                            <span className="text-black">$537</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- END Latest Orders --> */}

                {/* <!-- Top Products --> */}
                <div className="col-xl-6">
                    <h2 className="content-heading">Top Products</h2>
                    <div className="block block-rounded">
                        <div className="block-content">
                            <table className="table table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th className="d-none d-sm-table-cell" style={{ width: '100px' }}>ID</th>
                                        <th>Product</th>
                                        <th className="text-center">Orders</th>
                                        <th className="d-none d-sm-table-cell text-center">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.258</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Dark Souls III</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">912</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.198</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Bioshock Collection</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">895</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.852</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Alien Isolation</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">820</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.741</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Bloodborne</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">793</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.985</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Forza Motorsport 7</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">782</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.056</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Fifa 18</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">776</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.036</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Gears of War 4</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">680</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.682</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Minecraft</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">670</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.478</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Dishonored 2</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">640</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="d-none d-sm-table-cell">
                                            <a className="font-w600" href="/admin/products/PID.445">PID.952</a>
                                        </td>
                                        <td>
                                            <a href="be_pages_ecom_product_edit.html">Gran Turismo Sport</a>
                                        </td>
                                        <td className="text-center">
                                            <a className="text-gray-dark" href="be_pages_ecom_orders.html">630</a>
                                        </td>
                                        <td className="d-none d-sm-table-cell text-center">
                                            <div className="text-warning">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- END Top Products --> */}
            </div>
            {/* <!-- END Latest Orders and Top Products --> */}
        </div>
    </React.Fragment>
}

export default Dashboard
