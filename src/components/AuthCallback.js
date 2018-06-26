import React from 'react';
import PropTypes from 'prop-types';
import Auth0 from 'auth0-js';
import ShowLoadingScreen from './ShowLoadingScreen';
import auth from '../utils/auth';

class AuthCallback extends React.Component {

  componentDidMount() {
    const { router } = this.props;
    const auth0 = new Auth0.WebAuth(lore.config.auth0);

    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        auth.saveToken(authResult.idToken);
        router.push('/');
      } else if (err) {
        console.log(err);
        alert('An error occurred. See the console for more information.');
      }
    });
  }

  render() {
    return (
      <ShowLoadingScreen/>
    );
  }

}

AuthCallback.propTypes = {
  router: PropTypes.object.isRequired
};

export default AuthCallback;