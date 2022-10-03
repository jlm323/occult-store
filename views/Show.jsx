const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <DefaultLayout title={`${product.name}`} group="Products">
            
                <h1>Item: {`${product.name}`}</h1>
                <div>
                   <p>{product.type}</p>
                   <p>{product.description}</p>
                   <p>{product.quantity}</p>
                </div>
             
                
                <nav>
                    <a href="/products" className="back-link">Back</a>
                </nav>
            
            </DefaultLayout>
        );
    }
}

module.exports = Show;