import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom';


export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-8 mx-auto col-md-6 col lg-4 text-center text-capitalize p-5">
                                        <h4 className="logo-title" >item loaded</h4>
                                        <img src={img} className="img-fluid " alt="product" />
                                        <h5 className="text-green">{title}</h5>
                                        <h5 className="text-green font-italic">${price}</h5>
                                        <Link to="/products">
                                            <ButtonContainer btn onClick={() => {
                                                closeModal();
                                            }}>
                                                back to aesthetic
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/truckload">
                                            <ButtonContainer cart onClick={() => {
                                                closeModal();
                                            }}>
                                                my truckload
                                                <span className=" ml-2">
                                                    <i className="fas fa-truck-monster" />
                                                </span> 
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                        )
                    }
                    return
                }}
            </ProductConsumer>
        )
    }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
        #modal {
            background: var(--mainWhite);
        }
`;