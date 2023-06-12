import { useState } from "react";
import "./App.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import useClipboard from "react-use-clipboard"; //

function App() {
  const [text, setText] = useState();

  const [isCopied, setCopied] = useClipboard(text); //

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className="container">
        <h1>Speech to text converter</h1>
        <p>Convert spoken audio into text</p>

        <div className="main-container" onClick={() => setText(transcript)}>
          {transcript}
        </div>
        <p>please hit this box before copying to text👆</p>
        <div className="btns">
          <button onClick={setCopied}>
            {isCopied ? "copied" : "Copy to clipboard"}
          </button>

          <button onClick={startListening}>Start listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stope listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
