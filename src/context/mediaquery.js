import { createContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  mobile,
  smallTabletStart,
  smallTabletEnd,
  mediumTabletStart,
  mediumTabletEnd,
  largeTabletStart,
  largeTabletEnd,
  laptopStart,
  laptopEnd,
  desktop,
} from '../styles/variables.module.scss';

const MediaQueryContext = createContext();

export const MediaQueryProvider = ({ children }) => {
  const isMobile = useMediaQuery({ query: `(max-width: ${mobile})` });

  // const isSmallTablet = useMediaQuery({
  //   query: `(min-width: ${smallTabletStart} and max-width: ${smallTabletEnd})`,
  // });
  const smallTabletAndBelow = useMediaQuery({
    query: `(max-width: ${smallTabletEnd})`,
  });
  const smallTabletAndAbove = useMediaQuery({
    query: `(min-width: ${smallTabletStart})`,
  });

  const isSmallTablet = useMediaQuery({
    minWidth: `${smallTabletStart}`,
    maxWidth: `${smallTabletEnd}`,
  });

  const isMediumTablet = useMediaQuery({
    minWidth: `${mediumTabletStart}`,
    maxWidth: `${mediumTabletEnd}`,
  });

  const isLargeTablet = useMediaQuery({
    minWidth: `${largeTabletStart}`,
    maxWidth: `${largeTabletEnd}`,
  });

  const isLaptop = useMediaQuery({
    minWidth: `${laptopStart}`,
    maxWidth: `${laptopEnd}`,
  });

  // const isMediumTablet = useMediaQuery({
  //   query: `(min-width: ${mediumTabletStart} and max-width: ${mediumTabletEnd})`,
  // });
  const mediumTabletAndBelow = useMediaQuery({
    query: `(max-width: ${mediumTabletEnd})`,
  });
  const mediumTabletAndAbove = useMediaQuery({
    query: `(min-width: ${mediumTabletStart})`,
  });

  // const isLargeTablet = useMediaQuery({
  //   query: `(min-width: ${largeTabletStart} and max-width: ${largeTabletEnd})`,
  // });
  const largeTabletAndBelow = useMediaQuery({
    query: `(max-width: ${largeTabletEnd})`,
  });
  const largeTabletAndAbove = useMediaQuery({
    query: `(min-width: ${largeTabletStart})`,
  });

  // const isLaptop = useMediaQuery({
  //   query: `(min-width: ${laptopStart} and max-width: ${laptopEnd})`,
  // });
  const laptopAndBelow = useMediaQuery({
    query: `(max-width: ${laptopEnd})`,
  });
  const laptopAndAbove = useMediaQuery({
    query: `(min-width: ${laptopStart})`,
  });

  const isDesktop = useMediaQuery({ query: `(min-width: ${desktop})` });

  return (
    <MediaQueryContext.Provider
      value={{
        isMobile,
        isSmallTablet,
        smallTabletAndBelow,
        smallTabletAndAbove,
        isMediumTablet,
        mediumTabletAndBelow,
        mediumTabletAndAbove,
        isLargeTablet,
        largeTabletAndBelow,
        largeTabletAndAbove,
        isLaptop,
        laptopAndBelow,
        laptopAndAbove,
        isDesktop,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};

export default MediaQueryContext;
