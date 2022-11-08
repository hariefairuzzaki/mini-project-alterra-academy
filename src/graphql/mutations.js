import { gql } from "@apollo/client";

export const AddToCart = gql`
  mutation AddTocart(
    $size: String
    $id: Int
    $name: String
    $title: String
    $price: Int
    $type: String
    $gender: String
    $image1: String
    $image2: String
    $image3: String
    $image4: String
    $description: String
  ) {
    insert_cart_one(
      object: {
        size: $size
        quantity: 1
        addToCart: {
          data: {
            id: $id
            name: $name
            title: $title
            price: $price
            type: $type
            gender: $gender
            image1: $image1
            image2: $image2
            image3: $image3
            image4: $image4
            description: $description
          }
          on_conflict: { constraint: product_pkey, update_columns: id }
        }
      }
    ) {
      id
      product_id
      size
      quantity
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

export const RemoveFromCart = gql`
  mutation RemoveFromCart($id: Int!) {
    delete_cart_by_pk(id: $id) {
      id
    }
  }
`;

export const AddToFavourite = gql`
  mutation AddToFavourite(
    $size: String
    $id: Int
    $name: String
    $title: String
    $price: Int
    $type: String
    $gender: String
    $image1: String
    $image2: String
    $image3: String
    $image4: String
    $description: String
  ) {
    insert_favourites_one(
      object: {
        size: $size
        quantity: 1
        addToFavourite: {
          data: {
            id: $id
            name: $name
            title: $title
            price: $price
            type: $type
            gender: $gender
            image1: $image1
            image2: $image2
            image3: $image3
            image4: $image4
            description: $description
          }
          on_conflict: { constraint: product_pkey, update_columns: id }
        }
      }
    ) {
      id
      product_id
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

export const RemoveFromFavourite = gql`
  mutation RemoveFromFavourite($id: Int!) {
    delete_favourites_by_pk(id: $id) {
      id
    }
  }
`;

export const Checkout = gql`
  mutation Checkout(
    $first_name: String
    $last_name: String
    $phone_number: bigint
    $address: String
    $detail_address: String
    $total_price: bigint
    $pay_method: String
    $name: String
    $title: String
    $price: Int
    $type: String
    $gender: String
    $image1: String
    $image2: String
    $image3: String
    $image4: String
    $size: String
    $quantity: Int
    $id_cart: Int
  ) {
    insert_orders(
      objects: {
        first_name: $first_name
        last_name: $last_name
        phone_number: $phone_number
        address: $address
        detail_address: $detail_address
        total_price: $total_price
        pay_method: $pay_method
        name: $name
        title: $title
        price: $price
        type: $type
        gender: $gender
        image1: $image1
        image2: $image2
        image3: $image3
        image4: $image4
        size: $size
        quantity: $quantity
      }
    ) {
      affected_rows
      returning {
        id
        first_name
        last_name
        phone_number
        address
        detail_address
        total_price
        pay_method
        name
        title
        price
        type
        gender
        image1
        image2
        image3
        image4
        size
        quantity
        created_at
      }
    }
    delete_cart(where: { id: { _eq: $id_cart } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
