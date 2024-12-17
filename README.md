# The Beauty Space

**The Beauty Space** is a single-page application (SPA) designed to provide users with an extensive database of makeup brands and product information. Leveraging the Makeup API, this application allows beauty enthusiasts to search for products, filter them by various criteria, and access detailed information about each product.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Search**: Users can search for makeup products by entering keywords in a search bar.

- **Filtering Options**: Filter products by brand, price range, product category, and tags.

- **Product Listings**: Display a grid of products with essential information, including name, brand, price, and image.


- **Product Details**: Clicking on a product shows detailed information, including a high-resolution image and description.

- **Responsive Design**: Fully responsive layout for optimal viewing on desktops, tablets, and smartphones.

- **User -Friendly Interface**: Clean and intuitive design for easy navigation.

- **Loading Indicators**: Visual feedback while fetching data from the API.

- **Error Handling**: Graceful handling of API request failures with user-friendly messages.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Makeup API](http://makeup-api.herokuapp.com/)
- [json-server](https://github.com/typicode/json-server) (optional for local development)

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/odhiambootieno/phase-1-project
   cd phase-1-project

2. Open the project in your preferred code editor.

3. (Optional) Set up json-server: If you want to use a local database, create a db.json file in the project root with the provided structure. Then, install json-server globally if you haven't already:

   ```bash 
   npm install -g json-server
   ```

4. Run json-server:

   ```bash
   json-server --watch db.json
   ```

5. Open index.html in your web browser to view the application.

## Usage

1. Use the search bar to find specific makeup products.

2. Apply filters to narrow down the product list by brand, price, and category.

3. Click on a product to view detailed information.

## API Endpoints

The application interacts with the following API endpoints:

1. Fetch all products:

   ```bash
   GET http://makeup-api.herokuapp.com/api/v1/products.json
   ```

2. Search by brand:

    ```bash
    GET http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline
    ```

3. Search by product type:

    ```bash
    GET http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick
    ```

4. Filter by price:

     ```bash
     GET http://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=10&price_less_than=20
     ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## Licence

This project is licensed under the MIT License. See the LICENSE file for details.

## contact 

Gmail (mail to brianmkcnight@gmail.com )

Thank you for checking out The Beauty Space! We hope you enjoy exploring the world of makeup products.
