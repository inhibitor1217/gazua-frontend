import React from 'react';
import { PageTemplate, ParallaxBackground, Header } from 'components';

const LandingPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            responsive
        >
            Landing Page!
        </PageTemplate>
    );
};

export default LandingPage;