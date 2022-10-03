const React = require('react');
// const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        
        const { products } = this.props;

        return (
            <DefaultLayout title="Aether Emporium" itemGroup="products">
                <div>
                    <h1>Products Index</h1>
                    <ul id="products-index">
                        {products.map((product) => {
                            return (
                                <li key={product._id}>
                                    <a href={`/products/${product._id}`}>{product.name}</a>
                                </li>
                            )
                        })}
                        
                    </ul>

                    <nav>
                        <a href='/products/New'>Add a new product</a>
                    </nav>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Index;