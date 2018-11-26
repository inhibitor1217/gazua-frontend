import React from 'react';
import {
    PageTemplate,
    Header
} from 'components';
import OverviewPanelContainer from 'containers/OverviewPanelContainer';

const DashboardPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            responsive
        >
            <OverviewPanelContainer />
        </PageTemplate>
    );
};

export default DashboardPage;