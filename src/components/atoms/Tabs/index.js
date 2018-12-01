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
        const { onClick, props: { activeTab, label, tabcomponent = label, customPadding } } = this;
        return (
            <div
                className={cx('tab-list-item', {
                    'tab-list-active': activeTab === label,
                    'tab-list-custom-padding': customPadding
                })}
                onClick={onClick}
            >
                {tabcomponent}
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
        const { onClickTabItem, props: { children, vertical, customPadding }, state: { activeTab } } = this;
        return (
            <div className={cx('tabs', { 'tabs-vertical': vertical })}>
                <div className={cx('tab-list', { 'tabs-vertical': vertical })}>
                    {
                        children.map((child) => {
                            const { label, tabcomponent } = child.props;
                            return (
                                <Tab
                                    activeTab={activeTab}
                                    key={label}
                                    label={label}
                                    tabcomponent={tabcomponent}
                                    customPadding={customPadding}
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
                            return child.props.children;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Tabs;