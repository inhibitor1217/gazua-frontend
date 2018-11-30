import React from 'react';
import {
    PageTemplate,
    Header,
    DetailsPanel
} from 'components';
import OverviewPanelContainer from 'containers/OverviewPanelContainer';

const DashboardPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            responsive
        >
            <OverviewPanelContainer />
            <DetailsPanel />
        </PageTemplate>
    );
};

export default DashboardPage;