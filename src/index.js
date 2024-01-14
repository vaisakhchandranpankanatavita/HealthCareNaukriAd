/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import config from './amplifyconfiguration.json';
import { Authenticator } from '@aws-amplify/ui-react';
// Soft UI Dashboard React Context Provider
import { SoftUIControllerProvider } from "context";

Amplify.configure(config);

const AppWithAuth =  () => (<Authenticator signUpAttributes={[
  'name',
  'email',
  'phone_number'
]}><App/></Authenticator>);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <AppWithAuth />
    </SoftUIControllerProvider>
  </BrowserRouter>
);
