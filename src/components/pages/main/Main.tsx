import React from 'react';
import {Link} from "react-router-dom";
import LanguageSelect from "../../UI/select/LanguageSelect";
import MainHeader from "../../UI/header/MainHeader";
import MainSection from "../../UI/main/MainSection";
import { useTranslation } from 'react-i18next';
import {useWindowSize} from "../../../hooks/useWindowSize";

const Main: React.FC = () => {
    const {t} = useTranslation('main');
    const [screenWidth] = useWindowSize();
    return (
        <div className={'w-screen h-screen'}>
            <MainHeader>
                <div className={'flex items-center'}>
                    LOGO
                </div>
                <div className={'flex gap-5 s:gap-1 items-center'}>
                    <LanguageSelect disableUnderline textAlign={'right'}/>
                    <Link to={'/login'} className={'transition-all hover:opacity-80 s:px-1 s:py-1 s:rounded-lg s:font-medium'}>
                        {t('signInLink', {ns: 'main'})}
                    </Link>
                    {screenWidth > 590
                        &&
                        <Link to={'/registration/start'}
                            className={'bg-mediumBlue text-coolWhite font-semibold tracking-wide text-center px-5 py-2 rounded-lg transition-all hover:bg-opacity-80'}>
                            {t('getStartedLink', {ns: 'main'})}
                        </Link>}
                </div>
            </MainHeader>

            <MainSection className={'bg-gradient-to-b from-transparent to-lightBlue/50'}>
                <section className={'h-full flex items-center justify-center'}>
                    <div className={'flex flex-col items-center w-2/5 sm:w-3/5 s:w-3/5 text-center gap-5'}>
                        <h1 className={'text-6xl font-bold leading-12 sm:text-5xl s:text-4xl'}>
                            {t('title', {ns: 'main'})}
                        </h1>
                        <h2 className={'font-medium text-xl sm:text-lg s:text-sm'}>
                            {t('description', {ns: 'main'})}
                        </h2>
                        <Link to={'/registration/start'}
                              className={'bg-mediumBlue text-coolWhite font-semibold tracking-wide text-center px-8 py-2 rounded-lg transition-all hover:bg-opacity-80'}>
                            {t('getStartedLink', {ns: 'main'})}
                        </Link>
                    </div>
                </section>
            </MainSection>
        </div>
    );
};

export default Main;