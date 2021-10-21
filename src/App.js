import Books from "./books";
import BooksList from "./components/books-list/book-list";
import Filter from "./components/filter/filter";
import Navbar from "./components/navbar/navbar";

function App() {
  console.log(Books);
  return (
    <>
    <div className="container-xl">
    <Navbar />

   <Filter />

    <section className="site-hero">
      <h2 className="site-hero__title display-4 fw-bold text-white w-50 mx-auto">A book is a gift you can open again and again.</h2>
    </section>

    <div className="books-list row my-3 mt-4">
      {Books.map((book) => <BooksList {...book} />)}
    </div>
  </div>

    </>
  );
}

export default App;
