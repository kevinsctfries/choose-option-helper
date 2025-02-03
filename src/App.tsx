import "./App.css";
import ChooseOption from "./Components/ChooseOption/ChooseOption";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <ChooseOption />
        <div className="info-text">
          <p>
            This tool is designed to help Old School RuneScape players visualize
            how their chosen username will appear in the 'Choose Option' menu
            before creating or renaming their character.
          </p>
          <p>
            I've done my best to replicate the in-game appearance as accurately
            as possible, but I apologize for any minor discrepancies.
          </p>
          <h2>But why does this exist?</h2>
          <p>Because I wanted a way to easily find "a q p" usernames.</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
