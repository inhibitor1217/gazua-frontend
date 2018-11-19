import React from 'react';
import { PageTemplate, Header, WallpaperBackground } from 'components';
import RegisterModalContainer from 'containers/RegisterModalContainer';
import Wallpaper from 'styles/static/images/background.jpg';

const RegisterPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={
                <WallpaperBackground background={Wallpaper}/>
            }
            responsive>
            <RegisterModalContainer />
        </PageTemplate>
    );
};

export default RegisterPage;