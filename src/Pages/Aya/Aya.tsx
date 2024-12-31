import React, { useEffect, useState } from "react";

const Aya: React.FC = () => {

    const [AyaCount, setAyaCount] = useState<number>(0);

    const AyaButton = () => {
        setAyaCount(AyaCount + 1);
    }

  return (
    <>
        <h1>{AyaCount} 아야!</h1>
        <p>준기는 남자를 좋아해요. 잘생긴남자들은 준기에게 디엠을 주세요 여자는 말고요!</p>
        <button onClick={AyaButton}>아야!</button>
    </>
  );
};

export default Aya;
