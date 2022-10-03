const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Edit A Product" group="Products">
            <h1>Edit A Product</h1>
                <div className="label-color">
                <form action="/products" method="POST">
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

                    <input type="submit" value="Edit product"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = Edit;