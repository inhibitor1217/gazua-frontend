import React from 'react';
import { PageTemplate, Header, WallpaperBackground } from 'components';

const RegisterPage = () => {
    return (
        <PageTemplate
            header={<Header />}
            background={
                <WallpaperBackground />
            }
            responsive>
            Register Page!
        </PageTemplate>
    );
};

export default RegisterPage;