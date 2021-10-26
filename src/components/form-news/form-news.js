function News(newws) {
  return (
      <li>
        <h3>{newws.title}</h3>
        <p>{newws.description}</p>
        <span>{newws.author}</span>
      </li>
  )
}

export default News;