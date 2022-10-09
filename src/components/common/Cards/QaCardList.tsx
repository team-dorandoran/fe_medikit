import React from "react";
import QaCard, { QaCardProps } from "./QaCard";

interface QaCardListProps {
  qaList: QaCardProps[];
}

const QaCardList = ({ qaList }: QaCardListProps) => {
  const list = qaList.map(qa => (
    <QaCard
      key={qa.q + qa.a}
      category={qa.category}
      q={qa.q}
      a={qa.a}
      answers={qa.answers}
      likes={qa.likes}
    />
  ));

  return <>{list}</>;
};

export default QaCardList;
