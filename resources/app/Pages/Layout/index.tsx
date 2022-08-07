import React from 'react'
import { RenderRouters } from '../../routes'
import SideHeader from './SideHeader';
import SideBar from './SideBar/index';

interface LayoutProps {
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return <React.Fragment>
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed sidebar-inverse">
            {/* Side Overlay */}
            {/* <SideHeader/> */}
            {/* END Side Overlay */}

            {/* SideBar */}
            <SideBar />
            {/* END Sidebar */}

            {/* <!-- Header --> */}
            <header id="page-header">
                {/* <!-- Header Content --> */}
                <div className="content-header">
                    {/* <!-- Left Section --> */}
                    <div className="content-header-section">
                        {/* <!-- Toggle Sidebar --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-navicon"></i>
                        </button>
                        {/* <!-- END Toggle Sidebar --> */}

                        {/* <!-- Open Search Section --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="header_search_on">
                            <i className="fa fa-search"></i>
                        </button>
                        {/* <!-- END Open Search Section --> */}

                        {/* <!-- Layout Options (used just for demonstration) --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-circle btn-dual-secondary" id="page-header-options-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-wrench"></i>
                            </button>
                            <div className="dropdown-menu min-width-300" aria-labelledby="page-header-options-dropdown">
                                <h5 className="h6 text-center py-10 mb-10 border-b text-uppercase">Settings</h5>
                                <h6 className="dropdown-header">Color Themes</h6>
                                <div className="row no-gutters text-center mb-5">
                                    <div className="col-2 mb-5">
                                        <a className="text-default" data-toggle="theme" data-theme="default" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div className="col-2 mb-5">
                                        <a className="text-elegance" data-toggle="theme" data-theme="/css/themes/elegance.css" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div className="col-2 mb-5">
                                        <a className="text-pulse" data-toggle="theme" data-theme="/css/themes/pulse.css" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div className="col-2 mb-5">
                                        <a className="text-flat" data-toggle="theme" data-theme="/css/themes/flat.css" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div className="col-2 mb-5">
                                        <a className="text-corporate" data-toggle="theme" data-theme="/css/themes/corporate.css" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                    <div className="col-2 mb-5">
                                        <a className="text-earth" data-toggle="theme" data-theme="/css/themes/earth.css" href="javascript:void(0)">
                                            <i className="fa fa-2x fa-circle"></i>
                                        </a>
                                    </div>
                                </div>
                                <h6 className="dropdown-header">Header</h6>
                                <div className="row gutters-tiny text-center mb-5">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-sm btn-block btn-alt-secondary" data-toggle="layout" data-action="header_fixed_toggle">Fixed Mode</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-sm btn-block btn-alt-secondary d-none d-lg-block mb-10" data-toggle="layout" data-action="header_style_classic">Classic Style</button>
                                    </div>
                                </div>
                                <h6 className="dropdown-header">Sidebar</h6>
                                <div className="row gutters-tiny text-center mb-5">
                                    <div className="col-6">
                                        <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_off">Light</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="sidebar_style_inverse_on">Dark</button>
                                    </div>
                                </div>
                                <div className="d-none d-xl-block">
                                    <h6 className="dropdown-header">Main Content</h6>
                                    <button type="button" className="btn btn-sm btn-block btn-alt-secondary mb-10" data-toggle="layout" data-action="content_layout_toggle">Toggle Layout</button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- END Layout Options --> */}
                    </div>
                    {/* <!-- END Left Section --> */}

                    {/* <!-- Right Section --> */}
                    <div className="content-header-section">
                        {/* <!-- User Dropdown --> */}
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-user d-sm-none"></i>
                                <span className="d-none d-sm-inline-block">J. Smith</span>
                                <i className="fa fa-angle-down ml-5"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right min-width-200" aria-labelledby="page-header-user-dropdown">
                                {/* <h5 className="h6 text-center py-10 mb-5 border-b text-uppercase">User</h5> */}
                                <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="si si-user mr-5"></i> Profile
                                </a>
                                {/* <a className="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                    <span><i className="si si-envelope-open mr-5"></i> Inbox</span>
                                    <span className="badge badge-primary">3</span>
                                </a>
                                <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="si si-note mr-5"></i> Invoices
                                </a> */}
                                <div className="dropdown-divider"></div>

