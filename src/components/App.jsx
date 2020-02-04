import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Layout from './Layout';
import Presentation from './Presentation';
import WorksContainer from './WorksContainer';
import Competences from './Competences';
import Formations from './Formations';
import { Button } from './styles';

const App = (props) => {
    
    const {resume} = props;
    // console.log("resume", resume)
    
    return(
        <BrowserRouter>
            <nav className="nav">
                <NavLink exact to="."><Button primary>Home</Button></NavLink>
                <NavLink to="jobs"><Button primary>Jobs</Button></NavLink>
                <NavLink to="skills"><Button primary>Compétences</Button></NavLink>
                <NavLink to="education"><Button primary>Formations</Button></NavLink>
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
                <Route
                    exact path="/education"
                    render={() => <Formations education={resume.education} />}
                />
            </Layout>
        </BrowserRouter>
    );
};

export default App;