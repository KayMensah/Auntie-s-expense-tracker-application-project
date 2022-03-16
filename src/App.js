// import logo from './logo.svg';

import AddTransction from "./components/AddTransction";
import Header from "./components/Header";
import History from "./components/History";

function App() {
    return (
        <div className="container">
            <Header />
            <History />
            <AddTransction />
        </div>
    );
}

export default App;