                                {/* <!-- Toggle Side Overlay --> */}
                                {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                                {/* <a className="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                    <i className="si si-wrench mr-5"></i> Settings
                                </a> */}
                                {/* <!-- END Side Overlay --> */}

                                {/* <div className="dropdown-divider"></div> */}
                                <a className="dropdown-item" href="javascript:void(0)">
                                    <i className="si si-logout mr-5"></i> Sign Out
                                </a>
                            </div>
                        </div>
                        {/* <!-- END User Dropdown --> */}

                        {/* <!-- Notifications --> */}
                        {/* <div className="btn-group" role="group">
                            <button type="button" className="btn btn-rounded btn-dual-secondary" id="page-header-notifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-flag"></i>
                                <span className="badge badge-primary badge-pill">5</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right min-width-300" aria-labelledby="page-header-notifications">
                                <h5 className="h6 text-center py-10 mb-0 border-b text-uppercase">Notifications</h5>
                                <ul className="list-unstyled my-20">
                                    <li>
                                        <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                            <div className="ml-5 mr-15">
                                                <i className="fa fa-fw fa-check text-success"></i>
                                            </div>
                                            <div className="media-body pr-10">
                                                <p className="mb-0">You’ve upgraded to a VIP account successfully!</p>
                                                <div className="text-muted font-size-sm font-italic">15 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                            <div className="ml-5 mr-15">
                                                <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                            </div>
                                            <div className="media-body pr-10">
                                                <p className="mb-0">Please check your payment info since we can’t validate them!</p>
                                                <div className="text-muted font-size-sm font-italic">50 min ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                            <div className="ml-5 mr-15">
                                                <i className="fa fa-fw fa-times text-danger"></i>
                                            </div>
                                            <div className="media-body pr-10">
                                                <p className="mb-0">Web server stopped responding and it was automatically restarted!</p>
                                                <div className="text-muted font-size-sm font-italic">4 hours ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                            <div className="ml-5 mr-15">
                                                <i className="fa fa-fw fa-exclamation-triangle text-warning"></i>
                                            </div>
                                            <div className="media-body pr-10">
                                                <p className="mb-0">Please consider upgrading your plan. You are running out of space.</p>
                                                <div className="text-muted font-size-sm font-italic">16 hours ago</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-body-color-dark media mb-15" href="javascript:void(0)">
                                            <div className="ml-5 mr-15">
                                                <i className="fa fa-fw fa-plus text-primary"></i>
                                            </div>
                                            <div className="media-body pr-10">
                                                <p className="mb-0">New purchases! +$250</p>
                                                <div className="text-muted font-size-sm font-italic">1 day ago</div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item text-center mb-0" href="javascript:void(0)">
                                    <i className="fa fa-flag mr-5"></i> View All
                                </a>
                            </div>
                        </div> */}
                        {/* <!-- END Notifications --> */}

                        {/* <!-- Toggle Side Overlay --> */}
                        {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                        {/* <button type="button" className="btn btn-circle btn-dual-secondary" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="fa fa-tasks"></i>
                        </button> */}
                        {/* <!-- END Toggle Side Overlay --> */}
                    </div>
                    {/* <!-- END Right Section --> */}
                </div>
                {/* <!-- END Header Content --> */}

                {/* <!-- Header Search --> */}
                <div id="page-header-search" className="overlay-header">
                    <div className="content-header content-header-fullrow">
                        <form action="/dashboard" method="POST">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    {/* <!-- Close Search Section --> */}
                                    {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                                    <button type="button" className="btn btn-secondary" data-toggle="layout" data-action="header_search_off">
                                        <i className="fa fa-times"></i>
                                    </button>
                                    {/* <!-- END Close Search Section --> */}
                                </div>
                                <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-secondary">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                {/* <!-- END Header Search --> */}

                {/* <!-- Header Loader --> */}
                {/* <!-- Please check out the Activity page under Elements category to see examples of showing/hiding it --> */}
                <div id="page-header-loader" className="overlay-header bg-primary">
                    <div className="content-header content-header-fullrow text-center">
                        <div className="content-header-item">
                            <i className="fa fa-sun-o fa-spin text-white"></i>
                        </div>
                    </div>
                </div>
                {/* <!-- END Header Loader --> */}
            </header>
            {/* <!-- END Header --> */}

            {/* <!-- Main Container --> */}
            <main id="main-container">
                <div className="content">
                    <RenderRouters />
                </div>
            </main>
            {/* <!-- END Main Container --> */}
        </div>
    </React.Fragment>
}

export default Layout
