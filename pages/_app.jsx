import React, { useEffect } from 'react';
import { Provider } from 'next-auth/client';
import DefaultLayout from '~/components/layouts/DefaultLayout';
import { wrapper } from '~/store/store';
import '~/styles/style.scss';
import '~/styles/global.scss';
import 'antd/dist/antd.min.css';

function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Provider session={pageProps.session}>
        <DefaultLayout children={page} />
      </Provider>
    ));
  useEffect(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
  }, []);
  return getLayout(<Component {...pageProps} />);
}

export default wrapper.withRedux(App);
