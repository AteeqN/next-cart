import React from 'react'
import Image from 'next/image'
import twitter from '../../public/images/twitter.svg'
import facebook from '../../public/images/facebook.svg'
import youtube from '../../public/images/youtube.svg'
import pinterest from '../../public/images/pinterest.svg'
import Link from 'next/link'

class Footer  extends React.Component {


    render() {
        return (
            <>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="title-4">
                                    <h5> LifeCell Resources</h5>
                                    <ul className="menu">
                                        <li> <a href="#" target="_blank">Skin Care Tips</a> </li>
                                        <li><a href="#" target="_blank">30 Day Money Back Guarantee</a> </li>
                                        <li> <a href="#" target="_blank">Returns & Exchanges</a></li>

                                        <li><a href="#" target="_blank">Contact Us</a></li>
                                        <li> <a href="#" target="_blank">RMA</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="title-4">
                                    <h5> More From Lifecell</h5>
                                    <ul className="menu">
                                        <li> <a href="#" target="_blank">FAQ’</a> </li>
                                        <li><a href="#" target="_blank">Privacy Policy</a> </li>
                                        <li> <a href="#" target="_blank">Legal Notice</a></li>

                                        <li><a href="#" target="_blank">Sitemap</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="title-4">
                                    <h5>
                                        Contact Us </h5>
                                    <ul className="menu">
                                        <li> <a href="#" target="_blank">Email: support@lifecellskin.com
                                        </a> </li>
                                        <li><a href="#" target="_blank">Tel: +1 954-606-5057</a> </li>
                                        <li> <a href="#" target="_blank">Mon - Fri: 9am - 5pm EST</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="title-4">
                                    <h5>Social</h5>
                                    <Image src={twitter} alt="" />
                                    <Image src={facebook} alt="" />
                                    <Image src={youtube} alt=""  />
                                    <Image src={pinterest} alt="" />
                                    {/* <img src='/images/twitter.svg' /> */}
                                    {/* <img src='/images/facebook.svg' className="ml-3"/> */}
                                    {/* <img src='/images/youtube.svg' className="ml-3"/> */}
                                    {/* <img src='/images/pinterest.svg' className="ml-3"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-2">
                    <div className="container-fluid">
                        <div className="text-p">
                            <p className="text-one">These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.</p>
                            <p className="text-two">
                                The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your dermatologist or other health care professional or any information contained on or in any product label or packaging. You
                                should not use the information on this website or the product described for diagnosis or treatment of any health problem or as a substitute for any prescription of any medication or other treatment. You should consult with a health
                                care professional before starting any skin or facial regiment or if you have or suspect you might have a skin problem. This information and product is not recommended for women who are pregnant or children.
                            </p>
                            <p className="text-three"> If you are using a screen reader and are having problems using the website please call 1 (877) 414-9426 for assistance.</p>
                            <p className="text-three"> © 2021 LifeCell South Beach Skincare. All Rights Reserved. Read more about LifeCell here. LifeCell by South Beach Skincare Inc.</p>
                            <p className="text-three"> 1909 Tyler St Suite 701, Hollywood, Fl 33020</p>
                            <p className="text-three"> Terms and Conditions | DMCA Policy</p>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Footer
