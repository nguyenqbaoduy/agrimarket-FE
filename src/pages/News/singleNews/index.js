import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './SingleNews.module.scss';
import classNames from 'classnames/bind';
import SliderBar from '../Slidebar'

const cx = classNames.bind(styles);
export default function SingleNews() {
    return (
        <div className={cx('page-wrapper')} id=''>
            {/* Content */}
            <div className={cx('content-news','clearfix')}>
                {/* MAIN CONTENT */}
                <div className={cx('main-content-news','single')}>
                    <h1 className={cx('post-title')}>Organic Farming: Promoting Healthier Soil, Food, And Environment</h1>
                    <h5 className={cx('post-detail')}>By Deepika | May 4,2023</h5>
                    <img src='./assets/image/news/news1.png' className={cx('post-image')} />
                    <div className={cx('post-content')}>
                        <p>Organic farming in India has witnessed a remarkable surge in recent years, positioning itself as an example of sustainable agricultural practices in the country. As concerns about food safety, environmental impact, and human health have grown, organic farming has emerged as a compelling alternative to conventional methods. The growing demand for organic produce, both within India and globally, presents a lucrative market opportunity. By transitioning to organic farming, you tap into this expanding market, potentially increasing your profitability and securing a sustainable future for your farm.</p>
                        <h3>Benefits of Organic Farming</h3>
                        <p>Organic farming practices promote soil health, reduce water pollution and preserve biodiversity.
                            It focuses on building and maintaining healthy soil through practices like composting, crop rotation, and cover cropping. This leads to improved soil fertility, structure, and nutrient content.
                            It prohibits the use of synthetic pesticides, herbicides, fertilizers, and genetically modified organisms (GMOs). As a result, organic produce is free from harmful chemical residues, making it safer for consumption and reducing health risks.
                            It provides habitats for a variety of beneficial insects, birds, and wildlife, which helps maintain a balanced ecosystem and promotes natural pest control.
                            It helps in conserving water resources and reducing soil erosion.
                            Organic farming practices, such as using organic matter and cover crops, help carbon sequestration in the soil and reduce greenhouse gas emissions which contribute to mitigating climate change.
                            It promotes the preservation of indigenous seeds, traditional crop varieties, and local farming knowledge, fostering agricultural diversity and cultural heritage.
                            The increasing demand for organic products offers farmers an opportunity to tap into a growing market, command premium prices for their organic produce, and potentially increase their profitability.
                            Additionally, organic farming can reduce the input costs associated with chemical fertilizers and pesticides.</p>
                        <h3>Organic Certification Process</h3>
                        <p>Are you engaged in organic farming and seeking guidance on navigating the organic certification process? Here are the step-by-step instructions to help you through the certification process:</p>
                        <p>Step 1: Familiarize Yourself with Organic Farming Practices</p>
                    </div>
                </div>
                {/* //MAIN CONTENT */}
                <SliderBar></SliderBar>
            </div>
            
            {/* //Content */}
            {/* Pagination */}
            <ul className={cx('pagination')}>
                {/* <li className='page-item previous-page disable'><a className='page-link' href='#'>Prev</a></li>
        <li className='page-item current-page active'><a className='page-link' href='#'>1</a></li>
        <li className='page-item dots'><a className='page-link' href='#'>...</a></li>
        <li className='page-item current-page'><a className='page-link' href='#'>5</a></li>
        <li className='page-item current-page'><a className='page-link' href='#'>6</a></li>
        <li className='page-item dots'><a className='page-link' href='#'>...</a></li>
        <li className='page-item current-page'><a className='page-link' href='#'>10</a></li>
        <li className='page-item next-page'><a className='page-link' href='#'>Next</a></li> */}
            </ul>
        </div>
    )
}