import React from 'react';
import { JobContainer } from './styles';

const Jobs = (props) => {

    const {details} = props

    return(
        <JobContainer>
            <div>
                <div className="job__header">
                    <h3>{details.company}</h3>
                    <h4>{details.position}</h4>
                </div>
          
                <div className="job__date">
                    {
                        details.current ? 
                            `Depuis ${details.startDate}` : 
                            `${details.startDate} à ${details.endDate}`
                    }
                </div>
          
                {
                    details.summary.length 
                        ? (
                            <p className="job__paragraph">
                                {details.summary}<br/>
                                <a href={`${details.website}`}>{details.website}</a>
                            </p>
                        ) : null
                }
                <ul className="job__list">
                    {
                        details.targets.map((target, index) => {
                            return <li key={index}>{target}</li>
                        })
                    }
                </ul>
                <ul className="job__list">
                    {
                        details.highlights.map((highlight, index) => {
                            return <li key={index}>{highlight}</li>
                        })
                    }
                </ul>
                <ul className="job__list">
                    {
                        details.stacks.map((stack, index) => {
                            return <li key={index}>{stack}</li>
                        })
                    }
                </ul>
            </div>
        </JobContainer>
    );
};

export default Jobs;