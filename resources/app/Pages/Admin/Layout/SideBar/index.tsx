import React from 'react'
import { Link } from 'react-router-dom';

interface SideBarProps {
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
    return <React.Fragment>
        <nav id="sidebar">
            {/* Sidebar Content */}
            <div className="sidebar-content">
                {/* Side Header */}
                <div className="content-header content-header-fullrow px-15">
                    {/* Mini Mode */}
                    <div className="content-header-section sidebar-mini-visible-b">
                        {/* Logo */}
                        <span className="content-header-item font-w700 font-size-xl float-left animated fadeIn">
                            <span className="text-dual-primary-dark">c</span><span className="text-primary">b</span>
                        </span>
                        {/* END Logo */}
                    </div>
                    {/* END Mini Mode */}

                    {/* Normal Mode */}
                    <div className="content-header-section text-center align-parent sidebar-mini-hidden">
                        {/* Close Sidebar, Visible only on mobile screens */}
                        {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                        <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                            <i className="fa fa-times text-danger"></i>
                        </button>
                        {/* END Close Sidebar */}

                        {/* Logo */}
                        <div className="content-header-item">
                            <a className="link-effect font-w700" href="/admin">
                                <span className="font-size-xl text-dual-primary-dark">E-Waste</span>
                                <span className="font-size-xl text-primary"> Collect</span>
                            </a>
                        </div>
                        {/* END Logo */}
                    </div>
                    {/* END Normal Mode */}
                </div>
                {/* END Side Header */}

                {/* Sidebar Scrolling */}
                <div className="js-sidebar-scroll">
                    {/* Side User */}
                    <div className="content-side content-side-full content-side-user px-10 align-parent">
                        {/* Visible only in mini mode */}
                        <div className="sidebar-mini-visible-b align-v animated fadeIn">
                            <img className="img-avatar img-avatar32" src="/media/avatars/avatar15.jpg" alt="" />
                        </div>
                        {/* END Visible only in mini mode */}

                        {/* Visible only in normal mode */}
                        <div className="sidebar-mini-hidden-b text-center">
                            <a className="img-link" href="javascript:void(0)">
                                <img className="img-avatar" src="/media/avatars/avatar15.jpg" alt="" />
                            </a>
                            <ul className="list-inline mt-10">
                                <li className="list-inline-item">
                                    <a className="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="javascript:void(0)">J. Smith</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="link-effect text-dual-primary-dark" href="/">
                                        <i className="si si-logout"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* END Visible only in normal mode */}
                    </div>
                    {/* END Side User */}

                    {/* Side Navigation */}
                    <div className="content-side content-side-full">
                        <ul className="nav-main">
                            <li>
                                <a className="" href="/admin">
                                    <i className="si si-bar-chart"></i><span className="sidebar-mini-hide">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a className="{{request()->is('/orders') ? 'active': ''}}" href="/admin/orders">
                                    <i className="si si-basket"></i><span className="sidebar-mini-hide">Orders</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/categories">
                                    <i className="si si-list"></i><span className="sidebar-mini-hide">Categories</span>
                                </a>
                            </li>
                            <li>
                                <a href="/admin/products">
                                    <i className="si si-screen-desktop"></i><span className="sidebar-mini-hide">Products</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* END Side Navigation */}
                </div>
                {/* END Sidebar Scrolling */}
            </div>
            {/* Sidebar Content */}
        </nav>
    </React.Fragment>
}

export default SideBar
