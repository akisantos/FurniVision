

export default function ProductCard({product}){

    return(
        <div class="col-12 col-md-4 col-lg-3 mb-5">
            <a className="product-item" href="#">
                <img src={product.thumbnail} alt={product.name} className="img-fluid product-thumbnail"  width="200" height="250"/>
                <h3 className="product-title">{product.name}</h3>
                <strong className="product-price">{product.price} USD</strong>
                <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" />
                </span>
            </a>
        </div>
    )
}
