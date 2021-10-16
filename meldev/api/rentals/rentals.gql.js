import { gql } from "apollo-boost";

export const RENTALS = {
  ALL: gql`
    query {
      allRentals {
        price
        apartmentName
        imageFront
        streetAddress
        id
      }
    }
  `,
  ITEM: gql`
    query Rental($id: ID!) {
      Rental(where: { id: $id}) {
        price
        apartmentName
        imageFront
        imageKitchen
        imageBedroom
        imageBathroom
        imageLivingroom
        streetAddress
      }
    }
`
};
