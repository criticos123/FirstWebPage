
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
        availability


      }
    }
  `,
  ITEM: gql`
    query Rental($id: ID!) {
      Rental(where: { id: $id}) {
        price
        apartmentName
        imageFront
        video
        imageKitchen
        imageBedroom
        imageBathroom
        imageLivingroom
        streetAddress
        availability

       
      }
    }
`,
};
