import React, { useEffect } from 'react';

const FacebookLogin = props => {
  useEffect(() => {
    document.addEventListener('FBObjectReady', initFacebookLogin);

    return () => {
      document.removeEventListener('FBObjectReady', initFacebookLogin);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const FB = window.FB;

  const initFacebookLogin = () => {
    if (!FB) return;
    checkLoginStatus();
  }

  const checkLoginStatus = () => {
    if (!FB) return;
    FB.getLoginStatus(facebookLoginHandler);
  }

  const facebookLogin = () => {
    if (!FB) return;

    FB.getLoginStatus(res => {
      if (res.status === 'connected')
        facebookLoginHandler(res);
      else
        FB.login(facebookLoginHandler, { scope: 'public_profile' });
    }, );
  }

  const facebookLoginHandler = res => {
    if (res.status === 'connected') {
      FB.api('/me', userData => {
        let result = {
          ...res,
          user: userData
        };
        props.onLogin(true, result);
      });
    } else 
      props.onLogin(false);
  }

  return (
    <div onClick={facebookLogin}>
      {props.children }
    </div>
  )
}

export default FacebookLogin;