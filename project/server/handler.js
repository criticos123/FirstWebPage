const productsData = require("./apartments.json");


function handle_Apartment_Id(req, res) {

  res.status(200).json({ status: 200});
}

function handle_Apartments(req, res) {

    res.status(200).json({ status: 200});
  }


module.exports = {
    handle_Apartment_Id,
    handle_Apartments,
};
