import * as React from 'react';
import AppFooter from '../views/AppFooter';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
import AppMainExplore from '../views/AppMainExplore';

function Explore() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AppMainExplore/>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Explore);