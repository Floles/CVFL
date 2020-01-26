import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Layout from './Layout';
import Presentation from './Presentation';
import WorksContainer from './WorksContainer';
import Competences from './Competences';

const App = (props) => {
    
    const {resume} = props;
    // console.log("resume", resume)
    
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink exact to="." className="nav__btn">Home</NavLink>
                <NavLink to="jobs" className="nav__btn">Jobs</NavLink>
                <NavLink to="skills" className="nav__btn">Compétences</NavLink>
            </nav>
            <Layout {...props}>
                
                <Presentation basics={resume.basics} />
               
                <Route
                    exact path="/jobs"
                    render={() => <WorksContainer jobs={resume.work} />}
                />
                <Route
                    exact path="/skills"
                    render={() => <Competences skills={resume.skills} />}
                />
            </Layout>
        </BrowserRouter>
    );
};

export default App;