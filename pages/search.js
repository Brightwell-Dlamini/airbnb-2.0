import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";

function Search() {
  const router = useRouter();
  //   es6 destructuring
  const { location, startDate, endDate, noOfGuests } = router.query;
  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndtDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate}-${formatedEndtDate}`;
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays between {range} for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-3 space-x-3 text-gray-800 whitespace-nowrap md:inline-flex">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
