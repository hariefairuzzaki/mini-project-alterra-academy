import { gql } from "@apollo/client";

export const RetrieveProductByGender = gql`
  query MyQuery($gender: String) {
    product(where: { gender: { _eq: $gender } }) {
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

export const RetrieveProduct = gql`
  query RetrieveProduct {
    product {
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
  query GetProductByMen($gender: String = "men") {
    product(where: { gender: { _eq: $gender } }) {
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
  query GetProductByWomen($gender: String = "women") {
    product(where: { gender: { _eq: $gender } }) {
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
  query GetProductByKids($gender: String = "kids") {
    product(where: { gender: { _eq: $gender } }) {
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
  query GetProductByClothing($type: String = "clothing") {
    product(where: { type: { _eq: $type } }) {
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
  query GetProductByShoes($type: String = "shoes") {
    product(where: { type: { _eq: $type } }) {
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
  query SearchProduct($name: String) {
    product(where: { name: { _ilike: $name } }) {
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
    cart(order_by: { id: asc }) {
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
