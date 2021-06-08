import React from 'react';
import FormHeaderSearch from '~/components/shared/forms/FormHeaderSearch';
import { signOut } from 'next-auth/client';
import { useRouter } from 'next/router';

const HeaderDashboard = ({
  title = 'Dashboard',
  description = 'Everything here',
}) => {
  const router = useRouter();

  const logOutHandler = async (e) => {
    e.preventDefault();
    await signOut();
  };
  return (
    <header className="header--dashboard">
      <div className="header__left">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="header__center">
        <FormHeaderSearch />
      </div>
      <div className="header__right">
        <a className="header__site-link" href="#" onClick={logOutHandler}>
          <span>Log Out</span>
          <i className="icon-exit-right"></i>
        </a>
      </div>
    </header>
  );
};

export default HeaderDashboard;
