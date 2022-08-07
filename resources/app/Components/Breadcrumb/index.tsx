import React from 'react'

interface BreadcrumbProps {
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    return <React.Fragment>
        <div className="bg-body-light border-b">
          <div className="content py-5 text-center">
            <nav className="breadcrumb bg-body-light mb-0">
              <a className="breadcrumb-item" href="be_pages_ecom_dashboard.html">e-Commerce</a>
              <span className="breadcrumb-item active">Orders</span>
            </nav>
          </div>
        </div>
    </React.Fragment>
}

export default Breadcrumb
