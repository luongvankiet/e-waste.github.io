import classNames from 'classnames';
import React from 'react'

interface SideHeaderProps {
    children?: React.ReactNode,
}

const SideHeader: React.FunctionComponent<SideHeaderProps> = (props) => {
    const {
    } = props;

    return <React.Fragment>
        <aside id="side-overlay">
            {/* Side Header */}
            <div className="content-header content-header-fullrow">
                <div className="content-header-section align-parent">
                    {/* Close Side Overlay */}
                    <button type="button" className="btn btn-circle btn-dual-secondary align-v-r" data-toggle="layout" data-action="side_overlay_close">
                        <i className="fa fa-times text-danger"></i>
                    </button>
                    {/* End Clode Side Overlay */}

                    {/* User Info */}
                    <div className="content-header-item">
                        <a className="img-link mr-5" href="#">
                            <img className="img-avatar img-avatar32" src="./media/avatars/avatar15.jpg" alt="" />
                        </a>
                        <a className="align-middle link-effect text-primary-dark font-w600" href="#">John Smith</a>
                    </div>
                    {/* END User Info */}
                </div>
            </div>
            {/* END Side Header */}

            {/* Side Content */}
            <div className="content-side">
                <p>
                    Content..
                </p>
            </div>
            {/* END Side Content */}
        </aside>
    </React.Fragment>
}

export default SideHeader
