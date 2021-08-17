import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Money from './views/money';
import Statistics from './views/statistics';
import Tags from './views/tag';
import NoMatch from './views/noMatch';
import styled from 'styled-components';
import {TagEdit} from './views/tagEdit';

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags/>
          </Route>
          <Route exact path="/tags/:id">
            <TagEdit/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;
