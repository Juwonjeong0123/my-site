import React, { useEffect, useState } from "react";
import { getRankingsFromLocalStorage, updateRankings, RankData } from "../../utils/rankingUtils"; // 유틸 함수 임포트
import {
  Button,
  Table,
  TableContainer,
  Title,
  Rank,
  Name,
  Score,
  RankValue,
  NameValue,
  ScoreValue,
  _1st,
  _2nd,
  _3rd,
} from "../../styles/LeaderboardStyle";

const Leaderboard: React.FC = () => {
  const [rankings, setRankings] = useState<RankData[]>([]);

  useEffect(() => {
    // 로컬 스토리지에서 랭킹 데이터 가져오기
    const storedRankings = getRankingsFromLocalStorage();
    setRankings(storedRankings);
  }, []);

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
    <>
      <Button onClick={addRanking}>랭킹 추가</Button>
      <Title>카지노 순위</Title>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <Rank scope="col">순위</Rank>
              <Name scope="col">이름</Name>
              <Score scope="col">점수</Score>
            </tr>
          </thead>
          <tbody>
            {/* 1위부터 3위까지는 특별한 스타일을 적용 */}
            {rankings.slice(0, 3).map((rank, index) => (
              <tr key={index}>
                {index === 0 ? (
                  <_1st>1위</_1st>
                ) : index === 1 ? (
                  <_2nd>2위</_2nd>
                ) : (
                  <_3rd>3위</_3rd>
                )}
                <NameValue>{rank.name}</NameValue>
                <ScoreValue>{rank.score}</ScoreValue>
              </tr>
            ))}
            {/* 나머지 순위는 RankValue 스타일을 적용 */}
            {rankings.slice(3, 5).map((rank, index) => (
              <tr key={index + 3}>
                <RankValue>{index + 4}위</RankValue>
                <NameValue>{rank.name}</NameValue>
                <ScoreValue>{rank.score}</ScoreValue>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Leaderboard;
