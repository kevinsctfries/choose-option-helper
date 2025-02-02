import "./App.css";
import ChooseOption from "./Components/ChooseOption/ChooseOption";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <h1>Old School RuneScape Choose Option Helper</h1>
      <ChooseOption />
      <div>
        <p>
          This tool is designed to help Old School RuneScape players visualize
          how their chosen username will appear in the 'Choose Option' menu
          before creating or renaming their character.
        </p>
        <p>
          I've done my best to replicate the in-game appearance as accurately as
          possible, but I apologize for any minor discrepancies.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default App;
