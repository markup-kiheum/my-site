import Header from '../components/header';
import Main from '../components/main';
import About from '../components/abouts';
import Works from '../components/works';
import ToyProjects from '../components/toyProjects';
import { useEffect, useState } from 'react';
import { useScroll } from '../utils/hooks/useScroll';
import { useResize } from '../utils/hooks/useResize';

const Home = () => {
    const [headerActiveIndex, setHeaderActiveIndex] = useState(0);
    const {scrollY} = useScroll();
    const {resize} = useResize();
    const [aboutOffsetTopValue, setAboutOffsetTopValue] = useState();
    const [worksOffsetTopValue, setWorksOffsetTopValue] = useState();
    const [toyProjectsOffsetTopValue, setToyProjectsOffsetTopValue] = useState();
    function onClickNavHandler(index) {
        const scrollTopValue = [0, aboutOffsetTopValue, worksOffsetTopValue, toyProjectsOffsetTopValue];
        window.scrollTo(
            {
                top: scrollTopValue[index],
                behavior: 'smooth'
            }
        )
    };

    const offsetTopAbout = (offsetTop) => setAboutOffsetTopValue(offsetTop);

    const offsetTopWorks = (offsetTop) => setWorksOffsetTopValue(offsetTop);

    const offsetTopToyProjects = (offsetTop) => setToyProjectsOffsetTopValue(offsetTop);

    useEffect(() => {
        if (scrollY < aboutOffsetTopValue) {
            setHeaderActiveIndex(0);
        } else if (scrollY >= aboutOffsetTopValue && scrollY < worksOffsetTopValue) {
            setHeaderActiveIndex(1);
        } else if (scrollY >= worksOffsetTopValue && scrollY < toyProjectsOffsetTopValue) {
            setHeaderActiveIndex(2);
        } else if (scrollY >= toyProjectsOffsetTopValue) {
            setHeaderActiveIndex(3);
        }
    }, [scrollY, resize]);

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