import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';

class Directory extends Component {

    // every react compoment must return() one react element. Though that element may have multiple child elements. the return() is placed inside of a render() method.
    render(){
        // "this.props.campsites" is used to remotely access the parent compoment App.js local state. Otherwise if the state was local to this component, we would just this "this.state.campsites"
        const directory = this.props.campsites.map(campsite => {
            return(
                <div key={campsite.id} className="col-md-5 m-1">
                    {/* When someone clicks on the card it becomes the selected campsite in the local state */}
                    <Card onClick={() => this.props.onClick(campsite.id)}>
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

            </div>
        );
    }
}


export default Directory;