- Provider을 사용하면 Context의 value를 변경할 수 있습니다.

```js
import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;

```
<br />

기존에 createContext함수를 사용할 때 파라미터로 COntext의 기본값을 넣어주었는데,이 기본값은 Provider를 사용하지 않을 때만 사용됩니다.<br/>
`만약 Provider을 사용했는데 value를 명시하지 않았다면, 이 기본값을 사용하지 않기 떄문에 오류가 발생합니다.`<br />

- 오류가 발생하는 코드

```js
import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    <ColorContext.Provider>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;

```
<br/>

### Provider를 사용할 때는 value값을 명시해주어야 제대로 작동한다는 것을 꼭 기억해주세요!!