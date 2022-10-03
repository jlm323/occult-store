const React = require('react');
// const DefaultLayout = require('../layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        
        const { products } = this.props;

        return (
            // <DefaultLayout title="All Fruit" foodGroup="fruits">
                <div>
                    <h1>Products Index</h1>
                    <ul id="products-index">
                        {products.map((product) => {
                            return (
                                <li key={product._id}>
                                    placeholder text, will change later.
                                </li>
                            )
                        })}
                        
                    </ul>

                    <nav>
                        <a href='/products/New'>Add a new product</a>
                    </nav>
                </div>
            // </DefaultLayout>
        );
    }
}

module.exports = Index;