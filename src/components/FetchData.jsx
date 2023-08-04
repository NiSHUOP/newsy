import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

export const FetchData = ({cat}) => {
    const img = 'https://digitalfinger.id/wp-content/uploads/2019/12/no-image-available-icon-6.png';
    const [Data, setData] = useState("");
    const fetchData = async () => {
        await axios.get(cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=3d9b4b86e0024309b2f8b261c729f852`
           : "https://newsapi.org/v2/top-headlines?country=in&apiKey=3d9b4b86e0024309b2f8b261c729f852"
        ).then((res) => setData(res.data.articles));
    };
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [cat]);
    return (
        <div className="container mt-5">
            <h3><b>Top Headlines</b></h3>
            <div className="container-fluid ">
                <div className="row">

                    {Data ? Data.map((items, index) => {
                        return (

                            <div className="col-12 col-md-6 col-lg-4 mt-4">

                                <div className="feature col p-3"  >

                                    <img src={items.urlToImage?items.urlToImage:img} alt="no_img" className="img-fluid" style={{ width: "auto", height: "300px", objectFit: "cover" }} />
                                    <h5 className="card-title py-2">{items.title}</h5>
                                    <p className="card-text" style={{ "word-wrap": "break-word" }}>{items.description}.</p>
                                    <footer class="blockquote-footer pt-1">{items.author?items.author:"Unknown"}</footer>
                                    <Link to={items.url} class="btn btn-outline-secondary" role="button" target='blank'>
                                        Read More
                                    </Link>
                                    <small class="text-body-secondary">{ new Date(items.publishedAt).toLocaleDateString("en-US", {  year: 'numeric', day: 'numeric', month: 'short', hour: 'numeric',minute:'numeric' }) }</small>
                                </div>
                            </div>


                        )
                    }
                    )
                        : "loading.."}
                </div>
            </div>
        </div>
    )
}
