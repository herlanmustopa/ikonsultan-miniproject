import "./App.css";

import DataList from "./context/DataList";
import { DataProvider } from "./context/DataContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailsList from "./context/DetailList";

function App() {
  return (
    <DataProvider>
      <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<DataList />} />
          <Route path="/details/:id" element={<DetailsList />} />
        </Routes>
      </div>
      </Router>
    </DataProvider>
  );
}

export default App;
