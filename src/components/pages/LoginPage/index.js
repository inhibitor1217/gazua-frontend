import React from 'react';
import { PageTemplate, Header, ContentDivisor, GradientBackground, Logo } from 'components';

const LoginPage = () => {
    return (
        <PageTemplate header={<Header/>} isFullScreen>
            <GradientBackground>
                <ContentDivisor
                    leftChild={
                        <div></div>
                    }
                    rightChild={
                        <div></div>
                    }
                    shade='left'
                />
            </GradientBackground>
        </PageTemplate>
    );
};

export default LoginPage;