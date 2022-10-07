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
                    <h1 className="h2 font-w700 m-10 text-primary-dark">About Us</h1>
                </div>
            </div>
        </div>
        {/* <!-- Blog and Sidebar --> */}
        <div className="content">
            <div className="row items-push py-30">
                <div className="col-xl-8">
                    <div className="mb-50">
                        <h3>What do we take</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <img src="/media/about/what-we-take-items-2.png" alt="" className="w-100"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                    </div>
                    <hr />

                    <div className="mb-50">
                        <h3>Where does our e-waste go?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <img src="/media/about/what-we-take-items-2.png" alt="" className="w-100"/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo repellat nisi non sapiente illum distinctio eius. Accusantium deleniti, fugit quaerat explicabo neque id quae officiis iusto quis doloribus molestiae optio?</p>
                    </div>
                    <hr />

                </div>

                {/* <!-- END Posts --> */}

                {/* <!-- Sidebar --> */}
                <div className="col-xl-4 px-30">
                    <h3>Latest news</h3>
                    <div className="card my-30">
                        <div className="card-body">
                            <a href="#"><h3>Lorem ipsum, dolor sit amet...</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis nam voluptate commodi labore tempora cupiditate natus culpa dicta maiores, necessitatibus expedita quibusdam, repellendus aliquid mollitia consequuntur? Quas, nobis.</p>
                        </div>
                    </div>
                    <div className="card my-30">
                        <div className="card-body">
                            <a href="#"><h3>Lorem ipsum, dolor sit amet...</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis nam voluptate commodi labore tempora cupiditate natus culpa dicta maiores, necessitatibus expedita quibusdam, repellendus aliquid mollitia consequuntur? Quas, nobis.</p>
                        </div>
                    </div>
                    <div className="card my-30">
                        <div className="card-body">
                            <a href="#"><h3>Lorem ipsum, dolor sit amet...</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis nam voluptate commodi labore tempora cupiditate natus culpa dicta maiores, necessitatibus expedita quibusdam, repellendus aliquid mollitia consequuntur? Quas, nobis.</p>
                        </div>
                    </div>
                    <div className="card my-30">
                        <div className="card-body">
                            <h3>Lorem ipsum, dolor sit amet...</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa excepturi facilis nam voluptate commodi labore tempora cupiditate natus culpa dicta maiores, necessitatibus expedita quibusdam, repellendus aliquid mollitia consequuntur? Quas, nobis.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- END Sidebar --> */}
            </div>
        </div>
    </React.Fragment>
}

export default Contact
