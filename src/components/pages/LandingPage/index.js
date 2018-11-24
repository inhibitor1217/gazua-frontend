import React from 'react';
import {
    PageTemplate,
    WallpaperBackground,
    Header, LandingBanner,
    Block
} from 'components';
import AbbrInfoPanelContainer from 'containers/AbbrInfoPanelContainer';
import Wallpaper from 'styles/static/images/parallax_background_full.png';

const LandingPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={<WallpaperBackground background={Wallpaper} expandHeight/>}
            responsive
        >
            <LandingBanner />
            <Block dark shadow>
                <AbbrInfoPanelContainer dark/>
            </Block>
        </PageTemplate>
    );
};

export default LandingPage;