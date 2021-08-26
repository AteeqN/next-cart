import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import cleanser2x from '../public/images/cleanser@2x-2.png'
import alinone from '../public/images/alinone@2x-1.png'

function Shop({data, banner}) {
    console.log(banner);
    // console.log(data.data.products);
    // console.log(data.data.data[0].images[0].image)
    return <div>
         <div className="shop">
            <div className="LIFECELL">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="squre-one">
                                <div className="pctr-one" style={{backgroundImage: `${banner.images[0].image}`}}></div>

                                <div className="text-one">
                                    <h5> {banner.title}</h5>
                                    <p>
                                        {banner.tag_line}
                                    </p>
                                    <h6> ${banner.price}</h6>
                                    <button type="button" className="btn" disabled> Learn more &gt; </button>
                                    <button type="button" className="btn" disabled> buy &gt; </button>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {data.data.map((product, i) =>(
                            <div className="col-lg-6" key={i}>
                                <div className="squre">
                                    <div className="pctr">
                                        <Image src={product.images[1].image} alt="" height="300" width="250"/>
    
                                    </div>
                                    
                                    <div className="text">
                                        <h5>{product.title}</h5>
                                        <p>
                                            {product.tag_line}
                                        </p>
                                        <h6> ${product.price} {product.slug}</h6>
                                        <Link href={`/product/${product.slug}`}>
                                            <a className="btn"> Learn more &gt; </a>
                                        </Link>
                                        <button type="button" className="btn" disabled> buy &gt; </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <style jsx global>{`
        .pctr-one {
            background: url(${banner.images[3].image}) no-repeat !important
        }
      `}</style>
    
       </div>
}

export async function getServerSideProps(context) {

    var url= process.env.API_URL+'products'
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
  
  export default Shop