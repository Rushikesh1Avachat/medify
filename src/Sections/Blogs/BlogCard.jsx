import React from 'react';
import styles from './BlogCard.module.css';

export default function BlogCard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.image} className={styles.blogImg} alt="Blog Thumbnail" />
      
      <div className={styles.cardBody}>
        {/* Meta info: Category and Date */}
        <p className={styles.meta}>
          Medical <span>|</span> {data.date}
        </p>
        
        {/* Main Title */}
        <h4 className={styles.blogTitle}>{data.title}</h4>
        
        {/* Author Section */}
        <div className={styles.author}>
          <img src={data.authorImg} alt={data.authorName || "Author"} />
          <span>{data.authorName || "Rebecca Lee"}</span>
        </div>
      </div>
    </div>
  );
}