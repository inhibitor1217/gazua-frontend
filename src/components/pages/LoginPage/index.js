import React from 'react';
import Media from 'react-media';
import { PageTemplate, Header, ContentDivisor, WallpaperBackground, LoginModal, LoginBanner } from 'components';

const LoginPage = () => {
    return (
        <PageTemplate
            header={<Header/>}
            background={
                <WallpaperBackground>
                    <Media query="(max-width: 1000px)">
                        {
                            matches => matches ? (
                                <div></div>
                            ) : (
                                <ContentDivisor shade='left'/>
                            )
                        }
                    </Media>
                </WallpaperBackground>
            }
            isFullScreen responsive>
            <Media query="(max-width: 1000px)">
                {
                    matches => matches ? (
                        <LoginModal />
                    ) : (
                        <ContentDivisor
                            leftChild={
                                <LoginBanner />
                            }
                            rightChild={
                                <LoginModal />
                            }
                        />
                    )
                }
            </Media>
        </PageTemplate>
    );
};

export default LoginPage;