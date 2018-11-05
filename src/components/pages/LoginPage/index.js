import React from 'react';
import { PageTemplate, Header, ContentDivisor, GradientBackground, Block } from 'components';

const LoginPage = () => {
    return (
        <PageTemplate header={<Header/>} isFullScreen>
            <GradientBackground>
                <ContentDivisor
                    leftChild={
                        <div></div>
                    }
                    rightChild={
                        <Block roundCorner shadow>
                            Some Text
                        </Block>
                    }
                    shade='left'
                />
            </GradientBackground>
        </PageTemplate>
    );
};

export default LoginPage;