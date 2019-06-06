import React from 'react';

class FacebookLogin extends React.Component {
  componentWillMount() {
    document.addEventListener('FBObjectReady', this.initFacebookLogin);
  }

  componentWillUnmount() {
    document.removeEventListener('FBObjectReady', this.initFacebookLogin);
  }

  initFacebookLogin = () => {
    this.FB = window.FB;
    this.checkLoginStatus();
  }

  checkLoginStatus = () => {
    this.FB.getLoginStatus(this.facebookLoginHandler);
  }

  facebookLogin = () => {
    if (!this.FB) return;

    this.FB.getLoginStatus(res => {
      if (res.status === 'connected')
        this.facebookLoginHandler(res);
      else
        this.FB.login(this.facebookLoginHandler, { scope: 'public_profile' });
    }, );
  }

  facebookLoginHandler = res => {
    if (res.status === 'connected') {
      this.FB.api('/me', userData => {
        let result = {
          ...res,
          user: userData
        };
        this.props.onLogin(true, result);
      });
    } else 
      this.props.onLogin(false);
  }

  render () {
    return (
      <div onClick={this.facebookLogin}>
        { this.props.children }
      </div>
    )
  }
}

export default FacebookLogin;