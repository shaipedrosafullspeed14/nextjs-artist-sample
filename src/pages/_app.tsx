import { AppProps } from 'next/app';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import Layout from '@/components/layouts/Layout';

import '../styles/global.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
	const getLayout = (content: React.ReactNode) => <Layout>{content}</Layout>;
  const ignoreRoutes = ['/auth/signin', '/auth/register'];
	const renderContent = () => {
    if (!ignoreRoutes.includes(router.pathname)) {
      return getLayout(<Component {...pageProps} />);
    }

    return <Component {...pageProps} />;
  };
	return (
    <React.Fragment>
      <ChakraProvider>{renderContent()}</ChakraProvider>
    </React.Fragment>
  );
};
export default MyApp;