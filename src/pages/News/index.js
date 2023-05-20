import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import styles from "./News.module.scss";
import classNames from "classnames/bind";
import Slider from "react-slick";
import SliderBar from "./Slidebar"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {api_url} from '../../services/getAPI.js'
const cx = classNames.bind(styles);
const News = () => {
  const [news, setNews] = useState([]);
  const [settings, setSettings] = useState(null);
  const slider = React.useRef(null);
  useEffect(() => {
      setSettings({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
  }, []);

  return (
    <div className={cx("page-wrapper")} id="">
      {/* Post Slider */}
      <div className={cx("post-slider")}>
        <h1 className={cx("slider-title")}>Trending Posts</h1>
        <i className={cx("fas", "fa-chevron-left","prev")} onClick={() => slider?.current?.slickPrev()}></i>
        <i className={cx("fas", "fa-chevron-right","next")} onClick={() => slider?.current?.slickNext()}></i>
        <div className={cx("post-wrapper")}>
        <Slider ref={slider} {...settings}>
          <div className={cx("post")}>
            <img src={api_url+"/images/news/news1.png"} alt="" className={cx("slider-image")} />
            <div className={cx("post-info")}>
              <h4><a href="#">One day your life whill flash before your eyes</a></h4>
              <i className={cx("far", "fa-user")}>  Duc Huy</i>
              &nbsp;
              <i className={cx("far", "fa-calendar")}>  12/02/2023</i>
            </div>
          </div>
          </Slider>
        </div>
      </div>
      {/*//Post Slider*/}

      {/* Content */}
      <div className={cx("content-news","clearfix")}>
        {/* MAIN CONTENT */}
        <div className={cx("main-content-news")}>
          <h1 className={cx("recent-post-tittle")}>Recent Post</h1>
          <div className={cx("post")}>
            <img src={api_url+"/images/news/news1.png"} alt="" className={cx("post-image")} />
            <div className={cx("post-preview")}>
              <h1><Link to = {"/news/P01"}>Organic Farming: Promoting Healthier Soil, Food, And Environment</Link></h1>
              <i className={cx("far","fa-user")}>  Deepika M </i>
              <i className={cx("far","fa-calendar","calendar")}>  May 4, 2023</i>
              <p className={cx("preview-text")}>
                Organic farming in India has witnessed a remarkable surge in recent years, positioning itself as an example of sustainable agricultural practices in the country. As concerns about...
              </p>
            </div>
          </div>
        </div>
        <SliderBar/>
        {/*//MAIN CONTENT*/}
      </div>
      {/* //Content */}
      {/* Pagination */}
      <ul className={cx("pagination")}></ul>
    </div>
  );
}

export default News;
