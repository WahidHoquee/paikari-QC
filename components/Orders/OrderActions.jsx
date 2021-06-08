import React from 'react';
import { Dropdown, Menu } from 'antd';

const OrderActions = () => {
    const menuView = (
        <Menu>
            <Menu.Item key={0}>
                <a className="dropdown-item" href="#">
                    <i className="icon-pencil mr-2"></i>
                    Mark as Paid
                </a>
            </Menu.Item>
            <Menu.Item key={0}>
                <a className="dropdown-item" href="#">
                    <i className="icon-trash2 mr-2"></i>
                    Process Order
                </a>
            </Menu.Item>
            <Menu.Item key={0}>
                <a className="dropdown-item" href="#">
                    <i className="icon-trash2 mr-2"></i>
                    Reject Order
                </a>
            </Menu.Item>
        </Menu>
    );
    return (
        <Dropdown overlay={menuView} className="ps-dropdown">
            <a
                onClick={(e) => e.preventDefault()}
                className="ps-dropdown__toggle">
                <i className="icon-ellipsis"></i>
            </a>
        </Dropdown>
    );
};

export default OrderActions;
