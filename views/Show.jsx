const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        const { product } = this.props;
    
        return (
            <DefaultLayout title={`${product.name}`} itemGroup="Products">
                <h2>Item: {product.name}</h2>
                <div id="show-item">
                    <div className="item-img">
                    <img src={`/images/${product.img}`} className="show-img"/>
                    </div>
                    <div className="details">
                        <div className="text-description">
                        <p className="item-type">{product.type}</p>
                        <p>{product.description}</p>
                        <p>Price: ${product.price} USD</p>
                        <p>{product.quantity == 0 ? 'OUT OF STOCK' : product.quantity + ' In Stock'} </p>
                        
                        <div className="btn-container-1">
                        { product.quantity > 0 ?
                        <form action={`/products/${product._id}/purchase?_method=PUT`} method="POST">                        
                            <button type="submit" value="buy" className="buy-btn">
                                Buy
                            </button>
                        </form> : ''}
                        </div>
                        </div>
                    </div>
                </div>
                <div className="btn-container-2">
                <a href={`/products/${product._id}/edit`}>
                    <button className="edit-btn-1">Edit</button></a>

                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                    <input type="submit" value="Delete" className="del-btn"/>
                </form><br/>
                </div>
                    
                    <div className="back-link">
                        <a href="/products">Return to All Products</a>
                    </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;