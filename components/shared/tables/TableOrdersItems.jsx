import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';

import { useRouter } from 'next/router';

import { Menu } from 'antd';
import DropdownAction from '~/components/Orders/OrderActions';
import Axios from 'axios';

const TableOrdersItems = () => {
  const router = useRouter();
  const [session] = useSession();

  const [orderItems, setOrderItems] = useState([]);
  console.log(session.user.name);
  useEffect(() => {
    Axios.post(`http://localhost:4000/orders`, {
      userId: session.user.name,
    }).then((response) => {
      setOrderItems(response.data);
    });
  }, []);
  const tableItemsView =
    orderItems.length &&
    orderItems.map((item, index) => {
      let badgeView, fullfillmentView;
      const menuView = (
        <Menu>
          <Menu.Item key={0}>
            <a className="dropdown-item" href="#">
              Edit
            </a>
          </Menu.Item>
          <Menu.Item key={0}>
            <a className="dropdown-item" href="#">
              <i className="icon-t"></i>
              Delete
            </a>
          </Menu.Item>
        </Menu>
      );
      if (item.payment) {
        badgeView = <span className="ps-badge success">Paid</span>;
      } else {
        badgeView = <span className="ps-badge gray">Unpaid</span>;
      }
      switch (item.OrderStatus) {
        case 'processing':
          fullfillmentView = (
            <span className="ps-fullfillment warning">In Progress</span>
          );
          break;
        case 'picked':
          fullfillmentView = (
            <span className="ps-fullfillment danger">Picked</span>
          );
          break;
        default:
          fullfillmentView = (
            <span className="ps-fullfillment success">Pending</span>
          );
          break;
      }
      return (
        <tr
          key={item.OID}
          onClick={(e) =>
            router.push(`orders/order-details/${item.id.substring(1)}`)
          }
        >
          <td>{item.OID}</td>
          <td style={{ color: '#1890ff' }}>
            <strong>{item.CategoryName}</strong>
          </td>
          <td>
            <strong>Seller - 0{index}</strong>
          </td>
          <td>{item.OrderDate}</td>
          <td>{badgeView}</td>
          <td>{fullfillmentView}</td>
          <td>
            <strong>{item.TotalPrice}</strong>
          </td>
          <td>
            <DropdownAction />
          </td>
        </tr>
      );
    });
  return (
    <div className="table-responsive">
      <table className="table ps-table" id="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Seller</th>
            <th>Date</th>
            <th>Payment</th>
            <th>Fullfillment</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{tableItemsView}</tbody>
      </table>
    </div>
  );
};

export default TableOrdersItems;
