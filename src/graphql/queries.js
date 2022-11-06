import { gql } from "@apollo/client";

export const RetrieveProduct = gql`
  query RetrieveProduct($price: order_by = asc) {
    product(order_by: { price: $price }) {
      id
      name
      title
      price
      type
      gender
      image1
      image2
      image3
      image4
    }
  }
`;

export const GetProductById = gql`
  query GetProductById($id: Int) {
    product(where: { id: { _eq: $id } }) {
      id
      name
      title
      price
      type
      gender
      image1
      image2
      image3
      image4
      description
    }
  }
`;

export const GetProductByMen = gql`
  query GetProductByMen($gender: String = "men", $price: order_by = asc) {
    product(order_by: { price: $price }, where: { gender: { _eq: $gender } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const GetProductByWomen = gql`
  query GetProductByWomen($gender: String = "women", $price: order_by = asc) {
    product(order_by: { price: $price }, where: { gender: { _eq: $gender } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const GetProductByKids = gql`
  query GetProductByKids($gender: String = "kids", $price: order_by = asc) {
    product(order_by: { price: $price }, where: { gender: { _eq: $gender } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const GetProductByClothing = gql`
  query GetProductByClothing($type: String = "clothing", $price: order_by = asc) {
    product(order_by: { price: $price }, where: { type: { _eq: $type } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const GetProductByShoes = gql`
  query GetProductByShoes($type: String = "shoes", $price: order_by = asc) {
    product(order_by: { price: $price }, where: { type: { _eq: $type } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const SearchProduct = gql`
  query SearchProduct($name: String, $price: order_by = asc) {
    product(order_by: { price: $price }, where: { name: { _ilike: $name } }) {
      id
      name
      title
      price
      type
      gender
      description
      image1
      image2
      image3
      image4
    }
  }
`;

export const CartItem = gql`
  query CartItem {
    cart {
      id
      product_id
      quantity
      size
      addToCart {
        id
        name
        title
        price
        type
        gender
        image1
        image2
        image3
        image4
        description
      }
    }
  }
`;

export const FavouriteItem = gql`
  query FavouriteItem {
    favourites {
      id
      product_id
      quantity
      size
      addToFavourite {
        id
        name
        title
        price
        type
        gender
        image1
        image2
        image3
        image4
        description
      }
    }
  }
`;

export const Orders = gql`
  query Orders {
    orders {
      id
      first_name
      last_name
      phone_number
      address
      detail_address
      product_id
      total_price
      pay_method
      created_at
      order {
        id
        name
        title
        price
        type
        gender
        image1
        image2
        image3
        image4
        description
      }
    }
  }
`;

export const GetOrderById = gql`
  query GetOrderById($id: Int) {
    orders(where: { id: { _eq: $id } }) {
      id
      first_name
      last_name
      phone_number
      address
      detail_address
      total_price
      pay_method
      created_at
      cart {
        size
        quantity
      }
      order {
        name
        title
        price
        image1
        image2
        image3
        image4
      }
    }
  }
`;
