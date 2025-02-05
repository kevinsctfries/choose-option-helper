import { Helmet } from "react-helmet-async";
import "./App.css";
import ChooseOption from "./Components/ChooseOption/ChooseOption";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <>
      <Helmet>
        <title>Choose Option Helper | OSRS Tool</title>
        <meta
          name="description"
          content="Visualize how your username will appear in the 'Choose Option' menu in Old School RuneScape before creating or renaming your character."
        />
        <meta property="og:title" content="Choose Option Helper | OSRS Tool" />
        <meta
          property="og:description"
          content="Easily preview your username in the OSRS 'Choose Option' menu."
        />
        <meta
          property="og:image"
          content="https://kevinsctfries.github.io/choose-option-helper/og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://kevinsctfries.github.io/choose-option-helper/"
        />
      </Helmet>
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
