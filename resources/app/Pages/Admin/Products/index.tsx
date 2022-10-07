import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../Components/Breadcrumb/index';
import { Link } from 'react-router-dom';
import * as CategoryModel from '../../../Models/Categories';
import * as ProductModel from '../../../Models/Products';
import { PageContentHeader } from '../../../Components';

interface ProductsProps {
}

const Products: React.FunctionComponent<ProductsProps> = (props) => {
    const [categories, setCategories] = useState<CategoryModel.ICategory[]>();
    const [products, setProducts] = useState<ProductModel.IProduct[]>();

    const countByStatus = (status?: string) => {
        return ProductModel.countByStatus(status ?? '');
    }

    const getByCategory = (category?: string) => {
        setProducts(ProductModel.getByCategory(category ?? ''));
    }

    const getByStatus = (status?: string) => {
        setProducts(ProductModel.getByStatus(status ?? ''));
    }

    useEffect(() => {
        setCategories(CategoryModel.data);
        setProducts(ProductModel.data);
    }, []);

    return <React.Fragment>
        <PageContentHeader title="Products"></PageContentHeader>
        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            { name: 'Products', active: true }
        ]} />

        <div className="content">
            {/* <!-- Overview --> */}
            <h2 className="content-heading">Overview</h2>
            <div className="row gutters-tiny">
                {/* <!-- All Products --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-circle-o fa-2x text-info-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-info" data-toggle="countTo" data-to={countByStatus()}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">All Products</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END All Products --> */}

                {/* <!-- Top Sellers --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-check fa-2x text-info-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-info" data-toggle="countTo" data-to={countByStatus('Available')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Available</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Top Sellers --> */}

                {/* <!-- Out of Stock --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-warning fa-2x text-danger-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-danger" data-toggle="countTo" data-to={countByStatus('Out of Stock')}>0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Out of Stock</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Out of Stock --> */}

                {/* <!-- Add Product --> */}
                <div className="col-md-6 col-xl-3">
                    <a className="block block-rounded block-link-shadow" href="be_pages_ecom_product_edit.html">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-archive fa-2x text-success-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-success">
                                    <i className="fa fa-plus"></i>
                                </div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">New Product</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Add Product --> */}
            </div>
            {/* <!-- END Overview --> */}

            {/* <!-- Products --> */}
            <div className="content-heading">
                <div className="dropdown float-right">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-products-filter-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        All
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-products-filter-drop">
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getByStatus('Available')}>
                            <i className="fa fa-fw fa-check text-warning mr-5"></i>Available
                        </a>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getByStatus('Out of Stock')}>
                            <i className="fa fa-fw fa-warning text-danger mr-5"></i>Out of Stock
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getByStatus()}>
                            <i className="fa fa-fw fa-circle-o text-info mr-5"></i>All
                        </a>
                    </div>
                </div>
                <div className="dropdown float-right mr-5">
                    <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="ecom-products-category-drop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="ecom-products-category-drop">
                        {categories?.map(category => <a className="dropdown-item" href="javascript:void(0)" onClick={() => getByCategory(category.name)}>
                            {category.name}
                        </a>)}
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="javascript:void(0)" onClick={() => getByCategory()}>
                            <i className="fa fa-fw fa-circle-o text-info mr-5"></i>All
                        </a>
                    </div>
                </div>
                Products ({countByStatus()})
            </div>
            <div className="block block-rounded">
                <div className="block-content bg-body-light">
                    {/* <!-- Search --> */}
                    <form method="post">
                        <div className="form-group">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search products.." />
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
                    {/* <!-- Products Table --> */}
                    <table className="table table-borderless table-striped">
                        <thead>
                            <tr>
                                <th style={{ width: '100px' }}>ID</th>
                                <th className="d-none d-sm-table-cell">Status</th>
                                <th className="d-none d-sm-table-cell">Submitted</th>
                                <th>Product</th>
                                <th className="d-none d-md-table-cell">Category</th>
                                <th className="text-right">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(product => <tr>
                                <td>
                                    <Link className="font-w600" to={`/admin/products/${product.id}`}>{product.id}</Link>
                                </td>
                                <td className="d-none d-sm-table-cell">
                                    <span className="badge badge-success">{product.status}</span>
                                </td>
                                <td className="d-none d-sm-table-cell">{product.submitted}</td>
                                <td>
                                    <Link to={`/admin/products/${product.id}`}>{product.name}</Link>
                                </td>
                                <td className="d-none d-md-table-cell">
                                    <Link to={`/admin/categories/${product.category_id}`}>{product.category}</Link>
                                </td>
                                <td className="text-right">
                                    <span className="text-black">${product.price}</span>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                    {/* <!-- END Products Table --> */}

                    {/* <!-- Navigation --> */}
                    <nav aria-label="Products navigation">
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
                                <a className="page-link" href="javascript:void(0)">39</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="javascript:void(0)">40</a>
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
            {/* <!-- END Products --> */}
        </div>
    </React.Fragment>
}

export default Products
