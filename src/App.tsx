import { useState, useContext } from 'react';
import { OpenAIContext } from './ctx/openai';
import './App.css'
import 'papercss';

const models = ['text-curie-001', 'text-babbage-001', 'text-ada-001', 'davinci', 'curie', 'babbage', 'ada'];

function App() {
  const { setApiKey, setModel, onSubmit, choices } = useContext(OpenAIContext);
  const [pgn, setPgn] = useState('rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR b KQkq f3 0 2');
  return (
    <div className="paper container container-xs">
      <h2>Narrate Your Chess Like A Pro</h2>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="openai-apikey">OpenAI API KEY</label>
            <input className="input-block" type="text" id="openai-apikey" onChange={(e) => setApiKey(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="language-models">Select Language Model</label>
            <select id="language-models" onChange={(e) => setModel(e.target.value)}>
              {models.map((model) => {
                return <option key={model} value={model}>{model}</option>
              })}
            </select>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="notation-input">Notations</label>
            <textarea
              id="notation-input"
              defaultValue={pgn}
              className="input-block"
              placeholder="PGN"
              rows={3}
              onChange={(e) => setPgn(e.target.value)}></textarea>
          </div>
        </div>
      </div>
      <div className="row">
        <button className="btn-block" onClick={() => { onSubmit(pgn) }}>Submit</button>
      </div>
      <div className="row">
        <div className="col-12">
          <article className='article'>
            <h3>Response</h3>
            <div className="form-group">
              <textarea name="response" id="" className='input-block' value={choices.map((choice) => choice.text).join('"')} rows={3}></textarea>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default App
