import React, {memo} from "react";

import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";
import routes from "./router";

import JMAppHeader from '@/components/app-header'

export default memo(function App() {
  return (
    <HashRouter>
      <JMAppHeader></JMAppHeader>
    </HashRouter>
  );
})

