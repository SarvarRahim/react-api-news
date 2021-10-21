function Filter() {
  return (
    <div className="collapse" id="collapseExample">
    <form className="pt-4 form-search" action="https://echo.htmlacademy.ru" method="GET">
      <div className="row">
        <div className="col-sm-3 col-md-4 mb-3">
          <input className="book-search form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </div>
        <div className="col-sm-3 col-md-4 mb-3">
          <input className="js-start-year form-control" type="number" aria-label="search-year" placeholder="Start year" />
        </div>
        <div className="col-sm-3 mb-3">
          <input className="js-start-end form-control" type="number" aria-label="search-year" placeholder="End year" />
        </div>
        <div className="col-sm-3 mb-3">
          <select className="js-sort form-control" name="countys">
            <option value="All">All</option>
          </select>
        </div>
        <div className="col-sm-3 col-md-3 mb-3">
          <input className="js-language-input form-control" type="text" aria-label="search-language" placeholder="Language" />
        </div>
        <div className="col-sm-8 col-md-3 mb-3">
          <select className="me-5 form-control js-sort-select" name="sort" aria-label="sorting">
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
            <option value="year_old">Year (old-new)</option>
            <option value="year_new">Year (new-old)</option>
          </select>
        </div>

        <div className="col-sm-4 col-md-2">
          <button className="btn btn-outline-danger w-100" type="submit">Search</button>
        </div>
      </div>
    </form>
  </div>
  );
}

export default Filter;