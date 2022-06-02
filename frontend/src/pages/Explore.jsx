import * as React from 'react';
import withRoot from '../withRoot';
import AppMainExplore from '../views/AppMainExplore';

function Explore() {
  return (
    <React.Fragment>
      <AppMainExplore/>
    </React.Fragment>
  );
}

export default withRoot(Explore);