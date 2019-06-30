import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "../components/Header";
import StreamShow from "../components/streams/StreamShow";
import StreamCreate from "../components/streams/StreamCreate";
import StreamDelete from "../components/streams/StreamDelete";
import StreamEdit from "../components/streams/StreamEdit";
import StreamList from "../components/streams/StreamList";

import history from "../history";

const App = props => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Route path="/" component={Header} />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </Router>
    </div>
  );
};

export default App;
