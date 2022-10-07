import React from 'react'
import { Link } from 'react-router-dom';

interface SideBarProps {
}

const SideBar: React.FunctionComponent<SideBarProps> = (props) => {
    return <React.Fragment><nav id="sidebar">
        {/* <!-- Sidebar Content --> */}
        <div className="sidebar-content">
            {/* <!-- Side Header --> */}
            <div className="content-header content-header-fullrow bg-black-op-10">
                <div className="content-header-section text-center align-parent">
                    {/* <!-- Close Sidebar, Visible only on mobile screens --> */}
                    {/* <!-- Layout API, functionality initialized in Template._uiApiLayout() --> */}
                    <button type="button" className="btn btn-circle btn-dual-secondary d-lg-none align-v-r" data-toggle="layout" data-action="sidebar_close">
                        <i className="fa fa-times text-danger"></i>
                    </button>
                    {/* <!-- END Close Sidebar --> */}

                    {/* <!-- Logo --> */}
                    <div className="content-header-item">
                        <a className="link-effect font-w700" href="index.html">
                            <i className="si si-fire text-primary"></i>
                            <span className="font-size-xl text-dual-primary-dark">code</span><span className="font-size-xl text-primary">base</span>
                        </a>
                    </div>
                    {/* <!-- END Logo --> */}
                </div>
            </div>
            {/* <!-- END Side Header --> */}

            {/* <!-- Sidebar Scrolling --> */}
            <div className="js-sidebar-scroll">
                {/* <!-- Side Main Navigation --> */}
                <div className="content-side content-side-full">
                    <ul className="nav-main">
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
                </div>
                {/* <!-- END Side Main Navigation --> */}
            </div>
            {/* <!-- END Sidebar Scrolling --> */}
        </div>
        {/* <!-- Sidebar Content --> */}
    </nav>
    </React.Fragment>
}

export default SideBar
