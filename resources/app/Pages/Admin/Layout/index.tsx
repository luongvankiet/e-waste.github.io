import React from 'react'
import { RenderRouters } from '../../../routes'
import Header from './Header';
import SideHeader from './Header';
import SideBar from './SideBar/index';

interface AdminLayoutProps {
}

const AdminLayout: React.FunctionComponent<AdminLayoutProps> = (props) => {
    return <React.Fragment>
        <div id="page-container" className="sidebar-o enable-page-overlay side-scroll page-header-modern main-content-boxed sidebar-inverse">
            {/* Side Overlay */}
            {/* <SideHeader/> */}
            {/* END Side Overlay */}

            {/* SideBar */}
            <SideBar />
            {/* END Sidebar */}

            {/* <!-- Header --> */}
            <Header />
            {/* <!-- END Header --> */}

            {/* <!-- Main Container --> */}
            <main id="main-container">
                <RenderRouters />
            </main>
            {/* <!-- END Main Container --> */}
        </div>
    </React.Fragment>
}

export default AdminLayout
