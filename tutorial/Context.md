Context를 만들 때 반드시 contexts디렉터리에 만들 필요는 없습니다. <br />
다만, 다른 파일과 구분하기 위해 따로 디렉터리를 만들었으며,추후 Context를 사용할 때는 마음대로 경로를 지정해도 됩니다.<br />
<br />

```js
import { createContext } from "react";


const ColorContext = createContext({ color: "black" });

export default ColorContext;
```

새 Context를 만들 때는 createContext함수를 사용하며, 파라미터에는 해당 Context의 기본 상태를 지정합니다.<br />