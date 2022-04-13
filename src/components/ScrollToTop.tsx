import { ReactNode, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const ScrollToTop = ({ children }: Props) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};

export default ScrollToTop;
