import React, { useEffect, useState } from 'react'
import * as CategoryModel from '../../../Models/Categories';
import { Link } from 'react-router-dom';
import { Breadcrumb, PageContentHeader } from '../../../Components';

interface CategoriesProps {
}

const Categories: React.FunctionComponent<CategoriesProps> = (props) => {
    const [categories, setCategories] = useState<CategoryModel.ICategory[]>();

    useEffect(() => {
        setCategories(CategoryModel.getList());
    }, []);

    return <React.Fragment>
        <PageContentHeader title="Categories" />

        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            { name: 'Categories', active: true }
        ]} />

        <div className="content">
            {/* <!-- Products --> */}
            <div className="content-heading">
                Categories ({ categories?.length })
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
                                <th>ID</th>
                                <th className="d-none d-sm-table-cell">Name</th>
                                <th className="d-none d-sm-table-cell">Total Products</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map(category => <tr>
                                <td>
                                    <Link className="font-w600" to={`/admin/categories/${category.id}`}>{category.id}</Link>
                                </td>
                                <td className="d-none d-sm-table-cell">{category.name}</td>
                                <td className="d-none d-sm-table-cell">{category.products_count ?? 0}</td>
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

export default Categories
