import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<>
			<ul>
				<Link to="/Leaderboard"><li>리더보드</li></Link>
				<Link to="/Aya"><li>아야 사이트</li></Link>
			</ul>
		</>
	);
};

export default Home;