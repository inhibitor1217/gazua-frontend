import React from 'react';
import { PageTemplate, Header, WallpaperBackground, RegisterModal } from 'components';

const RegisterPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={
                <WallpaperBackground />
            }
            responsive>
            <RegisterModal />
        </PageTemplate>
    );
};

export default RegisterPage;