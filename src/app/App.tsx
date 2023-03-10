import React, { Suspense } from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";



// lesson 16 completed

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Suspense fallback="">
            <Navbar/>
                <LangSwitcher/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
            </Suspense>
        </div>
    );
};

export default App;