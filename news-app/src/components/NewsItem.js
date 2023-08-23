import React from 'react'

const NewsItem =(props)=> {


  
    let { title, description, ImageUrl, newsUrl, Author, date, sources, isdark} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ backgroundColor: isdark === 'dark' ? 'black' : 'white', color: isdark === 'dark' ? 'white' : 'Black',borderWidth:'2px',borderColor:`${isdark==='dark'?'white':'grey'}`}}>
       <div style={{display:'flex',position:'absolute',justifyContent:'flex-end',right:'0'}}>
       <span className="badge rounded-pill bg-success">
              {sources}
            </span>
       </div>
          <img src={!ImageUrl ? "https://i.ytimg.com/vi/iJhp1LU4mzE/maxresdefault.jpg" : ImageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-dark" >By : <b>{Author ? Author : "Anonymous"}</b> on <b>{new Date(date).toGMTString()}</b></small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
