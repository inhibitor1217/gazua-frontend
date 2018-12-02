import React from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';
import { MaterialIcon } from 'components';

const cx = classNames.bind(style);

const PageShifter = ({ numPages, currentPage, handleFirstPage, handleLastPage, handleNextPage, handlePreviousPage }) => {
    return (
        <div className={cx('page-shifter-wrapper')}>
            <div className={cx('page-shifter')}>
                <div onClick={handleFirstPage}>
                    <MaterialIcon md24 dark>arrow_back_ios</MaterialIcon>
                </div>
                <div onClick={handlePreviousPage}>
                    <MaterialIcon md24 dark>arrow_left</MaterialIcon>
                </div>
                <div className={cx('page-small')}>
                    {currentPage > 1 ? currentPage - 1 : ' '}
                </div>
                <div className={cx('page-large')}>
                    {currentPage}
                </div>
                <div className={cx('page-small')}>
                    {currentPage < numPages ? currentPage + 1 : ' '}
                </div>
                <div onClick={handleNextPage}>
                    <MaterialIcon md24 dark>arrow_right</MaterialIcon>
                </div>
                <div onClick={handleLastPage}>
                    <MaterialIcon md24 dark>arrow_forward_ios</MaterialIcon>
                </div>
            </div>
        </div>
    );
};

export default PageShifter;