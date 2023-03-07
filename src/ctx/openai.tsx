import { createContext, useState, ReactNode } from 'react';
// import { Configuration, OpenAIApi } from 'openai';
import { query } from '../utils';
interface Props {
  children: ReactNode;
}

interface OpenAIContextProps {
  choices: any[];
  apiKey: string;
  model: string;
  setApiKey: (apiKey: string) => void;
  setModel: (model: string) => void;
  onSubmit: (pgn: string) => void;
}

export const OpenAIContext = createContext<OpenAIContextProps>({} as OpenAIContextProps);

const OpenAIContextProvider = ({ children }: Props) => {

  const [apiKey, setApiKey] = useState('');
  const [model, setModel] = useState('');
  const [choices, setChoices] = useState<any[]>([]);
  const onSubmit = async (pgn: string) => {
    console.log(`>>>${pgn}>>>${apiKey}>>>${model}>>>`);
    const prompt = `narate this chess round in English: ${pgn}`;
    const response = await query(apiKey, {
      prompt,
      model
    });
    setChoices(response.choices);
  };
  return (
    <OpenAIContext.Provider value={{
      apiKey,
      model,
      choices,
      setApiKey,
      setModel,
      onSubmit,
    }}>
      {children}
    </OpenAIContext.Provider>
  );
};

export default OpenAIContextProvider;