import Scores from "./components/Scores.jsx"
import Headering from "./components/Header.jsx";
import { ENGLISH_RESULTS, HTML_RESULTS, JAVA_RESULTS, PYTHON_RESULTS } from "./data.js";
function App() {
  return (
    <>
      <Headering />
      <main className="scores-container">
      <Scores CourseName="HTML" results={HTML_RESULTS}/>
      <Scores CourseName="Java" results={JAVA_RESULTS}/>
      <Scores CourseName="Python" results={PYTHON_RESULTS}/>
      <Scores CourseName="English" results={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}
export default App;
