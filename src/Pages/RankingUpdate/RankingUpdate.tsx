import React, { useState } from "react";
import { updateRankings, RankData } from "../../utils/rankingUtils";

const AddRanking: React.FC = () => {
  const [rankings, setRankings] = useState<RankData[]>([]);

  const addRanking = () => {
    // 이름 입력
    const rank_name = prompt("이름을 입력하세요");
    if (rank_name === null || rank_name.trim() === "") {
      alert("이름 입력이 취소되거나 비어 있습니다.");
      return;
    }

    // 점수 입력
    const rank_score = prompt("점수를 입력하세요");
    if (rank_score === null || rank_score.trim() === "" || isNaN(Number(rank_score))) {
      alert("점수 입력이 취소되었거나 잘못된 값입니다.");
      return;
    }

    const newRank = { name: rank_name, score: Number(rank_score) };

    // 랭킹 업데이트
    const updatedRankings = updateRankings(newRank);
    setRankings(updatedRankings);

    alert("랭킹이 업데이트되었습니다.");
  };

  return (
    <div>
      <button onClick={addRanking}>랭킹 추가</button>
      <h3>현재 랭킹</h3>
      <ol>
        {rankings.map((rank, index) => (
          <li key={index}>
            {rank.name}: {rank.score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default AddRanking;
