import React from 'react';
import {Link} from "react-router-dom";
import LanguageSelect from "../../UI/select/LanguageSelect";
import MainHeader from "../../UI/header/MainHeader";
import MainSection from "../../UI/main/MainSection";

const Main: React.FC = () => {
    return (
        <div className={'w-screen h-screen'}>
            <MainHeader>
                <div className={'flex items-center'}>
                    LOGO TodoIg
                </div>
                <div className={'flex gap-5 items-center'}>
                    <LanguageSelect/>
                    <Link to={'/login'} className={'transition-all hover:opacity-80'}>
                        Sign in
                    </Link>
                    <Link to={'/registration/start'}
                          className={'bg-mediumBlue text-coolWhite font-semibold tracking-wide text-center px-5 py-2 rounded-lg transition-all hover:bg-opacity-80'}>
                        Get started
                    </Link>
                </div>
            </MainHeader>

            <MainSection>
                <section className={'h-full flex items-center justify-center'}>
                    <div className={'flex flex-col items-center w-2/5 text-center gap-5'}>
                        <h1 className={'text-6xl font-bold leading-12'}>
                            Organize your life in an easy way
                        </h1>
                        <h2 className={'font-medium text-xl'}>
                            TodoIg – helpful task manager. It will give you focus and help you to concentrate on all your tasks.
                        </h2>
                        <Link to={'/registration/start'}
                              className={'bg-mediumBlue text-coolWhite font-semibold tracking-wide text-center px-8 py-2 rounded-lg transition-all hover:bg-opacity-80'}>
                            Get started
                        </Link>
                    </div>
                </section>
            </MainSection>
        </div>
    );
};

export default Main;