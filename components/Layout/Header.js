import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import covidImage from '../../public/images/covid-19-icon.png'
import logo from '../../public/images/lifecelllogo@2x.png'
import flagUSA from '../../public/images/flagusa@2x.png'
import CartPage from '../../pages/mySidenav'

class Header extends React.Component {

    openNav(){

        document.getElementById("mySidenav").style.width = "300px";

    }


    closeNav() {

        document.getElementById("mySidenav").style.width = "0";
    
    }

    render() {
        // let item = this.item
        return (
            <>
                {/* <div className="update">
                    <div className="container-fluid">
                        <div className="tittle">
                            <h5>
                                CORONAVIRUS UPDATE
                            </h5>
                            <Image src={covidImage} alt=""/>
                            <h6> As of 05/10/21 there is no delay in orders.</h6>
                        </div>
                    </div>
                </div> */}
                <div className="slect-br">
                    <header className="main-header">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
                                    <i className="fa fa-bars"></i>
                                </button>
                                    <Link className="navbar-brand" href="/">
                                        <a></a>
                                        {/* <a> <Image src={logo} className="logo" alt="" height="30" width="30" /></a> */}
                                    </Link>
                                </div>
                                <div className="collapse navbar-collapse" id="navbar-menu">
                                    <ul className="nav navbar-nanavbar-nav" data-in="fadeInDown" data-out="fadeOutUp">
                                        <li className="nav-item active">
                                            <Link href="/shop">
                                                <a className="nav-link">Shop</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/product/product-1-title">
                                                <a className="nav-link">What’s New</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/product/product-2-title">
                                                <a className="nav-link">Science</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href="/blog">
                                                <a className="nav-link">Blog</a>
                                            </Link>
                                        </li>

                                        <li className="dropdown">
                                            <Link href="#">
                                                <a className="nav-link dropdown" data-toggle="dropdown">company</a>
                                            </Link>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <Link href="/our-company">
                                                        <a>Our Company</a>
                                                    </Link>
                                                </li>
                                                
                                                <div className="dropdown-divider"></div>
                                                <li>
                                                    <Link href="/information">
                                                        <a>Information</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="attr-nav">
                                    <div className="search">
                                        <Image src={flagUSA} alt="" />
                                        <span>United States  </span> </div>
                                    <div className="side-menu">
                                        <div id="mySidenav" className="sidenav whts">
                                            <a href="javascript:void(0)" className="closebtn" onClick={()=>this.closeNav()}>&times;</a>
                                            <h6 className="my-ct"> MY CART</h6>
                                            <hr />
                                            <CartPage />
                                            {/* <div className="totl">
                                                <h6> Subtotal:</h6>
                                                <h6> $0.00 USD</h6>
                                            </div>
                                            <div className="t-last">
                                                <h6> Shipping calculated at check out</h6>
                                                <button type="button" className="btn btn-chk">Checkout →</button>
                                            </div> */}
                                        </div>

                                        <span onClick={()=>this.openNav()}> <i className="fa fa-shopping-bag"></i></span>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </header>
                </div>
            </>
        );
    }
}

export default Header;