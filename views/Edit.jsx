const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const { product } = this.props

        return (
            <DefaultLayout title="Edit A Product" itemGroup="Products">
            <h1>Edit A Product</h1>
                <div className="form-container">
                <form action={`/products/${product._id}?_method=PUT`} method="POST" autoComplete="off">
                    <label htmlFor='title'>Name: </label>
                    <input type="text" id="name" name="name" defaultValue={product.name}/><br/><br/>

                    <label htmlFor='type'>Type: </label>
                    <input type="text" id="type" name="type" defaultValue={product.type}/><br/><br/>

                    <label htmlFor='description'>Description: </label>
                    <textarea id="description" name="description" defaultValue={product.description}></textarea><br/><br/>

                    <label htmlFor='quantity'>Quantity: </label>
                    <input type="number" id="quantity" name="quantity" defaultValue={product.quantity}/><br/><br/>

                    <label htmlFor='price'>Price: </label>
                    <input type="number" id="price" name="price" defaultValue={product.price} /><br/><br/>

                    <input type="submit" value="Edit product" className="edit-btn-2"/>
                </form>
            </div>
            <div className="back-link"><a href={`/products/${product._id}`}>Back</a></div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;