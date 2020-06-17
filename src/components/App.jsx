import React, {useState, useEffect} from 'react';
import { HashRouter, Route, NavLink } from 'react-router-dom';
import Layout from './Layout';
import Presentation from './Presentation';
import WorksContainer from './WorksContainer';
import Competences from './Competences';
import Formations from './Formations';
import { Button } from './styles';

const App = (props) => {
    
    const {resume} = props;
    // console.log("resume", resume)
    const [width, setWidth] = useState(window.innerWidth);
    const updateWidth = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);
    
    return(
        <HashRouter>
            <nav className="nav">
                <NavLink exact to="/CVFL"><Button primary>Home</Button></NavLink>
                <NavLink to="jobs"><Button primary>Jobs</Button></NavLink>
                <NavLink to="skills"><Button primary>Competences</Button></NavLink>
                <NavLink to="education"><Button primary>Formations</Button></NavLink>
            </nav>
            <Layout {...props} width={width} >
                
                <Presentation basics={resume.basics} width={width} />
               
                <Route
                    exact path="/jobs"
                    render={() => <WorksContainer jobs={resume.work} width={width} />}
                />
                <Route
                    exact path="/skills"
                    render={() => <Competences skills={resume.skills} width={width} />}
                />
                <Route
                    exact path="/education"
                    render={() => <Formations education={resume.education} width={width} />}
                />
            </Layout>
        </HashRouter>
    );
};

export default App;