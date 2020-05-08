import React, { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

import { HomePageContainer } from './homepage.styles'

const HomePage = () => (
    <HomePageContainer>
        <Profiler id="Directory" onRender={(id, phase, actualDirection) => {
            console.log({id, phase, actualDirection});
        }}>
            <Directory />
        </Profiler>
    </HomePageContainer>
);

export default HomePage;