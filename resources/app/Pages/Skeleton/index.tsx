import React, { useEffect, useState } from 'react'

interface SkeletonProps {
}

const Skeleton: React.FunctionComponent<SkeletonProps> = (props) => {
    const [value, setvalue] = useState<any>();

    useEffect(() => {}, []);

    return <React.Fragment>
    </React.Fragment>
}

export default Skeleton
