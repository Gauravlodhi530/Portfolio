'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const allowedRoutes = ['/', '/services', '/about', '/portfolio', '/contact'];

const FooterControl = () => {
  const pathname = usePathname();

  const isAllowedRoute = allowedRoutes.includes(pathname.toLowerCase());

  if (!isAllowedRoute) {
    // You can also navigate to your custom 404 page
    return (
    null
    );
  }

  return <Footer />;
};

export default FooterControl;
