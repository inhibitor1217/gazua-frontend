import React from 'react';
import {
    PageTemplate,
    WallpaperBackground,
    Header, LandingBanner,
    AbbrInfoBox,
    Block
} from 'components';
import Wallpaper from 'styles/static/images/parallax_background_full.png';

const LandingPage = () => {
    const tempData = {
        currencyAbbr: 'BTC',
        timestamp: 1543055144167,
        last: 141150,
        bid: 141150,
        ask: 141400,
        low: 137300,
        high: 147150,
        volume: 7816.903172327426,
        change: -1600,
        changePercent: -1.12
    };

    return (
        <PageTemplate
            header={<Header />}
            background={<WallpaperBackground background={Wallpaper} expandHeight/>}
            responsive
        >
            <LandingBanner />
            <Block dark>
                <AbbrInfoBox dark data={tempData}/>
            </Block>
        </PageTemplate>
    );
};

export default LandingPage;