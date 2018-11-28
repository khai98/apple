import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from '../containers/home/Home';
import Login from '../containers/user/login/Login';
import Register from '../containers/user/register';
import ActiveUser from '../containers/user/active_user';
import ListQuotes from '../Quote'

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/dang-nhap.html' component={Login} />
                <Route exact path='/dang-ky.html' component={Register} />
                <PrivateRoute exact path='/kich-hoat-tai-khoan.html' component={ActiveUser} />
                <PrivateRoute exact path='/list-quote' component={ListQuotes} />
                <Redirect from="/" to="/" />
            </Switch>
        );
    }
}

export default App;