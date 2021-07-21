/*
 * @Author: JayShen
 * @Date: 2021-02-03 13:12:00
 * @LastEditors: JayShen
 * @LastEditTime: 2021-02-03 13:57:51
 * @Description: 
 */
import React from "react";
import { Route, Redirect } from "react-router-dom";
//获取token
import { getToken } from "../../utils/session";

const PrivateRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={
        (routePrpos) =>
          !getToken() ? <Component {...routePrpos} /> : <Redirect to="/" /> //判断token，是否重定向到登录页
      }
    />
  );
};

export default PrivateRouter;
