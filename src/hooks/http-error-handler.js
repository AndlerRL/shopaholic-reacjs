import { useState, useEffect } from 'react';

export default httpClient => {
  const [error, setError] = useState(null);
  const reqInterceptor = httpClient.interceptors.request.use(req => {
    setError(null);
    return req;
  })
  const resInterceptor = httpClient.interceptors.response.use(res => res, err => {
    setError(err);
  })

  useEffect(() => {
    return () => {
      httpClient.interceptors.request.eject(reqInterceptor);
      httpClient.interceptors.response.eject(resInterceptor);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const errorConfirmedHandler = (e, reason) => {
    if (reason === 'clickaway')
      return;

    setError(null);
  }

  return [error, errorConfirmedHandler];
}