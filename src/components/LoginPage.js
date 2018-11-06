import React from 'react';
import {
    connect
} from 'react-redux';
import {
    startLoginGoogle,
    startLoginFacebook,
    startLoginGithub
} from '../actions/auth';

export const LoginPage = ({
    startLoginGoogle,
    startLoginFacebook,
    startLoginGithub
}) => (
    <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It's time to get your expenses under control.</p>
      <button className="button" onClick={startLoginGoogle}>Login with Google</button>
      <button className="button" onClick={startLoginFacebook}>Login with Facebook</button>
      <button className="button" onClick={startLoginGithub}>Login with Github</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook()),
    startLoginGithub: () => dispatch(startLoginGithub())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);