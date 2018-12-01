import React from 'react';
import {
    PageTemplate,
    Header
} from 'components';
import OverviewPanelContainer from 'containers/OverviewPanelContainer';
import DetailsPanelContainer from 'containers/DetailsPanelContainer';

const DashboardPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            responsive
        >
            <OverviewPanelContainer />
            <DetailsPanelContainer />
        </PageTemplate>
    );
};

export default DashboardPage;