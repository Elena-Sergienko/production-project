import React, {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";

// lesson 13 - 13:08

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>
    );
};

export default App;