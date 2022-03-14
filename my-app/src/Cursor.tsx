import './App.css';
import React, { useEffect, useState, useRef, MouseEvent } from 'react';
import "styled-components";

type CustomMouseEvent = MouseEvent<HTMLElement>

export default function Cursor() {

    const [click, setClick] = useState<boolean>(false);
    const [check, setCheck] = useState<boolean>(false);
    const [cursorX, setCusorX] = useState<number>(0);
    const [cursorY, setCusorY] = useState<number>(0);


    const onClick = () => {
        setClick(!click);
    }

    const clickHander = (e: CustomMouseEvent) => {
        console.log(e);
    }


    
    let mouseCursor = document.querySelector(".cursor");
    
    // 커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴;
    function cursor() {

    //     mouseCursor.style.left = e.pageX + "px";
    //     mouseCursor.style.top = e.pageY + "px";

    //     setCursorXY({
    //         cursorX: cursorX.concat(e.pageX),
    //         cursorY: cursorY.concat(e.pageY),
    //     })
    }

    useEffect(() => {
        // (() => {
        //     setCheck(true);

        //     // window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
            // window.addEventListener("scroll", cursor);
            // window.addEventListener("mousemove", cursor);
        //     window.addEventListener("mouseover", cursor);

        // })();

        // return () => {
        //     window.removeEventListener("scroll", cursor);
        //     window.removeEventListener("mousemove", cursor);
        //     window.addEventListener("mouseover", cursor);
        // };
        
    })


    return (
        <>
            <div className="cursor" onClick={clickHander}/>
            {/* <svg>
                <polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"
                    stroke="red" fill="transparent" stroke-width="3" />
            </svg> */}
        </>
    );
}
