import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component { 
    
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD21TxnmoXDdiLgbslzw_bAP0bMUp08CjY",
            authDomain: "whatsapp-clone-e518e.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-e518e.firebaseio.com",
            projectId: "whatsapp-clone-e518e",
            storageBucket: "whatsapp-clone-e518e.appspot.com",
            messagingSenderId: "207614406835"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
                <Routes />
            </Provider>
        );
    }
}

export default App;