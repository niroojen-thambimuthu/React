import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     };
    // }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(comments) {
        if (comments != null) {

            const commentTemp = comments.map((temp) => {
                return (
                    <li key={temp.id}>
                        <p>{temp.comment}</p>
                        <p> -- {temp.author}, {temp.date} </p>
                    </li>
                );
            });

            return (
                <ul className="list-unstyled">
                    {commentTemp}
                </ul>
            );
        }
        else
            return (
                <div></div>
            );
    }


    render() {
        
        // solution to typeerror null comments
        if (this.props.dish == null) {
            return (<div></div>)
        }

        return (
            <div className="row">
                {/* card dish details */}
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {/* Comments section */}
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }

}

export default Dishdetail;