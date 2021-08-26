// import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
// import Header from '../components/Layout/Header'
// import styles from '../styles/Home.module.css'
import profilePic from '../public/vercel.svg'
import bigproductwhitlogo from '../public/images/bigproductwhitlogo.png'
import homeSliderContent from '../public/images/home-slider-content.png'
import featureIcon1 from '../public/images/feature-icon-1.png'
import featureIcon2 from '../public/images/feature-icon-2.png'
import featureIcon3 from '../public/images/feature-icon-3.png'
import eye2x from '../public/images/eye@2x-3.png'
import hairMini from '../public/images/HAIR-MINI-main.png'
import neck2x from '../public/images/neck@2x-1.png'
import cleanser2x from '../public/images/cleanser@2x-2.png'
import articleImage from '../public/images/article.png'
import productlogo from '../public/images/100x200.png'


export default function Home({data, banner}) {
    console.log(data);
    console.log(banner);
  return (
    <>
      <div className="tw0-pic">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="first-prodct">
                        <Image src={banner.images[2].image} alt="" width="550" height="550"  />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="second-home">
                        <Image src={homeSliderContent} alt="" />
                        <p>
                            {banner.tag_line}
                        </p>
                        <div className="buy">
                            <button type="button" className="btn" disabled>Buy</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="view-all">
        <div className="container">
            <div className="row">

                <div className="col-lg-4">
                    <div className="read">
                        <div className="circle">
                            <Image src={articleImage} alt="" />
                            <h5> Article 1</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <button type="button" className="btn" disabled>Read More  </button>
                        </div>
                    </div>
                </div>
            
                <div className="col-lg-4">
                    <div className="read">
                        <div className="circle">
                            <Image src={articleImage} alt="" />
                            <h5> Article 2</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <button type="button" className="btn" disabled>Read More  </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="read">
                        <div className="circle">
                            <Image src={articleImage} alt="" />
                            <h5> Article 3</h5>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <button type="button" className="btn" disabled>Read More  </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ttile">
                <h4> LIFECELL PRODUCTS</h4>
            </div>
            <div className="LIFECELL">
                <div className="container">
                    <div className="row">
                        {data.map((product, i) =>(

                            <div className="col-lg-3" key={i}>
                                <div className="squre">
                                    <div className="pctr">
                                        <Image src={product.images[0].image} alt="" width="139" height="170"/>
                                    </div>
                                    <div className="text">
                                        <h5> {product.title} </h5>
                                        <h6> ${product.price}</h6>
                                        <Link href={`/product/${product.slug}`}>
                                            <a className="btn"> Learn more </a>
                                        </Link>
                                        {/* <button type="button" className="btn"> Learn more  </button> */}
                                    </div>

                                </div>
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="last-pic">
    </div>
    </>
  )
}

export async function getServerSideProps(context) {

    var url= process.env.API_URL+'home'
    // console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    
    /* if (!data) {
      return {
        notFound: true,
      }
    } */
    
    return {
        props: {data: data.data.products, banner: data.data.banner}, // will be passed to the page component as props
    }
}
