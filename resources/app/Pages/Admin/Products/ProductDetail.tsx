import React, { useEffect, useState } from 'react'
import * as CategoryModel from '../../../Models/Categories';
import * as ProductModel from '../../../Models/Products';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../../../Components/Breadcrumb/index';
import PageContentHeader from '../../../Components/PageContentHeader/index';

interface ProductDetailProps {
}

const ProductDetail: React.FunctionComponent<ProductDetailProps> = (props) => {
    const { id } = useParams<{ id: any }>()
    const [categories, setCategories] = useState<CategoryModel.ICategory[]>();
    const [product, setProduct] = useState<ProductModel.IProduct>();

    useEffect(() => {
        setProduct(ProductModel.getProduct());
        setCategories(CategoryModel.getList());
    }, [id]);

    return <React.Fragment>
        <PageContentHeader title={product?.id}></PageContentHeader>
        <Breadcrumb items={[
            { name: 'Dashboard', link: '/admin'},
            {name: "Products", link: '/products'},
            {name: product?.id, active: true},
        ]}></Breadcrumb>
        <div className="content">
            {/* <!-- Overview --> */}
            <h2 className="content-heading">Overview</h2>
            <div className="row gutters-tiny">
                {/* <!-- In Orders --> */}
                <div className="col-md-6 col-xl-4">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-shopping-basket fa-2x text-info-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-info" data-toggle="countTo" data-to="39">0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">In Orders</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END In Orders --> */}

                {/* <!-- Stock --> */}
                <div className="col-md-6 col-xl-4">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-check fa-2x text-success-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-success" data-toggle="countTo" data-to="85">0</div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Stock</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Stock --> */}

                {/* <!-- Delete Product --> */}
                <div className="col-xl-4">
                    <a className="block block-rounded block-link-shadow" href="javascript:void(0)" data-toggle="modal" data-target="#modal-fadein">
                        <div className="block-content block-content-full block-sticky-options">
                            <div className="block-options">
                                <div className="block-options-item">
                                    <i className="fa fa-archive fa-2x text-danger-light"></i>
                                </div>
                            </div>
                            <div className="py-20 text-center">
                                <div className="font-size-h2 font-w700 mb-0 text-danger">
                                    <i className="fa fa-times"></i>
                                </div>
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Delete Product</div>
                            </div>
                        </div>
                    </a>
                </div>
                {/* <!-- END Delete Product --> */}
            </div>
            {/* <!-- END Overview --> */}

            {/* <!-- Update Product --> */}
            <h2 className="content-heading">Update Product</h2>
            <div className="row gutters-tiny">
                {/* <!-- Basic Info --> */}
                <div className="col-md-7">
                    <form>
                        <div className="block block-rounded block-themed">
                            <div className="block-header bg-gd-primary">
                                <h3 className="block-title">Basic Info</h3>
                                <div className="block-options">
                                    <button type="button" className="btn btn-sm btn-alt-primary" data-toggle="modal" data-target="#modal-fadein">
                                        <i className="fa fa-save mr-5"></i>Save
                                    </button>
                                </div>
                            </div>
                            <div className="block-content block-content-full">
                                <div className="form-group row">
                                    <label className="col-12">Product ID</label>
                                    <div className="col-12">
                                        <div className="form-control-plaintext">{product?.id}</div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12" htmlFor="ecom-product-name">Name</label>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="ecom-product-name" name="ecom-product-name" placeholder="Product Name" onChange={(e) => setProduct({ ...product, name: e.target.value })} value={product?.name} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12" htmlFor="example-select2">Category</label>
                                    <div className="col-12">
                                        {/* <!-- Select2 (.js-select2 className is initialized in Helpers.select2()) --> */}
                                        {/* <!-- For more info and examples you can check out https://github.com/select2/select2 --> */}
                                        <select className="js-select2 form-control" id="example-select2" name="example-select2" style={{ width: '100%' }} data-placeholder="Choose one..">
                                            {categories?.map(category => <option value={category.id} selected={product?.category == category.name}>{category.name}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12">Description</label>
                                    <div className="col-12">
                                        {/* <!-- CKEditor (js-ckeditor id is initialized in Helpers.ckeditor()) --> */}
                                        {/* <!-- For more info and examples you can check out http://ckeditor.com --> */}
                                        <textarea className="form-control" id="js-ckeditor" name="js-ckeditor" placeholder="Main Description" rows={8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus, ratione tempore vel quisquam, nostrum minima quis veniam asperiores, repellendus nulla sint sed ipsum quas! Dolor incidunt vero consectetur minus?
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea cupiditate tenetur dolorum. Necessitatibus cum quam temporibus nisi natus aliquid ratione commodi repellat ducimus quibusdam minima, aspernatur praesentium error corporis?</textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12" htmlFor="ecom-product-description-short">Short Description</label>
                                    <div className="col-12">
                                        <textarea className="form-control" id="ecom-product-description-short" name="ecom-product-description-short" placeholder="Description visible on preview.." rows={6}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda, nisi ratione tenetur porro cumque dolore reiciendis ad cum, optio itaque labore. Eum praesentium illum hic aut, ipsum qui nisi temporibus.</textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12" htmlFor="ecom-product-stock">Stock</label>
                                    <div className="col-sm-6">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-fw fa-archive"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" id="ecom-product-stock" name="ecom-product-stock" placeholder="0" value="85" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12" htmlFor="ecom-product-price">Price</label>
                                    <div className="col-sm-6">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fa fa-fw fa-usd"></i>
                                                </span>
                                            </div>
                                            <input type="text" className="form-control" id="ecom-product-price" name="ecom-product-price" placeholder="Price in USD.." value={product?.price} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <!-- END Basic Info --> */}

                {/* <!-- More Options --> */}
                <div className="col-md-5">
                    {/* <!-- Status --> */}
                    <form>
                        <div className="block block-rounded block-themed">
                            <div className="block-header bg-gd-primary">
                                <h3 className="block-title">Status</h3>
                                <div className="block-options">
                                    <button type="button" className="btn btn-sm btn-alt-primary" data-toggle="modal" data-target="#modal-fadein">
                                        <i className="fa fa-save mr-5"></i>Save
                                    </button>
                                </div>
                            </div>
                            <div className="block-content block-content-full">
                                <div className="form-group row">
                                    <label className="col-12">Condition</label>
                                    <div className="col-12">
                                        <label className="css-control css-control-primary css-radio">
                                            <input type="radio" className="css-control-input" id="ecom-product-condition-new" name="ecom-product-condition" checked />
                                            <span className="css-control-indicator"></span> New
                                        </label>
                                        <label className="css-control css-control-secondary css-radio">
                                            <input type="radio" className="css-control-input" id="ecom-product-condition-old" name="ecom-product-condition" />
                                            <span className="css-control-indicator"></span> Old
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-12">Published</label>
                                    <div className="col-12">
                                        <label className="css-control css-control-success css-switch">
                                            <input type="checkbox" className="css-control-input" id="ecom-product-published" name="ecom-product-published" />
                                            <span className="css-control-indicator"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/* <!-- END Status --> */}

                    {/* <!-- Images --> */}
                    <div className="block block-rounded block-themed">
                        <div className="block-header bg-gd-primary">
                            <h3 className="block-title">Images</h3>
                        </div>
                        <div className="block-content block-content-full">
                            {/* <!-- Existing Images --> */}
                            <div className="row gutters-tiny items-push">
                                <div className="col-sm-6 col-xl-4">
                                    <div className="options-container">
                                        <img className="img-fluid options-item" src="/media/photos/photo8.jpg" alt="" />
                                        <div className="options-overlay bg-black-op-75">
                                            <div className="options-overlay-content">
                                                <a className="btn btn-sm btn-rounded btn-alt-danger min-width-75" href="javascript:void(0)">
                                                    <i className="fa fa-times"></i> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-xl-4">
                                    <div className="options-container">
                                        <img className="img-fluid options-item" src="/media/photos/photo18.jpg" alt="" />
                                        <div className="options-overlay bg-black-op-75">
                                            <div className="options-overlay-content">
                                                <a className="btn btn-sm btn-rounded btn-alt-danger min-width-75" href="javascript:void(0)">
                                                    <i className="fa fa-times"></i> Remove
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- END Existing Images --> */}

                            {/* <!-- DropzoneJS Container --> */}
                            {/* <!-- For more info and examples you can check out http://www.dropzonejs.com/#usage --> */}
                            <form className="dropzone"></form>
                        </div>
                    </div>
                    {/* <!-- END Images --> */}
                </div>
                {/* <!-- END More Options --> */}
            </div>
            {/* <!-- END Update Product --> */}
        </div>

        <div className="modal fade" id="modal-fadein" tabIndex={-1} role="dialog" aria-labelledby="modal-fadein" aria-modal="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="block block-themed block-transparent mb-0">
                        <div className="block-header bg-primary-dark">
                            <h3 className="block-title">Confirm</h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i className="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <p>Are you sure you want to perform this action?</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-alt-success" data-dismiss="modal">
                            <i className="fa fa-check"></i> Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default ProductDetail
