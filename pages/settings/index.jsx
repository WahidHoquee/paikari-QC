import React, { useState, useEffect } from 'react';
import { getSession, useSession } from 'next-auth/client';
import Axios from 'axios';

import ContainerDefault from '~/components/layouts/ContainerDefault';
import FormAccountSettings from '~/components/shared/forms/FormAccountSettings';
import HeaderDashboard from '~/components/shared/headers/HeaderDashboard';
import ProfileInformation from '~/components/Settings/ProfileInformation';

import { connect, useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';

const SettingsPage = () => {
  const [session] = useSession();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  const [settingsInfo, setSettingsInfo] = useState({});
  const [categories, setCategories] = useState({});

  console.log(settingsInfo);
  useEffect(async () => {
    const settingsInfo = await Axios.post(
      'http://localhost:4000/qc/profile/settings',
      {
        userId: session.user.name,
      },
    );
    const categories = settingsInfo.data.categories.map((category) => ({
      key: category.CATID,
      category: category.CATID,
      price: category.Price,
    }));
    setSettingsInfo(settingsInfo.data);
    setCategories(categories);
  }, []);

  return (
    <ContainerDefault title="Settings">
      <HeaderDashboard title="Settings" description="Martfury Settings" />
      <section className="ps-dashboard ps-items-listing">
        <div className="ps-section__left">
          <section className="ps-card">
            <div className="ps-card__header">
              <h4>Account Settings</h4>
            </div>
            <div className="ps-card__content">
              <FormAccountSettings
                categories={categories}
                setCategories={setCategories}
              />
            </div>
          </section>
        </div>
        <div className="ps-section__right">
          <ProfileInformation settingsInfo={settingsInfo} />
        </div>
      </section>
    </ContainerDefault>
  );
};
export default connect((state) => state.app)(SettingsPage);

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
