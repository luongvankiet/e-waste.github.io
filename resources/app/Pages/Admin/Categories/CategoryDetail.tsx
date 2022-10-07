import React, { useEffect, useState } from 'react'
import * as CategortModel from '../../../Models/Categories';
import * as ProductModel from '../../../Models/Products';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../../../Components/Breadcrumb/index';
import PageContentHeader from '../../../Components/PageContentHeader/index';

interface CategoryDetailProps {
}

const CategoryDetail: React.FunctionComponent<CategoryDetailProps> = (props) => {
    const { id } = useParams<{ id: any }>()
    const [category, setCategory] = useState<CategortModel.ICategory>();
    const [products, setProducts] = useState<ProductModel.IProduct[]>();

    useEffect(() => {
        setCategory(CategortModel.getDetail(id));
        setProducts(ProductModel.getList());
    }, [id]);

    return <React.Fragment>
        <PageContentHeader title={category?.name}></PageContentHeader>
        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            { name: 'Categories', link: '/categories' },
            { name: category?.id, active: true },
        ]}></Breadcrumb>
        <div className="content">
            <div className="block block-rounded block-fx-shadow">
                <div className="block-content">
                    <form>
                        {/* <!-- Vital Info --> */}
                        <h2 className="content-heading text-black">Detail</h2>
                        <div className="row items-push">
                            <div className="col-lg-3">
                                <p className="text-muted">
                                    Basic information
                                </p>
                            </div>
                            <div className="col-lg-7 offset-lg-1">
                                <div className="form-group">
                                    <label htmlFor="re-listing-name">Name</label>
                                    <input type="text" className="form-control form-control-lg" id="re-listing-name" name="re-listing-name" placeholder="eg Brand New Apartment" onChange={(e: any) => setCategory({ ...category, name: e.target.value })} value={category?.name} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- END Vital Info --> */}

                        {/* <!-- Additional Info --> */}
                        <h2 className="content-heading text-black">
                            <div className="float-right">
                                <button type="button" className="btn btn-sm btn-secondary">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            Products ({products?.length})</h2>
                        <table className="table table-borderless table-striped">
                            <thead>
                                <tr>
                                    <th style={{ width: '100px' }}>ID</th>
                                    <th>Product</th>
                                    <th className="text-center">Stock</th>
                                    <th className="text-right" style={{ width: '10%' }}>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products?.map(product => <tr>
                                    <td>
                                        <Link className="font-w600" to={`/admin/products/${product.id}`}>{product.id}</Link>
                                    </td>
                                    <td>{product.name}</td>
                                    <td className="text-center">{product.in_stock}</td>
                                    <td className="text-right">${product.price}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    </React.Fragment >
}

export default CategoryDetail
