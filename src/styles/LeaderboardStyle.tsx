import styled from 'styled-components';

export const _Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #444444;
  color: #fff;
  border:none;
  border-radius:10px;
  position: absolute;
  left: 79%;
  top: 10%;
  font-size: 20px;
`;

export const __Button = styled.button`
  width: 120px;
  height: 40px;
  background-color: #444444;
  color: #fff;
  border:none;
  border-radius:10px;
  position: absolute;
  left: 87%;
  top: 10%;
  font-size: 20px;
`;

export const Table = styled.table`
  border-collapse: collapse;
  background-color: #121212; /* 다크 모드 배경색 */
  color: #ffffff; /* 텍스트 색상 */
  border: 1px solid #ffffff; /* 테두리 흰색 */

  th,
  td {
    border: 1px solid #ffffff; /* 셀 간의 테두리 흰색 */
  }
`;

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
`;

export const Rank = styled.td`
  width: 100px;
  height: 50px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const Name = styled.td`
  width: 350px;
  height: 50px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const Score = styled.td`
  width: 350px;
  height: 50px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const RankValue = styled.td`
  width: 100px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const NameValue = styled.td`
  width: 350px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const ScoreValue = styled.td`
  width: 350px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const _1st = styled.td`
  background-color: #bf9000;
  width: 100px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const _2nd = styled.td`
  background-color: #999999;
  width: 100px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;

export const _3rd = styled.td`
  background-color: #AD7459;
  width: 100px;
  height: 70px;
  text-align: center;
  border: 1px solid #000;
  vertical-align: middle;
  font-size: 20px;
`;
