import React from "react";
import { ThemeProvider } from "styled-components";
// import { ToastContainer } from 'react-toastify';
import Routes from "~/routes";
// import "~/styles/bootstrap.scss";
import Global from "~/styles/global";
import Theme from "~/styles/variables";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      {/* <ToastContainer /> */}
      <Routes />
    </ThemeProvider>
  );
};
