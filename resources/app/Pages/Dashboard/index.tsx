import React from 'react';
// import { Alert, Breadcrumbs, Button, Card, Carousel, CarouselItem, Input, Textarea } from '../../Components';

interface DashboardProps {
}

interface DashboardComponent extends React.FunctionComponent<DashboardProps> {

}

const Dashboard: DashboardComponent = () => {
    const [Value, setValue] = React.useState<any>(false);

    React.useEffect(() => {
        console.log("abc");
    }, [Value]);

    return <React.Fragment>
        <h1>hello</h1>
    </React.Fragment>
}

export default Dashboard
