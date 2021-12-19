import * as React from 'react';
import Main from './components/Main';
import Theme from './components/Theme/Theme';
export const GetStore=React.createContext<Store>({theme:"light"});

const App: React.FC<any> = (props) => {
  const [theme,setTheme]=React.useState<"light"|"dark">("light");
  const getTheme=(data:"light"|"dark")=>{
     setTheme(data);
  };
  return (
    <>
      <GetStore.Provider value={{changeTheme:getTheme,theme:theme}}>
      <Theme>
        <Main />
      </Theme>
      </GetStore.Provider>
    </>
  );
};

export default App;
