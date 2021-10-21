function BooksList({title, author, country, year, pages, language, link, imageLink}) {

  return (
    <>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="card rounded border-0 mb-3 h-100">
        <img className="book-img mx-auto p-2" src={imageLink} alt="" width="160" height="200" />
        <div className="card-body d-flex flex-column text-truncate">
          <h3 className="book-title h5 m-0 fw-bold mb-2 text-truncate">{title}</h3>
          <p className="mb-0 book-author">{author}</p>
          <p className="book-country">{country}</p>
          <div className="d-flex justify-content-between flex-wrap mt-2 mb-2">
            <span className="d-flex align-items-center">
              <p className="mb-0"><span className="book-year book-page me-2">{year}</span></p>
            </span>
            <span className="d-flex align-items-center">

              <p className="mb-0"><span className="book-pages book-page me-2">{pages}</span></p>
            </span>
            <span className="d-flex align-items-center">
              <p className="mb-0"><span className="book-lenguage book-page">{language}</span></p>
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-auto">
            <a className="book-link" href={link} target="_blank">Wikipedia</a>
            <button className="btn-bookmark" type="button"></button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default BooksList;