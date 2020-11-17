import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import { Counter } from './components/counter';
import { PageNotFound } from './components/pageNotFound';
import { Navigation } from './components/navigation';

const App: FC = () => (
    <Router>
        <Navigation />
        <Switch>
            <Route exact path="/">
                <Counter />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    </Router>
);

export default App;
