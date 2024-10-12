import ProductCard from "../components/ProductCard"


export default function Shop({products}) {


    return(
        <>
        <FeaturedProduct products={products}/>
        <AllProducts products={products} />
        </>
    )
}

function FeaturedProduct({products}){
    const featuredProduct = products.filter((i) => i.isFeatured)
    const productCards = featuredProduct.map((i) => <ProductCard product={i}/>);
    return(
        <div class="untree_co-section product-section before-footer-section">
            <div class="container">
                <h1>Featured Products</h1>
                <br />
                <div class="row">
                    {productCards}
                </div>
            </div>
        </div>
    )
}

function AllProducts({products}){
    const productCards = products.map((i) => <ProductCard product={i}/>);
    return(
        <div class="untree_co-section product-section before-footer-section">
            <div class="container">
                <h1>All Products</h1>
                <br />
                <div class="row">
                    {productCards}
                </div>
            </div>
        </div>
    )
}
