import React, { useState, useEffect } from 'react';
import Axios from 'axios';


const TableCustomerItems = () => {
    const customers = [
        {   
            OrderID : 'MP-156',
            CustomerName: 'Jenny Simmonds',
            phone: '(+921) 211-32-1145',
            review: '5',
            orderDate : '15-11-2014',
            CustomerRecommandation: true,
        },
        {   
            OrderID : 'WP-180',
            CustomerName: 'Ammara Molloy',
            phone: '(+921) 916-971-217',
            review: '3',
            orderDate : '11-10-2018',
            CustomerRecommandation: true,
        },
        {
            OrderID : 'WP-451',
            CustomerName: 'Anisa Forster',
            phone: '(+921) 319-176-113',
            review: '4',
            orderDate : '15-06-2020',
            CustomerRecommandation: true,
        },
        {
            OrderID : 'UP-586',
            CustomerName: 'Hashir Wilson',
            phone: '(+921) 393-112-298',
            review: '2',
            orderDate : '15-11-2014',
            CustomerRecommandation: false,
        },
        {
            OrderID : 'UP-985',
            CustomerName: 'Grover Sampson',
            phone: '(+921) 393-872-137',
            review: '5',
            orderDate : '11-10-2018',
            CustomerRecommandation: true,
        },
        {
            OrderID : 'BP-454',
            CustomerName: 'Nelson Mckeown',
            phone: '(+921) 393-872-998',
            review: '2',
            orderDate : '11-10-2018',
            CustomerRecommandation: false,
        },
        {
            OrderID : 'GP-786',
            CustomerName: 'Zunaira Akhtar',
            phone: '(+921) 393-872-145',
            review: '5',
            orderDate : '15-06-2020',
            CustomerRecommandation: true,
        },
        {
            OrderID : 'UP-906',
            CustomerName: 'Natan Kramer',
            phone: '(+921) 293-872-145',
            review: '1',
            orderDate : '11-10-2018',
            CustomerRecommandation: false,
        },
        {
            OrderID : 'MP-952',
            CustomerName: 'Jesse Pollard',
            phone: '(+921) 291-32-145',
            review: '4',
            orderDate : '15-06-2020',
            CustomerRecommandation: true,
        },
    ];

    const [reviewData, setreviewData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:4000/qc/reviews').then((response) => {
            setreviewData(response.data);
        });
      } , []);

      console.log(reviewData);

    const tableItemsView = reviewData.map((item, index) => {
        let badgeView;

        if (item.CustomerRecommandation) {
            badgeView = <span className="ps-badge success">Recommanded</span>;
        } else {
            badgeView = <span className="ps-badge gray">Not Recommanded</span>;
        }

        return (
            <tr key={index}>
                <td>{index}</td>
                <td>
                    <strong>{item.OrderID}</strong>
                </td>
                <td>{customers[index].CustomerName}</td>
                <td>{customers[index].phone}</td>
                <td>{customers[index].orderDate}</td>
                <td style={{textAlign:'center'}} >{item.Review}</td>
                <td>{badgeView}</td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Phone Number</th>
                        <th>Order Date</th>
                        <th style={{textAlign:'center'}}>OverAll Review (5) </th>
                        <th style={{textAlign:'center'}}>Status</th>
                    </tr>
                </thead>
                <tbody>{tableItemsView}</tbody>
            </table>
        </div>
    );
};

export default TableCustomerItems;
