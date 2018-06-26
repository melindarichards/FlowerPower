import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Message from "./components/Message";
import HeaderScore from "./components/HeaderScore";
import HeaderHighScore from "./components/HeaderHighScore";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css"
import { SSL_OP_NETSCAPE_DEMO_CIPHER_CHANGE_BUG } from "constants";

class App extends React.Component {

state={
	score: 0,
	highScore: 0,
	message: "Click a flower to begin.",
	friends: friends.sort(() => Math.random() - 0.5) 
}

handleClick = (item) => {
	let stateArray = this.state.friends
	if (!item.clicked) {
		for (let index = 0; index < stateArray.length; index++) {
			if (stateArray[index].id === item.id) {
				stateArray[index].clicked = true
			}
		}
		let score = this.state.score+1;
		let highScore;
		if (score >= this.state.highScore) {
			highScore = score;
		} else {
			highScore = this.state.highScore;
		}
		this.setState({
			score:score,
			highScore:highScore,
			message: "You got a point!",
			friends: stateArray.sort(() => Math.random() - 0.5)
		})
	}
	else {
		for (let index = 0; index < friends.length; index++) {
			friends[index].clicked = false
		}
		this.setState({
			score: 0,
			highScore:(this.state.score),
			message: "You already clicked this tile. Time to start over!",
			friends: friends.sort(() => Math.random() - 0.5)
		})
	}
}
componentDidUpdate(){console.log(this.state)}

render() {
	return (
		<div>
		<Wrapper>
			<div id="dashboard">
			<Title className="title">Flower Power!</Title>

			<Message className="message">{this.state.message}</Message>
<div id="score-wrapper">
			<HeaderScore className="headerscore">Score= {this.state.score}</HeaderScore>

			<HeaderHighScore className="headerhighscore">High Score= {this.state.highScore}</HeaderHighScore>
			</div>
</div>

			{this.state.friends.map(item => {
				return (
					<FriendCard
						key={item.id}
						id={item.id}
						image={item.image}
						name={item.name}
						// shuffle={this.shuffle}
						handleClick={() => {this.handleClick(item)}}
					/>
				)
			})}
		</Wrapper>
		</div>
		)
	}
};

export default App;
