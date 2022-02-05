import React from 'react';
import {Route, Routes } from 'react-router-dom';
import {NavBar} from "./components/NavBar";
import {TodosPage} from "./Pages/TodosPage";
import {AboutPage} from "./Pages/AboutPage";

function App() {

    return (
        <>
            <NavBar/>
            <div className={'container'}>
                <Routes>
                    <Route path={'/'} element={<TodosPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
