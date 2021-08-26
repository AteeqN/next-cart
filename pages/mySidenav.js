import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } from '../redux/cart.slice';
// import styles from '../styles/CartPage.module.css';
// import styles from '../styles/NewCart.module.css'
// import styles from '../styles/carts.module.scss'
// import styles from '../styles/cartbar.module.css'

  const CartPage2 = (props) => {  
    // if(props.display){
    
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const GetTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    };
    
    // console.log('hello')
    return (
    
      //===============================================================
        
        // <div id={styles.container}>
        // <div>
        <div id="cartcontainer">
            {cart.length === 0 ? (
                <h1></h1>
                ) : (
                <>
                    {cart.map((item) => (
                        
                        // <form action="?sbsc-ajax=update_cart" method="post" className="cart ajaxcart">
                        <div className="ajaxcart__inner" key={item.id}>
                            <div className="ajaxcart__product">
                                <div className="ajaxcart row">
                                    <div className="grid__image col-3">
                                        <a href="https://www.lifecellskin.com/product/anti-aging-treatment/" className="ajaxcart__product-image">
                                    
                                            {/* <img width="448" height="1168" src="/wp-content/uploads/2016/10/LifeCell_Silos-34@2x.png" class="attachment-woocommerce_single size-woocommerce_single" alt="" loading="lazy" /> */}
                                            <Image src={item.images[2].image} alt="" height="120px" width="63px"/>
                                        </a>
                                    </div>
                                    <div className="grid_content col-9">
                                        <p className="product-title">
                                            <a href="https://www.lifecellskin.com/product/anti-aging-treatment/">{item.title}</a>
                                        </p>
                                        <p className="product-price">Price: <span className="money" data-currency-usd="" data-currency=""><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.price}</bdi></span></span></p>
                                        <div className="display-table">
                                            <div className="display-table-cell">
                                                <div className="ajaxcart__qty">

                                                    {/* <button type="button" className="ajax-qty__adjust js-qty__adjust--minus quantity-increment"onClick={addInput}><span>−</span></button>
                                                    { arr.map((inc, i) => {
                                                            return(
                                                            <input type="text" 
                                                            className="js-qty__num input-text qty text" 
                                                            value={inc.value} 
                                                            min="0" 
                                                            max="" 
                                                            size="4" 
                                                            title="Qty" 
                                                            pattern="[0-9]*" 
                                                            name="cart[c7e1249ffc03eb9ded908c236bd1996d][qty]" 
                                                            data-productid="87" 
                                                            data-product_sku="LCE127" 
                                                            data-variationid="0" 
                                                            id={i}  
                                                            onChange={handleChange}
                                                            type={inc.type}
                                                            />
                                                            )
                                                        })}
                                                        <button type="button" className="ajax-qty__adjust js-qty__adjust--plus quantity-increment" onClick={() => dispatch(incrementQuantity(item.id))}><span>+</span></button> */}

                                                    <div className="row">
                                                        <div>
                                                            <button type="button" className="ajax-qty__adjust js-qty__adjust--minus quantity-increment" onClick={() => dispatch(decrementQuantity(item.id))}><span>−</span></button>
                                                        </div>
                                                        <div className="col-2">
                                                            <p style={{lineHeight: "40px"}}>{item.quantity}</p>
                                                        </div>
                                                        <div >
                                                            <button type="button" className="ajax-qty__adjust js-qty__adjust--plus quantity-increment" onClick={() => dispatch(incrementQuantity(item.id))}><span>+</span></button>
                                                        </div>
                                                        <div className="col-6"></div><hr />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                
                    {/* </form> */}
                </>
            )}
        
            <div className="ajaxcart__footer">
                <div className="totl">
                    <h6> Subtotal:</h6>
                    <div >  </div>
                    <div >  </div>
                    <div >  </div>
                    <div >  </div>
                    {/* {cart.map((item) => (  
                      <h6> $ {item.quantity * item.price} </h6>
                    ))} */}
                    
                    <h6>$ {GetTotalPrice()} USD</h6>
                </div>
                
                <div className="t-last">
                    <h6> Shipping calculated at check out</h6>
                    <button type="button" className="btn btn-chk">Checkout →</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage2;