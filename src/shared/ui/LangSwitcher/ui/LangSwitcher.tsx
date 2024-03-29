import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <div>
            <Button
                className={classNames('', {}, [className])}
                theme={ButtonTheme.CLEAR}
                onClick={toggle}
            >
                {t(short ? 'Short Lang' : 'Language')}
            </Button>
        </div>
    );
};
