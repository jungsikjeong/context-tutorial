components>ColorBox.js
```js
import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
      {(value) => (
        <div
          style={{ width: "64px", height: "64px", background: value.color }}
        />
      )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
```

<br />

App.js

```js
import React from "react";
import "./App.css";
import ColorBox from "./components/ColorBox";

function App() {
  return (
    <div>
      <ColorBox />
    </div>
  );
}

export default App;
```

<br />

- Consumer 사이에 중괄호를 열어서 그 안에 함수를 넣어주었습니다. 이러한 패턴을 `Function as a child`혹은, `Render Props` 라고 합니다. 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이아닌 함수를 전달하는 것이죠. <br />
  
### 잠깐! Render Props 패턴을 정확히 알고가자!
> [Render Props란?](https://velog.io/@wndtlr1024/Render-Props-%EC%98%88%EC%A0%9C)


