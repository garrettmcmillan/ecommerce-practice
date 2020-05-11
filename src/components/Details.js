import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {
                        id, 
                        featured, 
                        img, 
                        info, 
                        price, 
                        title,
                        inCart
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-green my-5">
                                    <h1>
                                        {title}
                                    </h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 d-flex">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3">
                                <div className="d-flex justify-content-between">
                                    <h4 className="align-self-center text-title text-green mt-3 mb-2 text-capitalize">
                                        {featured}
                                    </h4>
                                    <h4 className="text-green font-italic mt-3 mb-2">
                                        <span className="mr-1">${price}</span>
                                    </h4>
                                </div>
                                <hr />
                                    <p className="text-center text-green">
                                        {info}
                                    </p>
                                    {/* buttons */}
                                    <div className="d-flex justify-content-center">
                                        <Link to="/aesthetic">
                                            <ButtonContainer btn >
                                                back to aesthetic
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                        disabled={ inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        } }
                                        >

                                            {inCart ? 'inCart' : ( <p className="mb-0"> load up <i className="fas fa-truck-monster" /> </p> )} 
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
