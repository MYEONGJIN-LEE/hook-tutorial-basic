import React, { useCallback, useMemo, useRef, useState } from "react";

/*
[useMemo, useCallback,useRef]
useCallback 은 결국 useMemo 에서 함수를 반환하는 상황에서 더 편하게 사용 할 수 있는 Hook 입니다.
숫자, 문자열, 객체 처럼 일반 값을 재사용하기 위해서는 useMemo 를, 그리고 함수를 재사용 하기 위해서는 useCallback 을 사용하세요
*/

const getAverage = (numbers) => {
    console.log("평균값 계산중");
    if (numbers.length === 0) {
        return 0;
    }

    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
};

const Average = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);

    // 컴포넌트가 처음렌더링 될 때만 함수 생성
    const onChange = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    // const onChange = (e) => {
    //     setNumber(e.target.value);
    // };

    // number 혹은 list가 바뀌었을때만 함수 생성
    const onInsert = useCallback(
        (e) => {
            const nextList = list.concat(Number(number));
            setList(nextList);
            setNumber("");
            inputEl.current.focus();
        },
        [number, list]
    );

    // const onInsert = (e) => {
    //     const nextList = list.concat(Number(number));
    //     setList(nextList);
    //     setNumber("");
    // };

    const avg = useMemo(() => getAverage(list), [list]);

    return (
        <div>
            <div>
                <input value={number} onChange={onChange} ref={inputEl} />
                <button onClick={onInsert}>등록</button>
                <ul>
                    {list.map((value, index) => (
                        <li key={index}>{value}</li>
                    ))}
                </ul>
            </div>
            <div>
                <b>평균 값: </b> {avg}
            </div>
        </div>
    );
};

export default Average;
