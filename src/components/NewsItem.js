import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card">
                <span className=' badge rounded-pill bg-danger' style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>{source}</span>
                <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/02/18/1600x900/Microsoft-Artificial-Intelligence-17_1676715206846_1676715206846_1676715250830_1676715250830.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}


export default NewsItem
