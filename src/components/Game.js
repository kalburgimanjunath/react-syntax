// import random from 'utils/random';
import React from 'react';
const random = (array) => array[Math.floor(Math.random() * array.length)];

export default function Game({ pairs, langA, langB }) {
  const synthRef = React.useRef(window.speechSynthesis);
  const [langAVoices, setLangAVoices] = React.useState([]);
  const [langBVoices, setLangBVoices] = React.useState([]);
  const [langAVoice, setLangAVoice] = React.useState(null);
  const [langBVoice, setLangBVoice] = React.useState(null);
  const [current, setCurrent] = React.useState(null);
  const [choices, setChoices] = React.useState([]);
  const [selected, setSelected] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => {
      const voices = synthRef.current
        .getVoices()
        .filter((voice) => !voice.name.includes('Google'));

      const filteredA = voices.filter(
        (voice) => voice.lang.substr(0, 2) === langA.code
      );
      setLangAVoices(filteredA);
      // setLangAVoice(random(filteredA));

      // const filteredB = voices.filter(
      //   (voice) => voice.lang.substr(0, 2) === langB.code
      // );
      // setLangBVoices(filteredB);
      // setLangBVoice(random(filteredB));
    }, 100);
  }, []);

  React.useEffect(() => {
    const all = pairs.flatMap(([valueA]) => [
      { lang: langA.code, value: valueA },
      // { lang: langB.code, value: valueB },
    ]);
    const sorted = all.sort(() => Math.random() - 0.5);
    setChoices(sorted);
  }, [pairs]);
  console.log(pairs);

  const isMatch = (valueA) =>
    pairs.some(([choiceA, choiceB]) => choiceA === valueA);

  const correct = () => {
    const words = ['Nice one!', 'You did it!', 'Impressive'];
    const utterThis = new SpeechSynthesisUtterance(random(words));
    utterThis.rate = 1.5;
    setTimeout(() => {
      synthRef.current.speak(utterThis);
    }, 1000);
  };

  const incorrect = () => {
    const words = ['Next time', 'Oops', 'Not quite', "Don't give up"];
    const utterThis = new SpeechSynthesisUtterance(random(words));
    utterThis.rate = 1.5;
    setTimeout(() => {
      synthRef.current.speak(utterThis);
    }, 1000);
  };

  const choose = (choice) => {
    const utterThis = new SpeechSynthesisUtterance(choice.value);
    utterThis.voice = choice.lang === langA.code ? langAVoice : langBVoice;
    synthRef.current.speak(utterThis);

    if (current) {
      if (isMatch(current.value, choice.value)) {
        // correct();
        setSelected((val) => ({ ...val, [choice.value]: true }));
        // } else {
        //   // incorrect();
        //   setSelected((val) => ({ ...val, [current.value]: false }));
      }
      setCurrent(null);
    } else {
      setSelected((val) => ({ ...val, [choice.value]: true }));
      setCurrent(choice);
    }
  };

  const reset = () => {
    setCurrent(null);
    setSelected({});
  };

  return (
    <>
      <h2 style={{ color: 'white' }}>Choose your accent</h2>
      <div className="languages" style={{ color: 'white' }}>
        <div className="voices">
          <div>{langA.name}:</div>
          {langAVoices.map((voice) => (
            <div key={voice.name}>
              <div
                onClick={() => {
                  setLangAVoice(voice);
                }}
                className={
                  langAVoice && langAVoice.name === voice.name ? 'selected' : ''
                }
              >
                {voice.name}
              </div>
            </div>
          ))}
        </div>
        {/* <div className="voices">
          <div>{langB.name}:</div>
          {langBVoices.map((voice) => (
            <div key={voice.name}>
              <div
                onClick={() => {
                  setLangBVoice(voice);
                }}
                className={
                  langBVoice && langBVoice.name === voice.name ? 'selected' : ''
                }
              >
                {voice.name}
              </div>
            </div>
          ))}
        </div> */}
      </div>

      <h2 style={{ color: 'white' }}>Choose the pairs</h2>

      <div className="choices" style={{ color: 'white' }}>
        {choices.map((choice) => (
          <div key={`${choice.lang}-${choice.value}`}>
            <div
              onClick={() => {
                choose(choice);
              }}
              className={
                current && current.value === choice.value ? 'selected' : ''
              }
              disabled={!!selected[choice.value]}
            >
              {choice.value}
            </div>
          </div>
        ))}
      </div>

      <button className="reset" onClick={() => reset()}>
        reset
      </button>
    </>
  );
}
