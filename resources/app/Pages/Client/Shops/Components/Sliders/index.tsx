import React, { useEffect, useState } from 'react'

interface SlidersProps {
}

const Sliders: React.FunctionComponent<SlidersProps> = (props) => {
    const [value, setvalue] = useState<any>();

    useEffect(() => { }, []);

    return <React.Fragment>
        {/* <!-- Slider with inner dots and black arrows --> */}
        <div className="block">
            <div className="block-header block-header-default">
                <h3 className="block-title">Inner Dots &amp; Black Arrows</h3>
            </div>
            <div className="js-slider slick-nav-black slick-dotted-inner slick-dotted-white js-slider-enabled slick-initialized slick-slider slick-dotted" data-dots="true" data-arrows="true">
                <button className="slick-prev slick-arrow" aria-label="Previous" type="button">Previous</button>
                <div className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '3927px', transform: 'translate3d(-561px, 0px, 0px)' }}>
                    <div className="slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1}>
                    <img className="img-fluid" src="/media/photos/photo23.jpg" alt="" />
                </div><div className="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{ width: '561px' }} tabIndex={0} role="tabpanel" id="slick-slide50" aria-describedby="slick-slide-control50">
                        <img className="img-fluid" src="/media/photos/photo21.jpg" alt="" />
                    </div><div className="slick-slide" data-slick-index="1" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1} role="tabpanel" id="slick-slide51" aria-describedby="slick-slide-control51">
                        <img className="img-fluid" src="/media/photos/photo22.jpg" alt="" />
                    </div><div className="slick-slide" data-slick-index="2" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1} role="tabpanel" id="slick-slide52" aria-describedby="slick-slide-control52">
                        <img className="img-fluid" src="/media/photos/photo23.jpg" alt="" />
                    </div><div className="slick-slide slick-cloned" data-slick-index="3" id="" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1}>
                        <img className="img-fluid" src="/media/photos/photo21.jpg" alt="" />
                    </div><div className="slick-slide slick-cloned" data-slick-index="4" id="" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1}>
                        <img className="img-fluid" src="/media/photos/photo22.jpg" alt="" />
                    </div><div className="slick-slide slick-cloned" data-slick-index="5" id="" aria-hidden="true" style={{ width: '561px' }} tabIndex={-1}>
                        <img className="img-fluid" src="/media/photos/photo23.jpg" alt="" />
                    </div></div></div>


                <button className="slick-next slick-arrow" aria-label="Next" type="button">Next</button><ul className="slick-dots" role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control50" aria-controls="slick-slide50" aria-label="1 of 3" tabIndex={0} aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control51" aria-controls="slick-slide51" aria-label="2 of 3" tabIndex={-1}>2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control52" aria-controls="slick-slide52" aria-label="3 of 3" tabIndex={-1}>3</button></li></ul></div>
        </div>
        {/* <!-- END Slider with inner dots and black arrows --> */}
    </React.Fragment>
}

export default Sliders
