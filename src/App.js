import "./App.css";
import CardInfo from "./components/CardInfo";

function App() {
	return (
		<div className="App">
			<CardInfo title="Budget" subtitle="$24,000" />
			<CardInfo title="TOTAL CUSTOMERS" subtitle="1,600" />
			<CardInfo title="TASKS PROGRESS" subtitle="75.5%" />
			<CardInfo title="TOTAL PROFIT" subtitle="$23,200" />
		</div>
	);
}

export default App;
