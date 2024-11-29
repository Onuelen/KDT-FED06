import React from "react";
import { ReviewData } from "@/types";
import style from "./review-item.module.css";
import ReviewItemDeleteButtton from "./review-item-delete-buttton";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div className={style.container}>
      <div className={style.author}>{author}</div>
      <div className={style.content}>{content}</div>
      <div className={style.bottom_container}>
        <div className={style.date}>{new Date(createdAt).toLocaleString()}</div>
        <div className={style.delete_btn}>
          <ReviewItemDeleteButtton reviewId={id} bookId={bookId} />
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
