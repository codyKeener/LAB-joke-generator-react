import { Button } from 'react-bootstrap';
import { useState } from 'react';
import getJoke from './jokeData';

export default function Jokes() {
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [buttonText, setButtonText] = useState('Get a Joke');

  const handleClick = (bt) => {
    const text = bt.buttonText;

    switch (text) {
      case 'Get a Joke':
        setButtonText('Get Punchline');
        getJoke().then((data) => {
          setSetup(data.setup);
          setPunchline(data.delivery);
        });
        break;
      case 'Get Punchline':
        setButtonText('Get Another Joke');
        document.querySelector('#punchline-div').toggleAttribute('hidden');
        break;
      case 'Get Another Joke':
        setButtonText('Get Punchline');
        getJoke().then((data) => {
          setSetup(data.setup);
          setPunchline(data.delivery);
          document.querySelector('#punchline-div').toggleAttribute('hidden');
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h1>Joke Generator</h1>
      <div>{setup}</div>
      <div id="punchline-div" hidden>{ punchline }</div>
      <Button onClick={() => handleClick({ buttonText })}>{buttonText}</Button>
    </>
  );
}
