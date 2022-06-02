import * as React from 'react';
import AppMainHome from '../views/AppMainHome';
import withRoot from '../withRoot';
function Index() {
  return (
    <React.Fragment>
      <AppMainHome/>
    </React.Fragment>
  );
}

export default withRoot(Index);