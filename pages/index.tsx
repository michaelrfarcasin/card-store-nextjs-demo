import type { NextPage } from 'next';
import Head from 'next/head';
import { CurrencyProvider } from '../common/context/CurrencyContext';
import Main from '../modules/Main';

const Home: NextPage = () => {
  return (
  <>
    <Head>
      <title>Card store</title>
      <link rel='shortcut icon' href='#' />
    </Head>
    <CurrencyProvider>
      <Main />
    </CurrencyProvider>
  </>
  );
};

export default Home;
