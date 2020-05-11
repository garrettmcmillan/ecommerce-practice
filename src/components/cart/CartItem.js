import React from 'react'

export default function CartItem({ item, value }) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2 img-div">
                <img src={img} className="img-fluid" alt="product" />
            </div>
            <div className="col-10 mx-auto col-lg-2 text-green">
                {title}
            </div>
            <div className="col-10 mx-auto col-lg-2 text-green font-italic">
                ${price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div >
                        <span className="btn btn-cart btn-sharp mx-1 text-green" onClick={() => decrement(id)}><i className="fas fa-minus"/>
                        </span>
                        <span className="btn btn-cart mx-1 text-green">
                            {count}
                        </span>
                        <span className="btn btn-cart btn-sharp mx-1 text-green" onClick={() => increment(id)}><i className="fas fa-plus"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-green">
                <span className="cart-icon" onClick={() => removeItem(id)}>
                        <i className="fas fa-dumpster-fire"></i>
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2 text-green">
                <span className="text-green"> truckload total: </span>
                <span className="font-italic">${total}</span>
            </div>


        </div>
        

    
    )
}
