export const ItemDetail = ({product}) =>(
    <>
        <div className='detalles'>
                <h2>{product.name}</h2>
                <img src={product.imagen}/>
                <div className="detalles">
                    <h2>STOCK</h2>
                    {product.stock}
                </div>
            </div>
    </>
    );