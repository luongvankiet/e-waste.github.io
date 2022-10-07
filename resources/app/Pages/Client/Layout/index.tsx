import React from 'react'
import { RenderRouters } from '../../../routes'
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

interface AdminLayoutProps {
}

const AdminLayout: React.FunctionComponent<AdminLayoutProps> = (props) => {
    return <React.Fragment>
        <div id="page-container" className="sidebar-inverse side-scroll page-header-fixed page-header-glass page-header-inverse main-content-boxed">
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

            <Footer/>
        </div>
    </React.Fragment >
}

export default AdminLayout
