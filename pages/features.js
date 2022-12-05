import Footer from "../components/Footer";
import Header from "../components/Header";

function Features() {
  return (
    <div>
      <Header />
      <div>
        <h1 className="ml-7 mt-11 mb-11 text-xl md:text-3xl font-semibold">
          Features of this website:
        </h1>
        <p className="ml-7 text-md md:text-xl mb-5">
          1. This website has server-side rendering which makes loading of pages
          really fast.
        </p>
        <p className="ml-7 text-md md:text-xl mb-5">
          2. In the search bar, you can select the number of guests and select
          the date range for booking the hotel.
        </p>
        <p className="ml-7 text-md md:text-xl mb-5">
          3. When you press search, it will take you to the search page.
        </p>
        <p className="ml-7 text-md md:text-xl mb-5">
          4. On the search page, you will find the data you just entered in
          search page.
        </p>
        <p className="ml-7 text-md md:text-xl mb-5">
          5. The search page also contains the map integration which has default
          location as average of coordinates of available hotels.
        </p>
        <p className="ml-7 text-md md:text-xl mb-20">
          6. The available hotels are fetched from the JSON API fetched using
          fetch function.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Features;
