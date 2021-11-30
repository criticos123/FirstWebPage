export const RENTALS = {
  ALL: `* [_type == 'rental'] {
    _id,
    "apartmentName": apartmentName[$lang],
    streetAddress,
    "image": {
      "url": imageFront.asset-> url
    },
    price,
    availability
  }`,
  ITEM: `
    *[_type == 'rental' && ($id == _id)] {
      "apartmentName": apartmentName[$lang],
      streetAddress,
      "images": images[]{
        "url": image.asset->url,
        "description": image.asset->description
      },
      price,
      availability
    }[0]
  `,
};
