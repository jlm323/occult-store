const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <DefaultLayout title={`${product.name}`} itemGroup="Products">
                <h1>Item: {product.name}</h1>
                <div id="show-item">
                    <div className="item-img"></div>
                    <div className="details">
                        <p>{product.type}</p>
                        <p>{product.description}</p>
                        <p>Quantity: {product.quantity == 0 ? 'OUT OF STOCK' : product.quantity}</p>
                        <p>Price: ${product.price} USD</p>
                        <button>
                            BUY
                        </button>
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