
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { getSession } from 'next-auth/client';


import ContainerDefault from '~/components/layouts/ContainerDefault';
import ReportTable from '~/components/shared/tables/ReportTable';
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


    const [reportData, setreportData] = useState([]);
    const [categoryData, setcategoryData] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:4000/qc/reports').then((response) => {
            setreportData(response.data[0])
            setcategoryData(response.data[1])
        });
      } , []);

    return (
        <ContainerDefault>
            <HeaderDashboard
                title="Make Report"
                description="Make QC Report Here"
            />
            <section className="ps-dashboard ps-items-listing">
                <div className="ps-section__left">
                    {/* <div className="ps-section__header">
                        <FormSearchSimple />
                    </div> */}
                    <div className="ps-section__content">

                        <ReportTable reportData={reportData} />

                        <div className="ps-section__footer">
                            <p>Show 5 in 30 items.</p>
                            <Pagination />
                        </div>
                    </div>
                </div>
                <div className="ps-section__right">
                    <FormCreateCategory categoryData={categoryData}/>
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
