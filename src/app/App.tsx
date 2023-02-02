import React, {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const App = () => {
const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main !!</Link>
            <Link to={'/about'}>About !!</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;