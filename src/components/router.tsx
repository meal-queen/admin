import { FC, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import Employee from '../pages/employee';
import axios from 'axios';
import { getCookie } from '../utils/cookies';
import Login from '../pages/login';
import Restaurant from '../pages/restaurant';

const Routers: FC = () => {
  const location = useLocation();
  const [user, setUser] = useState();

  useEffect(() => {
    axios(import.meta.env.VITE_BACKEND + '/auth/@me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getCookie('auth_token')}`,
      },
    })
      .then((res) => {
        setUser(res.data.data);
        if (location.pathname.startsWith('/auth')) window.location.href = '/';
      })
      .catch((err) => {
        if (!location.pathname.startsWith('/auth'))
          window.location.href = '/auth/login';
      });
  }, []);

  return (
    <Routes location={location} key={location.key}>
      {user == null ? (
        <>
          {/* 로그인 안되있는 사람 */}
          <Route path="/auth/login" element={<Login />} />
        </>
      ) : (
        <>
          {/* 로그인 되있는 사람 */}
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<Home />} />
          <Route path="/employee/" element={<Employee />} />
          <Route path="/employee/:page" element={<Employee />} />
          <Route path="/restaurant/" element={<Restaurant />} />
          <Route path="/restaurant/:page" element={<Restaurant />} />
        </>
      )}
    </Routes>
  );
};

export default Routers;
