import Header from '../components/header';
import Main from '../components/main';
import About from '../components/abouts';
import Works from '../components/works';
import ToyProjects from '../components/toyProjects';
import { useEffect, useState } from 'react';
import { useScroll } from '../utils/hooks/useScroll';

const Home = () => {
    const [headerActiveIndex, setHeaderActiveIndex] = useState(0);
    const {scrollY} = useScroll();
    const [aboutOffsetTopValue, setAboutOffsetTopValue] = useState();
    const [worksOffsetTopValue, setWorksOffsetTopValue] = useState();
    const [toyProjectsOffsetTopValue, setToyProjectsOffsetTopValue] = useState();
    function onClickNavHandler(index) {
        const scrollTopValue = [0, aboutOffsetTopValue, worksOffsetTopValue, toyProjectsOffsetTopValue];
        window.scrollTo(
            {
                top: scrollTopValue[index],
                behavior: "smooth"
            }
        )
    };

    function offsetTopAbout (offsetTop) {
        setAboutOffsetTopValue(offsetTop);
    };

    function offsetTopWorks (offsetTop) {
        setWorksOffsetTopValue(offsetTop);
    };

    function offsetTopToyProjects (offsetTop) {
        setToyProjectsOffsetTopValue(offsetTop);
    };

    useEffect(() => {
        // offsetTopAbout.offsetTop
        if (scrollY < aboutOffsetTopValue) {
            setHeaderActiveIndex(0);
        } else if (scrollY >= aboutOffsetTopValue && scrollY < worksOffsetTopValue) {
            setHeaderActiveIndex(1);
        } else if (scrollY >= worksOffsetTopValue && scrollY < toyProjectsOffsetTopValue) {
            setHeaderActiveIndex(2);
        } else if (scrollY >= toyProjectsOffsetTopValue) {
            setHeaderActiveIndex(3);
        }
    }, [scrollY]);

    return (
        <>
            <Header headerActiveIndex={headerActiveIndex} onClickNavHandler={onClickNavHandler} />
            <Main />
            <About offsetTopAbout={offsetTopAbout} />
            <Works offsetTopWorks={offsetTopWorks} />
            <ToyProjects offsetTopToyProjects={offsetTopToyProjects} />
        </>
    );
}

export default Home;