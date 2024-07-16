import AuthLayout from '../../layout/AuthLayout.tsx';

import logo from '@images/logo1.png';
import logo1 from '@images/auth/login1.png';
import React from 'react';
import { useAuth } from '../../utils/AuthProvider.tsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login('1111');
    navigate('/');
  };

  return (
    <AuthLayout>
      <div className="mx-3 mx-lg-0">
        <div className="card my-5 col-xl-9 col-xxl-8 mx-auto rounded-4 overflow-hidden p-4">
          <div className="row g-4">
            <div className="col-lg-6 d-flex align-items-center">
              <div className="card-body">
                <img src={logo} className="mb-4" width="145" alt="" />
                <h4 className="fw-bold">Bienvenido</h4>
                <p className="mb-0">Ingrese los datos de su cuenta</p>

                <div className="form-body mt-4">
                  <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-12">
                      <label htmlFor="inputEmailAddress" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmailAddress"
                        placeholder="jhon@example.com"
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="inputChoosePassword" className="form-label">
                        Password
                      </label>
                      <div className="input-group" id="show_hide_password">
                        <input
                          type="password"
                          className="form-control border-end-0"
                          id="inputChoosePassword"
                          value="12345678"
                          placeholder="Enter Password"
                        />
                        <a href="#" className="input-group-text bg-transparent">
                          <i className="bi bi-eye-slash-fill"></i>
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                          Remember Me
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 text-end">
                      {' '}
                      <a href="auth-boxed-forgot-password.html">Forgot Password ?</a>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-flex d-none">
              <div className="p-3 rounded-4 w-100 d-flex align-items-center justify-content-center bg-light">
                <img src={logo1} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
