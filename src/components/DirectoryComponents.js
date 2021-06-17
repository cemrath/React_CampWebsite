import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    // class components that hold "local state" always consist of a "constructor method".
    // a "constructor method" used in React components must always include a "props" argument.
    // a "constructor method" used in React components must always have "super(props)" as its first line.
    // a constructor method is not always required in a react component.
    constructor(props){
        super(props);
        this.state = {
            selectedCampsite: null
        };
    }

    // method to change/declate the state of constructor when a campsite is selected
    onCampsiteSelect(campsite){
        // NEVER use an assigment operator to update the state directly. 
        // THE WRONG WAY => "this.state.selectedCampsite = campsite;"
        // To change a state outside of the constructor, always use the "setState method" as below. This allows React to make updates to the DOM propoerly. This is what makes React a declarative VS an imperative library.
        this.setState({selectedCampsite: campsite});
    }

    // method to render the selected campsite
    renderSelectedCampsite(campsite){
        if(campsite) {
            return(
                <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                     <CardTitle>{campsite.name}</CardTitle>
                     <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
            );
        }
        return<div />;
    }


    // every react compoment must return() one react element. Though that element may have multiple child elements. the return() is placed inside of a render() method.
    render(){
        // "this.props.campsites" is used to remotely access the parent compoment App.js local state. Otherwise if the state was local to this component, we would just this "this.state.campsites"
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    {/* When someone clicks on the card it becomes the selected campsite in the local state */}
                    <Card onClick={()=> this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} /  >
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        })

            // This is the final return that sends data back to the parent component.  
            //Note how all of the other returns just shares data locally. 
            //Also note that this first top level return inside of the render method.
        
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Directory;