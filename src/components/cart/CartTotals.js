import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';


export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right cart-totals">
                        <Link to="/aesthetic">
                            <ButtonContainer btn className="mx-auto"
                                onClick={() => clearCart()}
                            >
                                    empty load
                            </ButtonContainer>
                        </Link>
                        <h5>
                            <span className="text-green text-title">
                                subtotal: <span className="font-italic">
                                    ${cartSubTotal}
                                    </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-green text-title">
                                tax: <span className="font-italic">
                                    ${cartTax}
                                    </span>
                            </span>
                        </h5>
                        <h5>
                            <span className="text-green text-title">
                                total: <span className="font-italic">
                                    ${cartTotal}</span>
                            </span>
                        </h5>
                    </div>
                    </div>
                </div>
        </React.Fragment>
    )
}
