import React from 'react'

interface BreadcrumbProps {
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    return <React.Fragment>
        <div className="block block-rounded">
            <div className="block-content block-content-full bg-pattern" style={{ backgroundImage: "url('assets/media/various/bg-pattern-inverse.png')"}}>
              <div className="py-20 text-center">
                <h2 className="font-w700 text-black mb-10">
                  Hosting Support
                </h2>
                <h3 className="h5 text-muted">
                  Start your search here
                </h3>
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-6">
                    <form action="be_pages_hosting_support.html" method="POST">
                      <div className="input-group input-group-lg">
                        <input type="text" className="form-control" placeholder="Search Knowledge Base.."/>
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-secondary">
                            <i className="fa fa-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </React.Fragment>
}

export default Breadcrumb
