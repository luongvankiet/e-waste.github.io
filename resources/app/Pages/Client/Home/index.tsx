import React, { useEffect, useState } from 'react'

interface HomeProps {
}

const Home: React.FunctionComponent<HomeProps> = (props) => {
    const [value, setvalue] = useState<any>();

    useEffect(() => { }, []);

    return <React.Fragment>
        <div className="bg-primary-lighter">
            <div className="content content-top content-full text-center">
                <div className="py-50">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <h1 className="h2 font-w700 my-10 text-primary-dark">Waste and recycling services</h1>
                            <h2 className="h4 font-w400 text-primary-dark">Garbage and waste collection days, organising bulky and household item collection, unwanted electronic goods, recycling and food scraps.</h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src="/media/background/home.jpeg" alt="" className="w-75" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="content content-top content-full text-center">
            <h3>Latest Posts</h3>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 col-xl-4">
                    <a className="block bg-image d-flex flex-column" style={{ backgroundImage: "url('/media/photos/photo31.jpg')" }} href="javascript:void(0)">
                        <div className="block-content bg-black-op flex-grow-1">
                            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                                <p>
                                    <span className="badge badge-info font-w700 p-2 text-uppercase">
                                        Story
                                    </span>
                                </p>
                                <p className="font-size-sm">
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-eye text-white-50"></i> 6.2k
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-heart text-white-50"></i> 485
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-comments text-white-50"></i> 92
                                    </span>
                                </p>
                            </div>
                            <h5 className="text-white font-w700 mb-5 mt-100">
                                How the e-waste will impact the environment
                            </h5>
                            <p className="font-w600 text-white-op">
                                Jose Parker · 16 min
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-xl-4">
                    <a className="block bg-image d-flex flex-column" style={{ backgroundImage: "url('/media/photos/photo32.jpg')" }} href="javascript:void(0)">
                        <div className="block-content bg-black-op flex-grow-1">
                            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                                <p>
                                    <span className="badge badge-info font-w700 p-2 text-uppercase">
                                        Story
                                    </span>
                                </p>
                                <p className="font-size-sm">
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-eye text-white-50"></i> 6.2k
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-heart text-white-50"></i> 485
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-comments text-white-50"></i> 92
                                    </span>
                                </p>
                            </div>
                            <h5 className="text-white font-w700 mb-5 mt-100">
                                How the e-waste will impact the environment
                            </h5>
                            <p className="font-w600 text-white-op">
                                Jose Parker · 16 min
                            </p>
                        </div>
                    </a>
                </div>
                <div className="col-md-6 col-xl-4">
                    <a className="block bg-image d-flex flex-column" style={{ backgroundImage: "url('/media/photos/photo34.jpg')" }} href="javascript:void(0)">
                        <div className="block-content bg-black-op flex-grow-1">
                            <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                                <p>
                                    <span className="badge badge-info font-w700 p-2 text-uppercase">
                                        Story
                                    </span>
                                </p>
                                <p className="font-size-sm">
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-eye text-white-50"></i> 6.2k
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-heart text-white-50"></i> 485
                                    </span>
                                    <span className="text-white font-w600 mr-5">
                                        <i className="fa fa-fw fa-comments text-white-50"></i> 92
                                    </span>
                                </p>
                            </div>
                            <h5 className="text-white font-w700 mb-5 mt-100">
                                How the e-waste will impact the environment
                            </h5>
                            <p className="font-w600 text-white-op">
                                Jose Parker · 16 min
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="bg-primary-lighter">
            <div className="content content-top content-full text-center">
                <img src="/media/background/home3.png" alt="" className="w-100" />
            </div>
        </div>
    </React.Fragment >
}

export default Home
