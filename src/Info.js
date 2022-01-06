import React, { useEffect, useReducer, useState } from "react";

/*
[useState, useReducer]
*/
const reducer = (state, action) => {
    // return {
    //     ...state,
    //     [action.name]: action.value,
    // };
    switch (action.type) {
        case "onChangeName":
            return {
                ...state,
                name: action.name,
            };

        case "onChangeNickname":
            return {
                ...state,
                nickname: action.nickname,
            };

        default:
            return state;
    }
};

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        nickname: "",
    });

    const { name, nickname } = state;
    // const onChange = (e) => {
    //     dispatch(e.target);
    // };

    return (
        <div>
            <div>
                {/* <input name="name" value={name} onChange={onChange} /> */}
                {/* <input name="nickname" value={nickname} onChange={onChange} /> */}
                <input
                    value={name}
                    onChange={(e) =>
                        dispatch({
                            type: "onChangeName",
                            name: e.target.value,
                        })
                    }
                />
                <input
                    value={nickname}
                    onChange={(e) =>
                        dispatch({
                            type: "onChangeNickname",
                            nickname: e.target.value,
                        })
                    }
                />
            </div>
            <div>
                <div>
                    <b>이름: </b> {name}
                </div>
                <div>
                    <b>닉네임: </b> {nickname}
                </div>
            </div>
        </div>
    );
};

// const Info = () => {
//     const [name, setName] = useState("");
//     const [nickname, setNickname] = useState("");

//     useEffect(() => {
//         console.log("렌더링이 완료되었습니다.");
//         console.log({
//             name,
//             nickname,
//         });
//         return () => {
//             console.log("렌더링 직후 cleanUp");
//             console.log({
//                 name,
//                 nickname,
//             });
//         };
//     });

//     useEffect(() => {
//         console.log("마운트 될 때만 실행됩니다.");
//         return () => {
//             console.log("언마운트 직후 cleanUp");
//         };
//     }, []);

//     useEffect(() => {
//         console.log("name이 변경되었습니다 : " + name);
//     }, [name]);

//     useEffect(() => {
//         console.log("nickname이 변경되었습니다 : " + nickname);
//     }, [nickname]);

//     const onChangeName = (e) => {
//         setName(e.target.value);
//     };

//     const onChangeNickname = (e) => {
//         setNickname(e.target.value);
//     };

//     return (
//         <div>
//             <div>
//                 <input value={name} onChange={onChangeName} />
//                 <input value={nickname} onChange={onChangeNickname} />
//             </div>
//             <div>
//                 <div>
//                     <b>이름: </b> {name}
//                 </div>
//                 <div>
//                     <b>닉네임: </b> {nickname}
//                 </div>
//             </div>
//         </div>
//     );
// };

export default Info;
