import { RENTALS } from "./rentals.gql";
import { query } from "../../apollo";

export async function getRentals() {
  const {
    data: { allRentals },
  } = await query({
    query: RENTALS.ALL,
  });

  return allRentals;
}

export async function getRentalItem(variables) {
  const {
    data: { Rental },
  } = await query({
    query: RENTALS.ITEM,
    variables,
  });

  return Rental;
}
