import React, { Component } from 'react';
// import { Media } from 'reactstrap'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                // <div key={dish.id} className="col-12 mt-5">
                //     <Media tag="li">
                //         <Media left middle>
                //             <Media object src={dish.image} alt={dish.name} />
                //         </Media>
                //         <Media body className="ml-5">
                //             <Media heading>{dish.name}</Media>
                //             <p>{dish.description}</p>
                //         </Media>
                //     </Media>
                // </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <Dishdetail dish={this.state.selectedDish}/>
            </div>
            // <div className="container">
            //     <div className="row">
            //         <Media list>
            //             {menu}
            //         </Media>
            //     </div>
            // </div>
        );
    }
}

export default Menu;