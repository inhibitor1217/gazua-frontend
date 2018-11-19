import React from 'react';
import { PageTemplate, WallpaperBackground, Header, Block } from 'components';
import Wallpaper from 'styles/static/images/parallax_background_full.png';

const LandingPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={<WallpaperBackground background={Wallpaper}/>}
        >
            <div>
                <Block shadow>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Block>
            </div>
        </PageTemplate>
    );
};

export default LandingPage;