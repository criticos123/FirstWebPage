import { gql } from "@apollo/client";

export const RENTALS = {
  ALL: gql`
    query {
      allRental {
        _id
        apartmentName {
          en
          fr
        }
        imageFront {
          asset {
            url
            altText
          }
        }
        streetAddress
        price
        availability
      }
    }
  `,
  ITEM: gql`
    query Rental($id: ID!) {
      Rental(id: $id) {
        price
        apartmentName {
          en
          fr
        }
        imageFront {
          asset {
            url
            altText
          }
        }
        images {
          image {
            asset {
              url
            }
          }
          description
        }
        streetAddress
        availability
      }
    }
  `,
};
