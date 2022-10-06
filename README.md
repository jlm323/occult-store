# Aether Emporium
A storefront for a fictional business which specializes in occult items such as tarot decks, crystals, and ritual tools.

![Index Page](/public/images/index-page.jpg)

## Description
The fictional Aether Emporium occult store was built with a primary focus on RESTful routing and creating a REST API using Node, Express, and MongoDB. 

The user can add new product items, edit existing product items, and delete items. Clicking the buy button on an item reduces the amount of the item in stock. If the item is no longer in stock, the user cannot buy it and will be shown the message, 'Out of Stock.'

## 7 RESTful Routes
| **URL**            | **HTTP Verb** | **Action** | **Notes**                                                                                                                                                                               |
|--------------------|---------------|------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| /products/         | GET           | index      | INDEX when a user types localhost:3000/products in browser this route shows a list or index of all products                                                                             |
| /products/new      | GET           | new        | NEW when a user types localhost:3000/products/new in the browser this route shows the user a form to create a NEW product                                                               |
| /products/:id      | DELETE        | destroy    | DELETE initiates a delete request through a form submission with action = http://localhost:3000/products/:idOfProduct and allows the application the ability to delete a product         |
| /products/:id      | PUT           | update     | UPDATE initiates a put request through a form submission with action = http://localhost:3000/products/:idOfProduct and allows the application the ability to Update data about a product |
| /products          | POST          | create     | CREATE initiates a post request through a form submission with action = http://localhost:3000/products/and allows the application the ability to create a product                       |
| /products/:id/edit | GET           | edit       | EDIT, when a user types localhost:3000/products/:idOfProduct/edit in the browser, shows the user a form to edit a product                                                               |
| /products/:id      | GET           | show       | SHOW when a user types localhost:3000/products/:idOfProduct shows the user an Individual product in the browser                                                                         |

## Built With
HTML, CSS, JavaScript, Node.js, Express, React, MongoDB

## Future Implementation
- Shopping cart feature which shows what items have been added after clicking the buy button
- Ability to upload product images when creating a new product

## Store Photos
![Show Item](/public/images/show-item.jpg)

![Edit Item](/public/images/edit-item.jpg)

![New Item](/public/images/add-item.jpg)

## Author
Author: [Jessica Milewski](https://github.com/jlm323 "GitHub")

## Acknowledgements 
Images and description credits:
- [Rider Waite Tarot](https://www.usgamesinc.com/Tarot_and_Inspiration/rider-waite-tarot-card-deck.html)
- [Ethereal Visions Tarot](https://www.usgamesinc.com/Tarot_and_Inspiration/ethereal-tarot.html)
- [Halloween Oracle](https://www.usgamesinc.com/Tarot_and_Inspiration/oracle/halloween-oracle.html)
- [Isis Oracle](https://www.usgamesinc.com/Tarot_and_Inspiration/oracle/isis-oracle.html)
- [Chime Candles](https://whitemagickalchemy.com/chime-candles-assorted-box-of-20-for-candle-magick-setting-intentions/)
- [Celtic Ritual Salt](https://whitemagickalchemy.com/celtic-ritual-salt-organic-for-celtic-workings-spells-ritual-cleansing-purification-protection-charging-casting/)
- [Rosemary Cleansing Bundle](https://inspiremeonline.co.nz/products/rosemary-smudge-stick-approx-12x3cm)
- [Clear Quartz](https://pixabay.com/photos/rock-crystal-clear-to-white-1603474/)  [Description](https://www.etsy.com/listing/207967904/clear-quartz-crystal-raw-quartz-point?click_key=b4ae7251c94d936ace9df009fe7a8abb1c9d3e90%3A207967904&click_sum=72d3d282&ref=internal_similar_listing_bot-5&pro=1&sts=1)
- [Header Image](https://pixabay.com/vectors/divider-separator-line-art-vintage-5310879/)
- [Item Background](https://pixabay.com/illustrations/paper-stationery-parchment-antique-68833/)

This project was built for the second module in the Software Engineering course at Per Scholas.

## Link
[Visit Aether Emporium](https://aether-emporium.cyclic.app/products "Store")

