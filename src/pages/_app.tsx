import '@/styles/tailwind.css';
import 'focus-visible';

import { Layout } from '@/components/Layout/Layout';
import type { AppProps } from 'next/app';

// include the [id] route in the layoutRoutes array
const layoutRoutes = ['/'];

export default function App({ Component, pageProps, router }: AppProps) {
  const showLayout = !layoutRoutes.includes(router.route);

  return (
    <>
      {showLayout ? (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
