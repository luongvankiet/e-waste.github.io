import React from 'react'

interface PageContentHeaderProps {
    title?: string;
}

const PageContentHeader: React.FunctionComponent<PageContentHeaderProps> = (props) => {
    return <React.Fragment>
        <div className="bg-body-light">
            <div className="bg-pattern">
                <div className="content text-center">
                    <div className="pt-20 pb-20">
                        <h1 className="font-w700 mb-10">{props.title}</h1>
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
}

export default PageContentHeader
