import React, { useEffect } from 'react';
import { getSession } from 'next-auth/client';

import ContainerDefault from '~/components/layouts/ContainerDefault';
import TableCategoryItems from '~/components/shared/tables/TableCategoryItems';
import Pagination from '~/components/elements/basic/Pagination';
import FormCreateCategory from '~/components/shared/forms/FormCreateCategory';
import FormSearchSimple from '~/components/shared/forms/FormSearchSimple';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);
  return (
    <ContainerDefault>
      <HeaderDashboard
        title="Categories"
        description="Martfury Category Listing"
      />
      <section className="ps-dashboard ps-items-listing">
        <div className="ps-section__left">
          <div className="ps-section__header">
            <FormSearchSimple />
          </div>
          <div className="ps-section__content">
            <TableCategoryItems />
            <div className="ps-section__footer">
              <p>Show 5 in 30 items.</p>
              <Pagination />
            </div>
          </div>
        </div>
        <div className="ps-section__right">
          <FormCreateCategory />
        </div>
      </section>
    </ContainerDefault>
  );
};

export default connect((state) => state.app)(CategoriesPage);
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
