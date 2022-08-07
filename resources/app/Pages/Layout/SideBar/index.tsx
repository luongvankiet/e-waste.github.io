import React from 'react'

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
                            <a className="link-effect font-w700" href="/">
                                <i className="si si-fire text-primary"></i>
                                <span className="font-size-xl text-dual-primary-dark">code</span><span className="font-size-xl text-primary">base</span>
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
                            <img className="img-avatar img-avatar32" src="./media/avatars/avatar15.jpg" alt="" />
                        </div>
                        {/* END Visible only in mini mode */}

                        {/* Visible only in normal mode */}
                        <div className="sidebar-mini-hidden-b text-center">
                            <a className="img-link" href="javascript:void(0)">
                                <img className="img-avatar" src="./media/avatars/avatar15.jpg" alt="" />
                            </a>
                            <ul className="list-inline mt-10">
                                <li className="list-inline-item">
                                    <a className="link-effect text-dual-primary-dark font-size-sm font-w600 text-uppercase" href="javascript:void(0)">J. Smith</a>
                                </li>
                                <li className="list-inline-item">
                                    {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                                    <a className="link-effect text-dual-primary-dark" data-toggle="layout" data-action="sidebar_style_inverse_toggle" href="javascript:void(0)">
                                        <i className="si si-drop"></i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="link-effect text-dual-primary-dark" href="javascript:void(0)">
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
                                <a className="{{ request()->is('dashboard') ? ' active' : '' }}" href="/dashboard">
                                    <i className="si si-cup"></i><span className="sidebar-mini-hide">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-main-heading">
                                <span className="sidebar-mini-visible">VR</span><span className="sidebar-mini-hidden">Various</span>
                            </li>
                            <li className="{{ request()->is('pages/*') ? ' open' : '' }}">
                                <a className="nav-subSideBar" data-toggle="nav-subSideBar" href="#"><i className="si si-bulb"></i><span className="sidebar-mini-hide">Examples</span></a>
                                <ul>
                                    <li>
                                        <a className="{{ request()->is('pages/datatables') ? ' active' : '' }}" href="/pages/datatables">DataTables</a>
                                    </li>
                                    <li>
                                        <a className="{{ request()->is('pages/slick') ? ' active' : '' }}" href="/pages/slick">Slick Slider</a>
                                    </li>
                                    <li>
                                        <a className="{{ request()->is('pages/blank') ? ' active' : '' }}" href="/pages/blank">Blank</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-main-heading">
                                <span className="sidebar-mini-visible">MR</span><span className="sidebar-mini-hidden">More</span>
                            </li>
                            <li>
                                <a href="/">
                                    <i className="si si-globe"></i><span className="sidebar-mini-hide">Landing</span>
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
