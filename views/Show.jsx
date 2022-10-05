const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        const { product } = this.props;
    
        return (
            <DefaultLayout title={`${product.name}`} itemGroup="Products">
                <h1>Aether Emporium</h1>
                <h2>Item: {product.name}</h2>
                <div id="show-item">
                    <div className="item-img">
                    <img src={`/images/${product.img}`} className="show-img"/>
                    </div>
                    <div className="details">
                        <p>{product.type}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price} USD</p>
                        <p>{product.quantity == 0 ? 'OUT OF STOCK' : product.quantity} In Stock</p>
                        
                        { product.quantity > 0 ?
                        <form action={`/products/${product._id}/purchase?_method=PUT`} method="POST">                        
                            <button type="submit" value="buy">
                                BUY
                            </button>
                        </form> : ''}
                    </div>
                </div>
             
                <a href={`/products/${product._id}/edit`}>Edit</a>

                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete"/>
                </form><br/>
                <nav>
                    
                    <a href="/products" className="back-link">Return to All Products</a>
                </nav>
            
            </DefaultLayout>
        );
    }
}

module.exports = Show;