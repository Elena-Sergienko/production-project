import React, { Suspense } from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import AppRouter from "./providers/router/ui/AppRouter";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTranslation} from "react-i18next";

const Component = () => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
    }

    return (
        <div>
            <button onClick={toggle}>{t('Translate')}</button>
            {t('Test example')}
        </div>
    )
}

// lesson 15 - 11:20

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <Suspense fallback="">
            <Navbar/>
                <Component/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
            </Suspense>
        </div>
    );
};

export default App;