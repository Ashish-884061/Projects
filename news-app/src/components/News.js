import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';
import { useEffect } from 'react';




const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [isdark,setisdark] = useState(true)




  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40)

    let parsedData = await data.json()
    props.setProgress(70);

    setArticles(parsedData.articles)
    setLoading(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
    // setisdark(props.mode === 'dark' ? true: false)
    updateNews()
    // eslint-disable-line no-console
  }, [])


  //const handlePrevClick = async () => {
  // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page - 1}&pageSize=${props.pageSize}`;
  // setState({ loading: true });
  // let data = await fetch(url);
  // let parsedData = await data.json()
  // console.log(parsedData)

  // setState({
  //   page: state.page - 1,
  //   articles: parsedData.articles,
  //   loading: false
  // })
  // console.log(state.page)
  // setState({ page: state.page - 1 })
  // updateNews()

  //}

  //const handleNextClick = async () => {
  // if (state.page + 1 > Math.ceil(state.totalResults / props.pageSize)) {

  // }
  // else {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
  //   setState({ loading: true });
  //   let data = await fetch(url);
  //   let parsedData = await data.json()


  //   setState({
  //     page: state.page + 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   })
  //   console.log(state.page)
  // }
  // setState({ page: state.page + 1 })
  // updateNews()

  //}

  const fetchMoreData = async () => {

    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setpage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


  return (
    <>
      <div style={{  backgroundColor: props.mode === 'dark' ? '#212529' : 'white', color: props.mode === 'dark' ? 'white' : 'Black' }}>
      
      <h1 className="text-center" style={{ margin: '35px 0',marginTop:'90px' }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner />}


        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
          // style={{ backgroundColor: '#212529' }}
        >
          <div className="container">
          
            <div className="row">
              {articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} ImageUrl={element.urlToImage} newsUrl={element.url} Author={element.author} date={element.publishedAt} sources={element.source.name} isdark={props.mode} />
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-5px">
          <button disabled={state.page <= 1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
          <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    </>
  )

}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: 'general'
}

News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string
}

export default News
