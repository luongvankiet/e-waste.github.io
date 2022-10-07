import React from 'react'

interface HeaderProps {
    children?: React.ReactNode,
}

const Header: React.FunctionComponent<HeaderProps> = (props) => {
    const {
    } = props;

    return <React.Fragment>
        <header id="page-header" className="bg-primary-dark">
            {/* <!-- Header Content --> */}
            <div className="content-header">
                {/* <!-- Left Section --> */}
                <div className="content-header-section">
                    {/* <!-- Logo --> */}
                    <div className="content-header-item mr-10">
                        <a className="link-effect font-w600" href="/">
                            <span className="font-size-xl text-dual-primary-dark">E-Waste</span><span className="font-size-xl text-primary"> Collect</span>
                        </a>
                    </div>
                    {/* <!-- END Logo --> */}
                    {/* <!-- Open Search Section --> */}
                    {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                    {/* <button type="button" className="btn btn-rounded btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                        <i className="fa fa-search mr-5"></i> Search
                    </button> */}
                    {/* <!-- END Open Search Section --> */}
                </div>
                {/* <!-- END Left Section --> */}

                {/* <!-- Right Section --> */}
                <div className="content-header-section">
                    {/* <!-- Header Navigation --> */}
                    <ul className="nav-main-header">
                        <li>
                            <a href="/blog"><i className="si si-graduation"></i>Blog</a>
                        </li>
                        <li>
                            <a href="/shops"><i className="si si-bag"></i>Shops</a>
                        </li>
                        <li>
                            <a href="/about"><i className="si si-info"></i>About us</a>
                        </li>
                        <li>
                            <a href="/contact"><i className="si si-earphones"></i>Contact us</a>
                        </li>
                        <li>
                            <a className="active" href="#" data-toggle="modal" data-target="#modal-pick-up"><i className="si si-rocket"></i>Request for pick-up</a>
                        </li>
                        <li>
                            <div className="btn-group show" role="group">
                                <button type="button" className="btn btn-dual-secondary" id="page-header-notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <i className="si si-basket mr-2"></i>
                                    <span className=""></span>Cart
                                    <span className="badge badge-primary badge-pill ml-2">5</span>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right min-width-320" aria-labelledby="page-header-notifications" style={{ position: 'absolute', willChange: 'transform', top: '5px', left: '0px', transform: 'translate3d(-231px, -26px, 0px)' }} x-placement="top-end">
                                    <h5 className="h6 text-center py-10 mb-0 border-b text-uppercase">Cart</h5>
                                    <div className="container dropdown-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-4">
                                                <img src="/media/products/6.png" alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mb-2">Product #21</h5>
                                                <span>1 x $16</span>
                                            </div>
                                            <div className="col-2">
                                                <i className="si si-trash" style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container dropdown-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-4">
                                                <img src="/media/products/1.png" alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mb-2">Product #21</h5>
                                                <span>1 x $16</span>
                                            </div>
                                            <div className="col-2">
                                                <i className="si si-trash" style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container dropdown-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-4">
                                                <img src="/media/products/2.png" alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mb-2">Product #21</h5>
                                                <span>1 x $16</span>
                                            </div>
                                            <div className="col-2">
                                                <i className="si si-trash" style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container dropdown-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-4">
                                                <img src="/media/products/3.png" alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mb-2">Product #21</h5>
                                                <span>1 x $16</span>
                                            </div>
                                            <div className="col-2">
                                                <i className="si si-trash" style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container dropdown-item">
                                        <div className="row d-flex justify-content-between align-items-center">
                                            <div className="col-4">
                                                <img src="/media/products/8.png" alt="" style={{ width: '100%' }} />
                                            </div>
                                            <div className="col-6">
                                                <h5 className="mb-2">Product #21</h5>
                                                <span>1 x $16</span>
                                            </div>
                                            <div className="col-2">
                                                <i className="si si-trash" style={{ cursor: 'pointer' }}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item text-center mb-0" href="javascript:void(0)">
                                        <i className="si si-basket mr-5"></i> Checkout
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a className="nav-submenu" data-toggle="nav-submenu" href="#"><i className="si si-user"></i>J. Smith</a>
                            <ul>
                                <li>
                                    <a href="#">Profile</a>
                                </li>
                                <li>
                                    <a href="">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* <!-- END Header Navigation --> */}

                    {/* <!-- Toggle Sidebar --> */}
                    {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                    <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                        <i className="fa fa-navicon"></i>
                    </button>
                    {/* <!-- END Toggle Sidebar --> */}
                </div>
                {/* <!-- END Right Section --> */}
            </div>
            {/* <!-- END Header Content --> */}

            {/* <!-- Header Search --> */}
            <div id="page-header-search" className="overlay-header">
                <div className="content-header content-header-fullrow">
                    <form>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                {/* <!-- Close Search Section --> */}
                                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                                <button type="button" className="btn btn-secondary px-15" data-toggle="layout" data-action="header_search_off">
                                    <i className="fa fa-times"></i>
                                </button>
                                {/* <!-- END Close Search Section --> */}
                            </div>
                            <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary px-15">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* <!-- END Header Search --> */}

            {/* <!-- Header Loader --> */}
            <div id="page-header-loader" className="overlay-header bg-primary">
                <div className="content-header content-header-fullrow text-center">
                    <div className="content-header-item">
                        <i className="fa fa-sun-o fa-spin text-white"></i>
                    </div>
                </div>
            </div>
            {/* <!-- END Header Loader --> */}
        </header>

        <div className="modal fade" id="modal-pick-up" tabIndex={-1} role="dialog" aria-labelledby="modal-fadein" aria-modal="true" style={{ display: 'none' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="block block-themed block-transparent mb-0">
                        <div className="block-header bg-primary-dark">
                            <h3 className="block-title">Request For A Pick-up</h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-dismiss="modal" aria-label="Close">
                                    <i className="si si-close"></i>
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <div className="form-group row">
                                <div className="col-12 col-md-6">
                                    <label htmlFor="be-contact-name">First Name</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your first name.." />
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="be-contact-name">Last Name</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your last name.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label htmlFor="be-contact-name">Email</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your email.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label htmlFor="be-contact-name">Address</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your address.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label htmlFor="be-contact-name">Phone number</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your phone number.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12">
                                    <label htmlFor="be-contact-name">Note</label>
                                    <textarea rows={5} className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <form className="dropzone dz-clickable" action="be_forms_plugins.html"><div className="dz-default dz-message"><button className="dz-button" type="button">Drop files here to upload</button></div></form>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-alt-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-alt-success" data-dismiss="modal">
                            <i className="fa fa-check"></i> Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Header
