import React from 'react';
import Media from 'react-media';
import { PageTemplate, Header, ContentDivisor, WallpaperBackground, LoginModal } from 'components';
import Wallpaper from 'styles/static/images/background.jpg';

const LoginPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={
                <WallpaperBackground background={Wallpaper} expandHeight>
                    <Media query="(max-width: 1000px)">
                        { matches => !matches && <ContentDivisor shade='left'/> }
                    </Media>
                </WallpaperBackground>
            }
            responsive>
            <LoginModal />
        </PageTemplate>
    );
};

export default LoginPage;