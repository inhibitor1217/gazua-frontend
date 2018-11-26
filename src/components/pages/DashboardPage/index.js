import React from 'react';
import {
    PageTemplate,
    Header,
    OverviewPanel
} from 'components';

const DashboardPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            responsive
        >
            <OverviewPanel />
        </PageTemplate>
    );
};

export default DashboardPage;