import React from 'react'
import { RenderRouters } from '../../routes'
import Menu from './Menu/index';

interface LayoutProps {
}

const Layout: React.FunctionComponent<LayoutProps> = (props) => {
    return <React.Fragment>
        {/* <Menu/> */}
        <div className="app-content content">
            <div className="content-wrapper">
                <div className="content-body">
                    <RenderRouters/>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default Layout
