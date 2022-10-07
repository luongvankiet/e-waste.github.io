import React from 'react'

interface BreadcrumbProps {
    items: BreadcrumbItemProps[];
    children?: any;
}

interface BreadcrumbItemProps {
    name?: string;
    active?: boolean;
    link?: string;
}

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    return <React.Fragment>
        <div className="bg-white border-b">
            <div className="content py-5 text-center">
                <nav className="breadcrumb bg-white mb-0">
                    {props.items.map(item => {
                        if (!item.active) {
                            return <a className="breadcrumb-item" href={item.link ?? '/admin'}>{item.name}</a>
                        }
                        return <span className="breadcrumb-item active">{item.name}</span>
                    })}
                </nav>
            </div>
        </div>
    </React.Fragment>
}

export default Breadcrumb
