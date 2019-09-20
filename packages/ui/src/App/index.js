import React, { Component } from 'react';
import Application from 'react-rainbow-components/components/Application';
import Routes from '../routes';
import { Header } from "../components";
import './styles.css';


class App extends Component {
    render() {
        return (
            <Application>
                <div>
                    <Header/>
                    <div className="mainContainer">
                        <Routes />
                    </div>
                </div>
            </Application>
    );
    }
}

App.propTypes = {
};

export default App;