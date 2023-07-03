
import { getCurrentUser, getListingById, getReservations } from "@/app/actions";

const ListingPage = async () => {
// Get the query string portion of the URL
const queryString = window?.location.search;

// Create a new URLSearchParams object with the query string
const urlParams = new URLSearchParams(queryString);

// Retrieve the value of a specific parameter
const param1Value = urlParams.get('param1'); // "value1"

console.log(param1Value);

  return (
    <></>
  );
}
 
export default ListingPage;