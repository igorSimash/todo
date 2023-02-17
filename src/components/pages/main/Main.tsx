import React from 'react';
import {Link} from "react-router-dom";

const Main = () => {
    return (
        <div className={'w-screen h-screen px-10'}>
            <header className={'w-full h-16 flex justify-between'}>
                <div>

                </div>
                <div className={'flex gap-4'}>
                    <Link to={'/login'} className={''}>Sign in</Link>
                    <Link to={'/registration/start'} className={'bg-blue-400 h-2/3'}>Sign up</Link>
                </div>
            </header>

            <main>

            </main>
        </div>
    );
};

export default Main;