import React, { useEffect, useState } from 'react'

interface ContactProps {
}

const Contact: React.FunctionComponent<ContactProps> = (props) => {
    const [value, setvalue] = useState<any>();

    useEffect(() => { }, []);

    return <React.Fragment>
        <div className="bg-primary-lighter">
            <div className="content content-top content-full text-center">
                <div className="py-50">
                    <h1 className="h2 font-w700 m-10 text-primary-dark">Get In Touch</h1>
                    <h2 className="h4 font-w400 text-primary-dark">If you have a question or need help with pick up or recycling services, here’s how to reach us.</h2>
                </div>
            </div>
        </div>
        {/* <!-- Blog and Sidebar --> */}
        <div className="content">
            <div className="row items-push py-30">
                <div className="col-xl-8">
                    <div className="mb-50">
                        <h3>Contact Us</h3>
                        <form className="js-validation-be-contact">
                            <div className="form-group row">
                                <div className="col-12">
                                    <label htmlFor="be-contact-name">Name</label>
                                    <input type="text" className="form-control form-control-lg" id="be-contact-name" name="be-contact-name" placeholder="Enter your name.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12" htmlFor="be-contact-email">Email</label>
                                <div className="col-12">
                                    <input type="email" className="form-control form-control-lg" id="be-contact-email" name="be-contact-email" placeholder="Enter your email.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12" htmlFor="be-contact-email">Address</label>
                                <div className="col-12">
                                    <input type="text" className="form-control form-control-lg" id="be-contact-email" name="be-contact-email" placeholder="Enter your address.." />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-12" htmlFor="be-contact-message">Message</label>
                                <div className="col-12">
                                    <textarea className="form-control form-control-lg" id="be-contact-message" name="be-contact-message" rows={10} placeholder="Enter your message.."></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-hero btn-alt-primary min-width-175">
                                        <i className="fa fa-send mr-5"></i> Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* <!-- END Posts --> */}

                {/* <!-- Sidebar --> */}
                <div className="col-xl-4 px-50">
                    <h3>Locations</h3>
                    <div className="card my-30">
                        <div className="card-body">
                            <h3>Location 1</h3>
                            <p><i className="font-size-lg fa fa-map-marker mr-1"></i>  Town Hall House
                                Level 2, 456 Kent Street
                                Sydney 2000</p>
                            <p><i className="font-size-lg fa fa-phone mr-1 text-bold"></i>  0123456789</p>
                            <span><i className="font-size-lg fa fa-envelope mr-1 text-bold"></i>  test@example.com</span>
                        </div>
                    </div>
                    <div className="card my-30">
                        <div className="card-body">
                            <h3>Location 2</h3>
                            <p><i className="font-size-lg fa fa-map-marker mr-1"></i>  Town Hall House
                                Level 2, 456 Kent Street
                                Sydney 2000</p>
                            <p><i className="font-size-lg fa fa-phone mr-1 text-bold"></i>  0123456789</p>
                            <span><i className="font-size-lg fa fa-envelope mr-1 text-bold"></i>  test@example.com</span>
                        </div>
                    </div>
                    <div className="card my-30">
                        <div className="card-body">
                            <h3>Location 3</h3>
                            <p><i className="font-size-lg fa fa-map-marker mr-1"></i>  Town Hall House
                                Level 2, 456 Kent Street
                                Sydney 2000</p>
                            <p><i className="font-size-lg fa fa-phone mr-1 text-bold"></i>  0123456789</p>
                            <span><i className="font-size-lg fa fa-envelope mr-1 text-bold"></i>  test@example.com</span>
                        </div>
                    </div>
                </div>
                {/* <!-- END Sidebar --> */}
            </div>
        </div>
    </React.Fragment>
}

export default Contact
