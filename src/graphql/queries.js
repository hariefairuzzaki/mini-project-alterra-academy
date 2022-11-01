import { gql } from "@apollo/client";

export const RetrieveProduct = gql`
  query RetrieveProduct {
    product {
      id
      name
      title
      price
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      size
      quantity
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
      addToCart {
        id
        name
        title
        price
        size
        quantity
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
      addToFavourite {
        id
        name
        title
        price
        size
        quantity
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
