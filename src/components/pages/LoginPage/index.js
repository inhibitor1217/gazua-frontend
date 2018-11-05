import React from 'react';
import { PageTemplate, Header, ContentDivisor, GradientBackground, Block } from 'components';

const LoginPage = () => {
    return (
        <PageTemplate
            header={<Header/>}
            background={
                <GradientBackground>
                    <ContentDivisor shade='left'/>
                </GradientBackground>
            }
            isFullScreen responsive>
            <ContentDivisor
                rightChild={
                    <Block roundCorner shadow>
                        Content
                    </Block>
                }
            />
        </PageTemplate>
    );
};

export default LoginPage;