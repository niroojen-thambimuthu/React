import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class Dishdetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {

    //     };
    // }

    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
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
                        <p> -- {temp.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(temp.date)))} </p>
                    </li>
                );
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentTemp}
                    </ul>
                </div>
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
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }

}

export default Dishdetail;