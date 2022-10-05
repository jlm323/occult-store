const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout');

class Index extends React.Component {
    render() {
        
        const { products } = this.props;

        return (
            <DefaultLayout title="Aether Emporium" itemGroup="Products">
                
                    <h1>Aether Emporium</h1>
                    <div id="page-container">
                        <div id="products-index">

                            {products.map((product) => {

                                return(

                                    <div key={product._id}>

                                        <div className="item-area">

                                            <a href={`/products/${product._id}`} id="item-display">

                                                <img src={`/images/${product.img}`} className="item-photo"/>
                                                
                                                <div className="overlay">View Item</div><br/>
                                                
                                                {product.name}
                                                
                                            </a><br/>
                                            ${product.price}

                                        </div>

                                    </div>
                                )
                            } 
                        )}                        
                        </div>
                    </div>
                    
                    <nav id="create-item">
                        <a href='/products/new'>Add a new product</a>
                    </nav>
                    
            </DefaultLayout>
        );
    };
};

module.exports = Index;