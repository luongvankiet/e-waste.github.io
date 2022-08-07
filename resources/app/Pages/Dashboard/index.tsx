import React from 'react';
import { DataTable, Breadcrumb } from '../../Components';

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
        <Breadcrumb />
        <DataTable/>
    </React.Fragment>
}

export default Dashboard
