import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

import Background from 'styles/static/images/parallax_background.jpg';
import Parallax1 from 'styles/static/images/parallax_background_001.png';
import Parallax2 from 'styles/static/images/parallax_background_002.png';
import Parallax3 from 'styles/static/images/parallax_background_003.png';

const cx = classNames.bind(style);

const ParallaxPageTemplate = ({ header, children }) => {
    return (
        <div className={cx('wrapper')}>
            <header>
                {header}
            </header>
            <div className={cx('content', {
                'has-header': header
            })}>
                <div className={cx('parallax-group')}>
                    <div className={cx('parallax-layer', 'layer-base')}>
                        <div className={cx('layer-content')}>
                            <img src={Parallax1} />
                        </div>
                    </div>
                    <div className={cx('parallax-layer', 'layer-back')}>
                        <div className={cx('layer-content')}>
                            <img src={Parallax2} />
                        </div>
                    </div>
                    <div className={cx('parallax-layer', 'layer-deep')}>
                        <div className={cx('layer-content')}>
                            <img src={Parallax3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParallaxPageTemplate;