import React from 'react';
import styles from './Slidebar.module.css';

function Slidebar() {
  return (
    <div className={styles.mainMenuHeader}>
      <div id="menu">
        <ul>
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/">Tin tức và bài viết</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Slidebar;
