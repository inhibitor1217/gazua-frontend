import React from 'react';
import { PageTemplate, WallpaperBackground, Header, LandingBanner } from 'components';
import Wallpaper from 'styles/static/images/parallax_background_full.png';

const LandingPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={<WallpaperBackground background={Wallpaper} expandHeight/>}
            responsive
        >
            <LandingBanner />
        </PageTemplate>
    );
};

export default LandingPage;