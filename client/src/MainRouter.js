import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  StreamCreate,
  StreamEdit,
  StreamDelete,
  StreamShow,
} from "./components";
import StreamList from "./components/StreamList";
import { Provider } from "react-redux";
import store from "./store";

const MainRouter = ({ logged, accessToken }) => {
  return (
    <Switch>
      <Provider store={store}>
        <Route
          exact
          path="/"
          component={() => (
            <StreamList logged={logged} accessToken={accessToken} />
          )}
        />
        <Route
          exact
          path="/new"
          component={() => <StreamCreate accessToken={accessToken} />}
        />
        <Route exact path="/edit/:id" component={StreamEdit} />
        <Route exact path="/delete/:id" component={StreamDelete} />
        <Route exact path="/show/:id" component={StreamShow} />
      </Provider>
    </Switch>
  );
};

export default MainRouter;
