import * as React from 'react';
import AppFooter from '../views/AppFooter';
import ProductHero from '../views/ProductHero';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);