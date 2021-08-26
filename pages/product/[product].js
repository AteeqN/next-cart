import React from "react";
import Image from 'next/image'
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';



function Product({data}) {

    const dispatch = useDispatch();

    function reviews(rating){
        for(var i=0; i < rating;  i++){
           var stars = <div className="str">
                <span className={`fa fa-star ${i >= 0 ? 'checked' :'uncheck'}`}></span>
                <span className={`fa fa-star ${i >= 1 ? 'checked' :'uncheck'}`}></span>
                <span className={`fa fa-star ${i >= 2 ? 'checked' :'uncheck'}`}></span>
                <span className={`fa fa-star ${i >= 3 ? 'checked' :'uncheck'}`}></span>
                <span className={`fa fa-star ${i >= 4 ? 'checked' :'uncheck'}`}></span>
            </div>;
        }
        return stars;
    }

    console.log(data);
    return (
        <div className="shop">
            <div className="whts-new">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="tittle-new">
                                <h3> {data.title}</h3>
                            </div>
                            <div className="new-px">
                                <Image src={data.images[2].image} alt="" width="450" height="550"/>
                                <p className="trest">
                                    {data.tag_line}
                                </p>
                            </div>
                            <div className="rating">
                                <h6> Size: {data.size} </h6>
                                {reviews(data.rating)}
                            </div>
                            <div className="qaulty">
                                <h6> Price: ${data.price}</h6>
                                <div className="form-group mb-2">
                                    <label htmlFor="quantity1">QTY:
                                        </label>
                                    <input className="form-control form-control-sm" type="number" id="quantity1" value="1" disabled />
                                </div>

                            </div>
                            <div className="check">
                                <button type="button" className="btn  add-to" onClick={() => dispatch(addToCart(data))}>
                                    Add to Shopping Bag
                                </button>
                                <button type="button" className="btn btn-secondary" disabled>One Click Checkout</button>
                            </div>
                            <div className="paraghp">
                                <div dangerouslySetInnerHTML={{ __html: data.description }} />
                            </div>

                            {/* <div className="lest-b">
                                <ul className="best">
                                    <li>Dermatologist Recommended. Hypoallergenic. Non-Comedogenic</li>
                                </ul>
                            </div> */}

                            <div className="paraghp">
                                <h6> INGREDIENTS:</h6>
                                <p>
                                    {data.ingredients}
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="ttile">
                                <h6> HOW TO USE:</h6>
                            </div>
                            <div className="vd-box pt-4">
                                {/* <video width="100%" controls>
                                    <source src="mov_bbb.mp4" type="video/mp4">
                                    <source src="mov_bbb.ogg" type="video/ogg">
                                    Your browser does not support HTML video.
                                  </video> */}
                                <div className="littel">
                                    {data.how_to_use}
                                    {/* <h6> STEP ONE</h6>
                                    <p>Begin by thoroughly cleansing the skin and gently patting dry..</p>
                                    <h6> STEP TWO</h6>
                                    <p>Begin by thoroughly cleansing the skin and gently patting dry..</p>
                                    <h6> STEP THREE</h6>
                                    <p>Begin by thoroughly cleansing the skin and gently patting dry..</p>
                                    <h6> STEP FOUR</h6>
                                    <p>Begin by thoroughly cleansing the skin and gently patting dry..</p> */}

                                </div>
                            </div>

                            <div className="revies">
                                <div className="ttile pt-3 pl-3">
                                    <h6> REVIEWS:</h6>
                                </div>
                                {data.reviews.map((review, i) =>(
                                    <>
                                        <div className="first" key={i}>
                                            <div className="rating-mini">
                                                <h6> Review by {review.name} on {review.created_at}</h6>
                                                {reviews(review.rating)}
                                            </div>
                                        </div>
                                        <div className="red-t">
                                            <h6> Lifecell Verified Customer</h6>
                                        </div>
                                        <div className="lng-paraghp">
                                            <p>
                                                <div dangerouslySetInnerHTML={{ __html: review.comment }} />
                                            </p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({query: {product}}) {

    var url= process.env.API_URL+'products/'+product
    const res = await fetch(url)
    const data = await res.json()
    
    
    /* if (!data) {
      return {
        notFound: true,
      }
    } */
    
    return {
        props: {data: data.data}, // will be passed to the page component as props
    }
}

export default Product