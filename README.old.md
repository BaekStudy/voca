# React 기초 개념 배우는 순서

1. JSX 및 콤퍼넌트 개념 , 나는 스타일드 콤퍼넌트 배우기
2. state 개념 => useState 훅
3. props 개념 콤포넌트에 속성 주입시키기
4. map문을 통해서 데이터 렌더링 뿌리기
5. 리액트 router 적용하는법 배우기 => 앞으로 프로젝트 진행할떄는 라우터 부터 잡고 진행하는 기초 설정을 하자

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Page1, Page2, NotFound } from "../pages";
import { Header } from ".";

const Router = () => {
return (
<BrowserRouter>

<Header />
<Routes>
<Route path="/" element={<Main />} />
<Route path="/page1/_" element={<Page1 />} />
<Route path="/page2/_" element={<Page2 />} />
<Route path="/\*" element={<NotFound />} />
</Routes>
</BrowserRouter>
);
};

export default Router;

import React from "react";
import { Link, Routes, Route, Outlet } from "react-router-dom";
import WebPost from "./WebPost";

const Web = () => {
return (

<div>
<h1>This is Web</h1>
<ul>
<li>
<Link to="1">Post #1</Link>
</li>
<li>
<Link to="2">Post #2</Link>
</li>
<li>
<Link to="3">Post #3</Link>
</li>
<li>
<Link to="4">Post #4</Link>
</li>
</ul>

      <Outlet />
    </div>

);
};

export default Web;

6. API콜 배우기
7. 각종 훅 배우기 , useEffect 배우기 , useContext ,useRef 등등 useHistory 등의 각종 훅
8. 리덕스 상태관리 배우기 , 나는 주스턴트로 배우기
9. 타입스크립트 때되면 배우기
