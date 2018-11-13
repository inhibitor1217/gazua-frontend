import React from 'react';
import { PageTemplate, Header, WallpaperBackground } from 'components';
import RegisterModalContainer from 'containers/RegisterModalContainer';

const RegisterPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={
                <WallpaperBackground />
            }
            responsive>
            <RegisterModalContainer />
        </PageTemplate>
    );
};

export default RegisterPage;