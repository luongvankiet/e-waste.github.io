import React, { useEffect, useState } from 'react'

interface BlogProps {
}

const Blog: React.FunctionComponent<BlogProps> = (props) => {
    return <React.Fragment>
        <div className="bg-primary-lighter">
            <div className="content content-top content-full text-center">
                <div className="py-50">
                    <h1 className="h2 font-w700 m-10 text-primary-dark">Blog</h1>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="row items-push py-30">
                {/* <!-- Posts --> */}
                <div className="col-xl-8">
                    <div className="mb-50">
                        <div className="overflow-hidden rounded mb-20" style={{ height: '200px' }}>
                            <a className="img-link" href="be_pages_generic_story.html">
                                <img className="img-fluid" src="/media/photos/photo3@2x.jpg" alt="" />
                            </a>
                        </div>
                        <h3 className="h4 font-w700 text-uppercase mb-5">The new version is now live!</h3>
                        <div className="text-muted mb-10">
                            <span className="mr-15">
                                <i className="fa fa-fw fa-calendar mr-5"></i>July 16, 2017
                            </span>
                            <a className="text-muted mr-15" href="be_pages_generic_profile.html">
                                <i className="fa fa-fw fa-user mr-5"></i>John Smith
                            </a>
                            <a className="text-muted" href="javascript:void(0)">
                                <i className="fa fa-fw fa-tag mr-5"></i>News
                            </a>
                        </div>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                        <a className="link-effect font-w600" href="be_pages_generic_story.html">Read More..</a>
                    </div>
                    <div className="mb-50">
                        <div className="overflow-hidden rounded mb-20" style={{ height: '200px' }}>
                            <a className="img-link" href="be_pages_generic_story.html">
                                <img className="img-fluid" src="/media/photos/photo7@2x.jpg" alt="" />
                            </a>
                        </div>
                        <h3 className="h4 font-w700 text-uppercase mb-5">How to work from home more efficiently</h3>
                        <div className="text-muted mb-10">
                            <span className="mr-15">
                                <i className="fa fa-fw fa-calendar mr-5"></i>July 10, 2017
                            </span>
                            <a className="text-muted mr-15" href="be_pages_generic_profile.html">
                                <i className="fa fa-fw fa-user mr-5"></i>John Smith
                            </a>
                            <a className="text-muted" href="javascript:void(0)">
                                <i className="fa fa-fw fa-tag mr-5"></i>Inpiration
                            </a>
                        </div>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                        <a className="link-effect font-w600" href="be_pages_generic_story.html">Read More..</a>
                    </div>
                    <div className="mb-50">
                        <div className="overflow-hidden rounded mb-20" style={{ height: '200px' }}>
                            <a className="img-link" href="be_pages_generic_story.html">
                                <img className="img-fluid" src="/media/photos/photo28@2x.jpg" alt="" />
                            </a>
                        </div>
                        <h3 className="h4 font-w700 text-uppercase mb-5">Travel the world and feel alive</h3>
                        <div className="text-muted mb-10">
                            <span className="mr-15">
                                <i className="fa fa-fw fa-calendar mr-5"></i>July 5, 2017
                            </span>
                            <a className="text-muted mr-15" href="be_pages_generic_profile.html">
                                <i className="fa fa-fw fa-user mr-5"></i>John Smith
                            </a>
                            <a className="text-muted" href="javascript:void(0)">
                                <i className="fa fa-fw fa-tag mr-5"></i>Travel
                            </a>
                        </div>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                        <a className="link-effect font-w600" href="be_pages_generic_story.html">Read More..</a>
                    </div>
                    <div className="mb-50">
                        <div className="overflow-hidden rounded mb-20" style={{ height: '200px' }}>
                            <a className="img-link" href="be_pages_generic_story.html">
                                <img className="img-fluid" src="/media/photos/photo30@2x.jpg" alt="" />
                            </a>
                        </div>
                        <h3 className="h4 font-w700 text-uppercase mb-5">Believe in your dreams and start working</h3>
                        <div className="text-muted mb-10">
                            <span className="mr-15">
                                <i className="fa fa-fw fa-calendar mr-5"></i>July 1, 2017
                            </span>
                            <a className="text-muted mr-15" href="be_pages_generic_profile.html">
                                <i className="fa fa-fw fa-user mr-5"></i>John Smith
                            </a>
                            <a className="text-muted" href="javascript:void(0)">
                                <i className="fa fa-fw fa-tag mr-5"></i>Motivation
                            </a>
                        </div>
                        <p>Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.</p>
                        <a className="link-effect font-w600" href="be_pages_generic_story.html">Read More..</a>
                    </div>
                    <nav className="clearfix push">
                        <a className="btn btn-secondary min-width-100 float-right" href="javascript:void(0)">
                            Next <i className="fa fa-arrow-right ml-5"></i>
                        </a>
                        <a className="btn btn-secondary min-width-100 float-left" href="javascript:void(0)">
                            <i className="fa fa-arrow-left mr-5"></i> Prev
                        </a>
                    </nav>
                    <hr className="d-xl-none" />
                </div>
                {/* <!-- END Posts --> */}

                {/* <!-- Sidebar --> */}
                <div className="col-xl-4">
                    {/* <!-- Twitter Feed --> */}
                    <div className="block block-transparent">
                        <div className="block-header">
                            <h3 className="block-title text-uppercase">Twitter Feed</h3>
                            <div className="block-options">
                                <a className="btn btn-sm btn-alt-secondary" href="javascript:void(0)">
                                    <i className="si si-social-twitter mr-5"></i> Follow Us
                                </a>
                            </div>
                        </div>
                        <div className="block-content">
                            <div className="media mb-20">
                                <img className="img-avatar img-avatar32 d-flex mr-20" src="/media/avatars/avatar13.jpg" alt="" />
                                <div className="media-body">
                                    <p className="mb-5">In gravida nulla. Nulla vel metus scelerisque ante sollicitudin. <a className="text-elegance" href="javascript:void(0)">#startup</a> <a className="text-elegance" href="javascript:void(0)">#life</a></p>
                                    <div className="font-size-sm text-muted">10 hrs ago</div>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <img className="img-avatar img-avatar32 d-flex mr-20" src="/media/avatars/avatar5.jpg" alt="" />
                                <div className="media-body">
                                    <p className="mb-5">Vestibulum in vulputate at, tempus viverra turpis. Fusce <a href="javascript:void(0)">condimentum</a> nunc ac nisi vulputate fringilla.</p>
                                    <div className="font-size-sm text-muted">15 hrs ago</div>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <img className="img-avatar img-avatar32 d-flex mr-20" src="/media/avatars/avatar6.jpg" alt="" />
                                <div className="media-body">
                                    <p className="mb-5">In gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</p>
                                    <div className="font-size-sm text-muted">2 days ago</div>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <img className="img-avatar img-avatar32 d-flex mr-20" src="/media/avatars/avatar16.jpg" alt="" />
                                <div className="media-body">
                                    <p className="mb-5">Vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum <a href="javascript:void(0)">nunc</a> ac nisi vulputate fringilla. <a className="text-elegance" href="javascript:void(0)">#web</a> <a className="text-elegance" href="javascript:void(0)">#stuff</a></p>
                                    <div className="font-size-sm text-muted">5 days ago</div>
                                </div>
                            </div>
                            <div className="media mb-20">
                                <img className="img-avatar img-avatar32 d-flex mr-20" src="/media/avatars/avatar8.jpg" alt="" />
                                <div className="media-body">
                                    <p className="mb-5">Vestibulum in vulputate at, tempus viverra turpis. Fusce <a href="javascript:void(0)">condimentum</a> nunc ac nisi vulputate fringilla.</p>
                                    <div className="font-size-sm text-muted">1 week ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END Twitter Feed --> */}

                    {/* <!-- Categories --> */}
                    <div className="block block-transparent">
                        <div className="block-header">
                            <h3 className="block-title text-uppercase">
                                <i className="fa fa-fw fa-list mr-5"></i> Categories
                            </h3>
                        </div>
                        <div className="block-content">
                            <ul className="nav nav-pills flex-column push">
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between active" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-star mr-5"></i> News</span>
                                        <span className="badge badge-pill badge-secondary">59</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-magic mr-5"></i> Special Offers</span>
                                        <span className="badge badge-pill badge-secondary">40</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-briefcase mr-5"></i> Products</span>
                                        <span className="badge badge-pill badge-secondary">95</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-pencil mr-5"></i> Tutorials</span>
                                        <span className="badge badge-pill badge-secondary">25</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-book mr-5"></i> Guides</span>
                                        <span className="badge badge-pill badge-secondary">49</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                        <span><i className="fa fa-fw fa-newspaper-o mr-5"></i> Updates</span>
                                        <span className="badge badge-pill badge-secondary">78</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- END Categories --> */}

                    {/* <!-- Tag Cloud --> */}
                    <div className="block block-transparent">
                        <div className="block-header">
                            <h3 className="block-title text-uppercase">
                                <i className="fa fa-fw fa-tags mr-5"></i> Tag Cloud
                            </h3>
                        </div>
                        <div className="block-content block-content-full">
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>html5
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>css3
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>javascript
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>angular2
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>vuejs
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>react
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>php
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>ruby
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>jquery
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>modern
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>dashboard
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>themes
                            </a>
                            <a className="btn btn-sm btn-alt-secondary mb-5" href="javascript:void(0)">
                                <i className="fa fa-tag text-muted mr-5"></i>freebies
                            </a>
                        </div>
                    </div>
                    {/* <!-- END Tag Cloud --> */}
                </div>
                {/* <!-- END Sidebar --> */}
            </div>
        </div>
        {/* <!-- END Blog and Sidebar --> */}
    </React.Fragment>
}

export default Blog
