const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="New Product" itemGroup="Products">
            <h1>Add A New Product</h1>
                <div className="label-color">
                <form action="/products" method="POST">
                    <label htmlFor='title'>Name: </label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label htmlFor='type'>Type: </label>
                    <input type="text" id="type" name="type"/><br/><br/>

                    <label htmlFor='description'>Description: </label>
                    <textarea id="description" name="description"></textarea><br/><br/>

                    <label htmlFor='quantity'>Quantity: </label>
                    <input type="number" id="quantity" name="quantity" placeholder='0' /><br/><br/>

                    <label htmlFor='price'>Price: </label>
                    <input type="number" id="price" name="price" placeholder='0' /><br/><br/>

                    <input type="submit" value="Create product" id="create-btn"/>
                </form>
            </div>
            </DefaultLayout>
        );
    }
}

module.exports = New;