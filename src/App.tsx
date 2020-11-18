import React, { FC } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { Home } from './pages/home';
import { NotFound } from './pages/notFound';
import { Navigation } from './components/navigation';

const App: FC = () => (
    <Router>
        <Container>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Container>
    </Router>
);

export default App;
