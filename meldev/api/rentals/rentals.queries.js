import { RENTALS } from "./rentals.gql";
import { query } from "../../apollo";
import { parseLocalizedStrings } from "../../utils/string";

export async function getRentals() {
  const {
    data: { allRental },
  } = await query({
    query: RENTALS.ALL,
  });

  const parsedRentals = allRental.map(parseLocalizedStrings);

  return parsedRentals;
}

export async function getRentalItem(variables) {
  const {
    data: { Rental },
  } = await query({
    query: RENTALS.ITEM,
    variables,
  });

  const parsedRental = parseLocalizedStrings(Rental);

  return parsedRental;
}
