import React, { useEffect } from 'react';
import { getSession } from 'next-auth/client';

import ContainerDefault from '~/components/layouts/ContainerDefault';
import ReviewTable from '~/components/shared/tables/ReviewTable';
import Pagination from '~/components/elements/basic/Pagination';
import { Select } from 'antd';
import Link from 'next/link';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

import CardDynamic from '~/components/shared/cards/CardDynamic';

const OrdersPage = () => {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(toggleDrawerMenu(false));
    }, []);



    const cards = [
        { cardColor : 'green' ,  cardName : 'Total Projects Done' , CardAmount : '$0' , CardPercent : '0.0%' },
        { cardColor : 'pink' ,  cardName : 'Total Earning' , CardAmount : '$0' , CardPercent : '0.0%' },
        { cardColor : 'yellow' ,  cardName : 'Total Handled Customer' , CardAmount : '$0' , CardPercent : '0.0%' },
    ]


  return (
    <ContainerDefault>
      <HeaderDashboard title="Reviews" description="Reviews Of My Works" />
      <section className="ps-items-listing">
        <div className="">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}
          >
            {cards.map((card, index) => (
              <CardDynamic cardDetails={card} key={index} />
            ))}
          </div>
        </div>
        <div className="ps-section__content">
          <ReviewTable />
        </div>
        <div className="ps-section__footer">
          <p>Show 6 in 30 items.</p>
          <Pagination />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(OrdersPage);

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
