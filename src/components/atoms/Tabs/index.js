import React, { Component } from 'react';
import style from './style.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class Tab extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        const { label, onClick } = this.props;
        onClick(label);
    }
    render() {
        const { onClick, props: { activeTab, label } } = this;
        return (
            <div
                className={cx('tab-list-item', { 'tab-list-active': activeTab === label })}
                onClick={onClick}
            >
                {label}
            </div>
        );
    }
}

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: undefined
        };

        this.onClickTabItem = this.onClickTabItem.bind(this);
    }

    onClickTabItem(tab) {
        this.setState({ activeTab: tab });
    }

    render() {
        const { onClickTabItem, props: { children }, state: { activeTab } } = this;
        return (
            <div className={cx('tabs')}>
                <div className={cx('tab-list')}>
                    {
                        children.map((child) => {
                            const { label } = child.props;
                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    onClick={onClickTabItem}
                                />
                            );
                        })
                    }
                </div>
                <div className={cx('tab-content')}>
                    {
                        children.map((child) => {
                            if (child.props.label !== activeTab) return null;
                            return child;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Tabs;