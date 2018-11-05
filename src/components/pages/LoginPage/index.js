import React from 'react';
import { PageTemplate, Header, ContentDivisor, WallpaperBackground, Block, LoginBanner } from 'components';

const LoginPage = () => {
    return (
        <PageTemplate
            header={<Header/>}
            background={
                <WallpaperBackground>
                    <ContentDivisor shade='left'/>
                </WallpaperBackground>
            }
            isFullScreen responsive>
            <ContentDivisor
                leftChild={
                    <LoginBanner />
                }
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