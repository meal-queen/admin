import { FC } from 'react';
import loginStyle from './login.module.css';

const Login: FC = () => {
  return (
    <div className={loginStyle.loginWarp}>
      <div className={loginStyle.titleWarp}>
        <div className={loginStyle.titleText}>Login</div>
      </div>
      <div className={loginStyle.idInputWarp}>
        <div className={loginStyle.idWarp}>
          <input className={loginStyle.idInput} placeholder="ID"></input>
        </div>
      </div>
    </div>
  );
};

export default Login;
