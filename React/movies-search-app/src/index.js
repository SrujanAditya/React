import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './js/components/App';
import MovieDesc from './js/components/MovieDesc';
import store from './js/store/store.js';
//import * as serviceWorker from '../serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/movie/:id" component={MovieDesc}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();