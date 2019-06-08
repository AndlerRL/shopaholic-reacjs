import React from 'react';

import useHttpErrorHandler from '../../hooks/http-error-handler';
import Snackbar from '../../components/UI/Snackbar/Snackbar';

const withErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, errorConfirmed] = useHttpErrorHandler(axios);

    return (
      <React.Fragment>
        <Snackbar 
          error={true}
          open={error}
          closed={errorConfirmed}
          message={`[ERROR] ${error ? error.message : null}`} />
        <WrappedComponent {...props} />
      </React.Fragment>
    )
  }
}

export default withErrorHandler;