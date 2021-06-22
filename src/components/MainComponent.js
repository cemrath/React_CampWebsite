import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites';

class Main extends Component {
    // class components that hold "local state" always consist of a "constructor method".
    // a "constructor method" used in React components must always include a "props" argument.
    // a "constructor method" used in React components must always have "super(props)" as its first line.
    // a constructor method is not always required in a react component.
    constructor(props){
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    // method to change/declate the state of constructor when a campsite is selected
    onCampsiteSelect(campsiteId){
        // NEVER use an assigment operator to update the state directly. 
        // THE WRONG WAY => "this.state.selectedCampsite = campsite;"
        // To change a state outside of the constructor, always use the "setState method" as below. This allows React to make updates to the DOM propoerly. This is what makes React a declarative VS an imperative library.
        this.setState({selectedCampsite: campsiteId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfo campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]}/>
            </div>
        );
    }
}

export default Main;