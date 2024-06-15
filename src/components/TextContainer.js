import React, { useState } from "react";
import languages from "../languages";

export default function TextContainer(props) {
  const handleChange = (event) => {
    setFromText(event.target.value);
  };

  const [fromtext, setFromText] = useState("");
  const [translatetext, setTranslateText] = useState("");
  const [fromLanguage, setFromLanguage] = useState("en-GB");
  const [translateLanguage, setTranslateLanguage] = useState("en-GB");

  const handleTranslate = () => {
    let url = `https://api.mymemory.translated.net/get?q=${fromtext} World!&langpair=${fromLanguage}|${translateLanguage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTranslateText(data.responseData.translatedText);
      });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="mt-4 mb-4"style={{color : props.mode==="light"?"#000000": "#FFFFFF"}}>Enter text to translate</h2>
            <div>
              <textarea
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
                onChange={handleChange}
              />
            </div>
            <select
              class="form-select form-select-lg mb-3 mt-3 "
              aria-label=".form-select-lg example"
              style={{ width: "200px" }}
              value={fromLanguage}
              onChange={(e) => {
                setFromLanguage(e.target.value);
              }}
            >
              {Object.entries(languages).map(([code, name]) => (
                <option value={code} key={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6">
            <h2 className="mt-4 mb-4" style={{color : props.mode==="light"?"#000000": "#FFFFFF"}}>Translated text</h2>
            <div>
              <textarea
                readOnly
                value={translatetext}
                className="form-control"
                rows="8"
                style={{ width: "100%" }}
              />
            </div>
            <select
              class="form-select form-select-lg mb-3 mt-3 "
              aria-label=".form-select-lg example"
              style={{ width: "200px" }}
              value={translateLanguage}
              onChange={(e) => setTranslateLanguage(e.target.value)}
            >
              {Object.entries(languages).map(([code, name]) => (
                <option value={code} key={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-lg btn-primary"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
    </>
  );
}
