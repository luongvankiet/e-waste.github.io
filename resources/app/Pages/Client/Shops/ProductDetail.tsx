import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../../../Components';
import { useParams } from 'react-router-dom';
import * as ProductModel from '../../../Models/Products';

interface ProductDetailProps {
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = (props) => {
    const { id } = useParams<{ id: any }>()
    const [product, setProduct] = useState<ProductModel.IProduct>();
    const [products, setProducts] = useState<ProductModel.IProduct[]>();

    useEffect(() => {
        setProduct(ProductModel.getProduct(id));
        setProducts(ProductModel.getList());
    }, [id]);

    return <React.Fragment>
        <div className="content my-100">
            <Breadcrumb items={[
                { name: 'Home', link: '/' },
                { name: 'Shops', link: '/shops' },
                { name: product?.id, active: true },
            ]}></Breadcrumb>

            <div className="block block-rounded my-30">
                <div className="block-content mb-4">
                    <div className="content align-items-center">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src={product?.image_url} className="w-100" alt="" />
                            </div>
                            <div className="col-12 col-md-6">
                                <h5>{product?.name}</h5>
                                <div className="d-flex">
                                    <span className="text-primary mr-2">${product?.price}</span>
                                    <div className="border-l pl-2">
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <i className="fa fa-star text-warning"></i>
                                        <span className="ml-2">120 ratings</span>
                                    </div>
                                </div>
                                <hr />
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, pariatur molestiae aspernatur nostrum eveniet porro eius maiores, tempora reprehenderit voluptas aliquid, tempore delectus ipsum molestias. Mollitia, amet architecto. Et, dolorem?</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, pariatur molestiae aspernatur nostrum eveniet porro eius maiores, tempora reprehenderit voluptas aliquid, tempore delectus ipsum molestias. Mollitia, amet architecto. Et, dolorem?</p>
                                <hr />
                                <div className="d-flex">
                                    <button type="button" className="btn btn-circle btn-sm btn-alt-secondary mr-5 mb-5" style={{ backgroundColor: 'blue' }}>
                                    </button>
                                    <button type="button" className="btn btn-circle btn-sm btn-alt-secondary mr-5 mb-5" style={{ backgroundColor: 'black' }}>
                                    </button>
                                    <button type="button" className="btn btn-circle btn-sm btn-alt-secondary mr-5 mb-5" style={{ backgroundColor: 'green' }}>
                                    </button>
                                    <button type="button" className="btn btn-circle btn-sm btn-alt-secondary mr-5 mb-5" style={{ backgroundColor: 'red' }}>
                                    </button>
                                    <button type="button" className="btn btn-circle btn-sm btn-alt-secondary mr-5 mb-5" style={{ backgroundColor: 'yellow' }}>
                                    </button>
                                </div>
                                <hr />
                                <h6>Status: Available</h6>
                                <div className="d-flex">
                                    <button type="button" className="btn btn-primary mr-5 mb-5">
                                        <i className="si si-basket mr-5"></i>Add to cart
                                    </button>
                                    <button type="button" className="btn btn-success mr-5 mb-5">
                                        <i className="si si-heart mr-5"></i>Wishlish
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block-content bg-gray-lighter">
                    <div className="content mb-4">
                        <div className="row gutters-tiny">
                            <div className="col-6 col-md-4">
                                <a className="block block-rounded block-bordered block-link-shadow text-center" href="javascript:void(0)">
                                    <div className="block-content">
                                        <p className="mt-5">
                                            <i className="si si-badge fa-4x"></i>
                                        </p>
                                        <p className="font-w600">100% Original</p>
                                        <p className="text-muted">Chocolate bar candy canes ice cream toffee. Croissant pie cookie halvah.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 col-md-4">
                                <a className="block block-rounded block-bordered block-link-shadow text-center" href="javascript:void(0)">
                                    <div className="block-content">
                                        <p className="mt-5">
                                            <i className="si si-clock fa-4x"></i>
                                        </p>
                                        <p className="font-w600">30 Day Replacement</p>
                                        <p className="text-muted">Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-6 col-md-4">
                                <a className="block block-rounded block-bordered block-link-shadow text-center" href="javascript:void(0)">
                                    <div className="block-content">
                                        <p className="mt-5">
                                            <i className="si si-shield fa-4x"></i>
                                        </p>
                                        <p className="font-w600">1 Year Warranty</p>
                                        <p className="text-muted">Marshmallow biscuit donut dragée fruitcake. Jujubes wafer cupcake.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block-content text-center bg-gray-light">
                    <div className="content">
                        <h3>Related Product</h3>
                        <div className="row">
                            {products?.map((product, key) => {
                                if (key > 3) {
                                    return <></>
                                }

                                return <div className="col-6 col-md-3">
                                    <a href={`/products/${product.id}`}>
                                        <div className="block block-rounded p-3" style={{ minHeight: '300px' }}>
                                            <h5>{product.name}</h5>
                                            <img src={product.image_url} alt="" className="w-100" />
                                            <div className="d-flex justify-content-center w-100">
                                                <span className="text-primary mr-2">${product?.price}</span>
                                                <div className="border-l pl-2">
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <i className="fa fa-star text-warning"></i>
                                                    <span className="ml-2">120 ratings</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment >
}

export default ProductDetail
