import React from 'react';
import './App.css';

function createStore() {
    //The store should have four parts.
    //1. The state
    //2. Get the state
    //3. Listen to changes of the state
    //4. Update the state

    let state;
    let listeners = []
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }
    const setState = (value) => {
        state = value
        listeners[0]()
    }
    const getState = () => state
    return {
        setState,
        getState,
        subscribe
    }

}


function App(props) {
    const store = createStore()
    const unsubscribe = store.subscribe(() => {
        console.log('The new state is: ', store.getState())
    })
    store.setState(6)
    store.setState(7)
    store.setState(8)
    store.setState(9)
    store.setState(10)
    unsubscribe()
    return (
        <div className="App">
            App
        </div>
    );
}

export default App;
