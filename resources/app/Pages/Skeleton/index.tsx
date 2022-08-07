import React from 'react'

interface SkeletonProps {
    attribute: string,
}

const Skeleton: React.FunctionComponent<SkeletonProps> = (props) => {
    const {
        attribute
    } = props;

    return <React.Fragment>
        {attribute}
    </React.Fragment>
}

export default Skeleton
