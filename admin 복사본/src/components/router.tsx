import { FC } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/home';
import Company from '../pages/company';
import Login from '../pages/login';

const Routers: FC = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  return (
    <Routes location={location} key={location.key}>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/:name" element={<Company />} />
    </Routes>
  );
};

export default Routers;
