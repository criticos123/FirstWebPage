import { gql } from "apollo-boost";

export const RENTALS = {
  ALL: gql`
    query {
      allRentals {
        price
        apartmentName
        image
        imageAltText
        streetAddress
      }
    }
  `
};
