import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./Slidebar.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function Slidebar() {
  return (
    <div className={cx("sidebar")}>
      <div className={cx("section", "search")}>
        <h2 className={cx("section-title")}>Search</h2>
        <form action="./news.html" method="post">
          <input type="text" name="search-term" className={cx("text-input")} placeholder="Search..." />
        </form>
      </div>
      {/* <div className="section','popular">
        <h2 className="section-title">Popular</h2>
        <div className="post clearfix">
          <img src="./assets/image/news/news1.png" alt="" className="image-post" />
          <a href="#" className="title">Managing Sorghum Shoot Bugs: A Comprehensive Guide to Crop Protection</a>
        </div>
        <div className="post clearfix">
          <img src="./assets/image/news/news1.png" alt="" className="image-post" />
          <a href="#" className="title">Managing Sorghum Shoot Bugs: A Comprehensive

            Guide to Crop Protection</a>
        </div>
        <div className="post clearfix">
          <img src="./assets/image/news/news1.png" alt="" className="image-post" />
          <a href="#" className="title">Managing Sorghum Shoot Bugs: A Comprehensive Guide to Crop Protection</a>
        </div>
        <div className="post clearfix">
          <img src="./assets/image/news/news1.png" alt="" className="image-post" />
          <a href="#" className="title">Managing Sorghum Shoot Bugs: A Comprehensive Guide to Crop Protection</a>
        </div>
        <div className="post clearfix">
          <img src="./assets/image/news/news1.png" alt="" className="image-post" />
          <a href="#" className="title">Managing Sorghum Shoot Bugs: A Comprehensive Guide to Crop Protection</a>
        </div>
      </div> */}
      <div className={cx("section", "topics")}>
        <h2 className={cx("section-title")}>Topics</h2>
        <ul>
          <li><Link to="/top-picks">Top Picks</Link></li>
          <li><Link to="/news-disposal">News At Your Disposal</Link></li>
          <li><Link to="/national-schemes">National Schemes</Link></li>
          <li><Link to="/diseases-pests">Diseases &amp; Pests</Link></li>
          <li><Link to="/field-preparation">Field Preparation</Link></li>
          <li><Link to="/state-schemes">State Schemes</Link></li>
        </ul>
      </div>
    </div>
  )
}