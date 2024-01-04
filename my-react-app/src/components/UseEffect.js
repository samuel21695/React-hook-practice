import React, {useEffect, useState} from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 count의 값을 localStorage에 저장합니다.
    console.log("렌더링 되었습니다.")
    localStorage.setItem("count", count);
  }, [count]);

  // localStrage 배열에서 가져오기
  console.log(localStorage.count);

  return (
    <div>
      <h1>카운터</h1>
      <p>현재 값: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
  
}

export default Counter