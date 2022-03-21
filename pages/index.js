import Header from '../components/header';
import Main from '../components/main';
import About from '../components/abouts';
import Works from '../components/works';
import ToyProjects from '../components/toyProjects';
import { useEffect, useState } from 'react';
import { useScroll } from '../utils/hooks/useScroll';

const Home = () => {
    const [headerActiveIndex, setHeaderActiveIndex] = useState();
    const {scrollY} = useScroll();
    function onClickNavHandler() {
        console.log("clicked nav");
    };

    // function offsetTopAbout () {
    //     console.log('about click');
    // };

    return (
        <>
            <Header headerActiveIndex={headerActiveIndex} onClickNavHandler={onClickNavHandler} />
            <Main />
            <About />
            <Works />
            <ToyProjects />
        </>
    );
}

export default Home;