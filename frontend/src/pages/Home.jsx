import * as React from 'react';
import AppFooter from '../views/AppFooter';
import AppMainHome from '../views/AppMainHome';
import AppAppBar from '../views/AppAppBar';
import withRoot from '../withRoot';
function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AppMainHome/>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);