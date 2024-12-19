// utils/rankingUtils.ts
export type RankData = {
    name: string;
    score: number;
  };
  
  // 로컬 스토리지에서 랭킹 데이터 가져오기
  export const getRankingsFromLocalStorage = (): RankData[] => {
    const storedData = localStorage.getItem("__ranking");
    
    try {
      // 데이터를 JSON.parse()한 후 배열인지 확인
      const parsedData = JSON.parse(storedData || "[]");
      // 배열이 아닌 경우 빈 배열로 반환
      return Array.isArray(parsedData) ? parsedData : [];
    } catch (error) {
      console.error("로컬 스토리지에서 랭킹 데이터를 불러오는 중 오류가 발생했습니다.", error);
      return [];
    }
  };
  
  // 랭킹 데이터 저장
  export const saveRankingsToLocalStorage = (rankings: RankData[]) => {
    localStorage.setItem("__ranking", JSON.stringify(rankings));
  };
  
  // 랭킹 업데이트
  export const updateRankings = (newData: RankData): RankData[] => {
    let rankings = getRankingsFromLocalStorage();
  
    // 새 데이터 추가
    rankings.push(newData);
  
    // 점수 내림차순 정렬
    rankings.sort((a, b) => b.score - a.score);
  
    // 상위 5개 유지
    rankings = rankings.slice(0, 5);
  
    // 로컬 스토리지에 저장
    saveRankingsToLocalStorage(rankings);
  
    return rankings;
  };
  
  // 로컬 스토리지 초기화 (모든 데이터 삭제)
export const clearLocalStorage = () => {
  localStorage.clear();
};
