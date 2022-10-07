import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../../Components/Breadcrumb/index';
import * as CategoryModel from '../../../Models/Categories';
import * as ProductModel from '../../../Models/Products';

interface ShopsProps {
}

const Shops: React.FunctionComponent<ShopsProps> = (props) => {
    const [products, setProducts] = useState<ProductModel.IProduct[]>();
    const [categories, setCategories] = useState<CategoryModel.ICategory[]>();

    useEffect(() => {
        setCategories(CategoryModel.getList());
        setProducts(ProductModel.getList());
    }, []);

    return <React.Fragment>
        <div className="content my-100">
            <Breadcrumb items={[
                { name: 'Home', link: '/' },
                { name: 'Shops', active: true },
            ]}></Breadcrumb>

            <div className="row items-push py-30">
                <div className="col-xl-3">
                    <div className="mb-50">
                        <h3>Filter</h3>

                        <div className="block block-rounded">
                            <div className="block-content">
                                <form className="js-validation-be-contact">
                                    <h6>Multi Range</h6>
                                    <div className="form-group">
                                        <ul className="list-unstyled">
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" checked />
                                                    <span className="css-control-indicator"></span> All
                                                </label>
                                            </li>
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" />
                                                    <span className="css-control-indicator"></span> &lt;= $100
                                                </label>
                                            </li>
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" />
                                                    <span className="css-control-indicator"></span> $100 - $300
                                                </label>
                                            </li>
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" />
                                                    <span className="css-control-indicator"></span> $300 - $700
                                                </label>
                                            </li>
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" />
                                                    <span className="css-control-indicator"></span> $700 - $1000
                                                </label>
                                            </li>
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="multi-range" />
                                                    <span className="css-control-indicator"></span> &gt;= $1000
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                    <hr />
                                    <h6>Price Range</h6>
                                    <div className="form-group">
                                        <div className="col-12">
                                            <span className="irs irs--round js-irs-0">
                                                <span className="irs">
                                                    <span className="irs-line" tabIndex={0}></span>
                                                    <span className="irs-min" style={{ visibility: 'visible' }}>0</span>
                                                    <span className="irs-max" style={{ visibility: 'visible' }}>5000</span>
                                                    <span className="irs-from" style={{ visibility: 'hidden' }}> 0</span>
                                                    <span className="irs-to" style={{ visibility: 'hidden' }}>0</span>
                                                    <span className="irs-single" style={{ left: '32.3797%' }}> 2300</span>
                                                </span>
                                                <span className="irs-grid"></span>
                                                <span className="irs-bar irs-bar--single" style={{ left: '0px', width: '33.7673 %' }}></span>
                                                <span className="irs-shadow shadow-single" style={{ display: 'none' }}></span>
                                                <span className="irs-handle single" style={{ left: '32.4653%' }}><i></i><i></i><i></i></span>
                                            </span>
                                            <input type="text" className="js-rangeslider js-rangeslider-enabled irs-hidden-input" id="example-rangeslider1" name="example-rangeslider1" value="25" tabIndex={-1} readOnly></input>
                                        </div>
                                    </div>
                                    <hr />

                                    <h6>Categories</h6>
                                    <div className="form-group">

                                        <ul className="list-unstyled">
                                            <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="category" checked />
                                                    <span className="css-control-indicator"></span> All
                                                </label>
                                            </li>
                                            {categories?.map(category => <li>
                                                <label className="css-control css-control-primary css-radio">
                                                    <input type="radio" className="css-control-input" name="category" />
                                                    <span className="css-control-indicator"></span> {category.name}
                                                </label>
                                            </li>)}
                                        </ul>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-12 text-center">
                                            <button type="button" className="btn btn-hero btn-alt-primary w-100">
                                                Filter
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- END Posts --> */}

                {/* <!-- Sidebar --> */}
                <div className="col-xl-9">
                    <div className="container mb-10">
                        <div className="row d-flex justify-content-between">
                            <h6 className="pt-5">{products ? products.length : 0} results found</h6>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-sm btn-secondary dropdown-toggle" id="btnGroupDrop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Featured</button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="javascript:void(0)">
                                        Lowest
                                    </a>
                                    <a className="dropdown-item" href="javascript:void(0)">
                                        Highest
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="form-group row">
                        <div className="col-12">
                            <div className="input-group"><div className="input-group-prepend"></div><input type="text" className="form-control" placeholder="Search" id="page-header-search-input" name="page-header-search-input" /><div className="input-group-append"><button type="submit" className="btn btn-secondary px-15"><i className="fa fa-search"></i></button></div></div>
                        </div>
                    </div>

                    <div className="row">
                        {products?.map(product => <div className="col-12 col-md-4">
                            <div className="block d-flex flex-column">
                                <a href={`/products/${product.id}`}>
                                    <div className="block-content block-content-full bg-image min-height-175 flex-grow-0" style={{ backgroundImage: `url(${product.image_url})` }}>
                                        {product.status === 'Out of Stock' && <a className="badge badge-danger font-w700 p-2 text-uppercase" href="javascript:void(0)">
                                            Out of Stock
                                        </a>}
                                    </div>
                                </a>
                                <div className="block-content flex-grow-1">
                                    <h5 className="mb-5">
                                        <a className="text-dark" href={`/products/${product.id}`}>
                                            {product.name}
                                        </a>
                                    </h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                                </div>
                                <div className="block-content py-15 bg-body-light flex-grow-0">
                                    <div className="row no-gutters font-size-sm text-center">
                                        <div className="col-4">
                                            <a className="text-muted font-w600" href="javascript:void(0)">
                                                <i className="fa fa-fw fa-tag mr-5 fa-lg"></i> ${product.price}
                                            </a>
                                        </div>
                                        <div className="col-4" style={{ cursor: 'pointer' }}>
                                            <a className="text-muted font-w600" href="javascript:void(0)">
                                                <i className="fa fa-fw fa-heart fa-lg"></i>
                                            </a>
                                        </div>
                                        <div className="col-4" style={{ cursor: 'pointer' }}>
                                            <a className="text-muted font-w600" href="javascript:void(0)">
                                                <i className="fa fa-fw fa-shopping-cart fa-lg"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>

                    <div className="row d-flex justify-content-center">
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
                    </div>
                </div>
                {/* <!-- END Sidebar --> */}
            </div >
        </div >
    </React.Fragment >
}

export default Shops
