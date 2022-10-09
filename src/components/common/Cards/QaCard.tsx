import { Card } from '@mui/material';
import React from "react";
import styles from "./QaCard.module.scss";

export interface QaCardProps {
  category: string;
  q: string;
  a: string;
  answers: string;
  likes: string;
}

const QaCard = ({ category, q, a, answers, likes }: QaCardProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>{category}</h1>
        <div className={styles.cardBody}>
          <div className={styles.paragraphWrapper}>
            <span className={styles.subject}>Q</span>
            <p className={styles.paragraph}>{q}</p>
          </div>
          <div className={styles.paragraphWrapper}>
            <span className={styles.subject}>A</span>
            <p className={styles.paragraph}>{a}</p>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <span>답변:{answers}</span>
          <span>좋아요:{likes}</span>
        </div>
      </div>
    </div>
  );
};

export default QaCard;
