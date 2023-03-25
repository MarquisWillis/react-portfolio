import React from 'react';
import Project from '../Project';

import {
    MusicExplorer,
    HighOnDadJokes,
    EcommerceBackend,
    WeatherDashboard,
    TeamProfileGenerator,
    ThroneOfGames
} from '../images/index'

const projectApps = [
    {
        id: 'music-explorer',
        title: 'Music Explorer',
        tech: 'HTML, CSS, JavaScript, TicketMaster & Taste Dive APIs, Tailwind',
        image: MusicExplorer,
        description: 'An explorer for music artist concerts and similar artists to look at',
        site: 'https://marquiswillis.github.io/music-explorer/',
        repo: 'https://github.com/MarquisWillis/music-explorer'
    },

    {
        id: 'high-on-dad-jokes',
        title: 'High on Dad Jokes!',
        tech: 'Handlebars, Bulma, JavaScript == (Node, Express), Sequelize (SQL), heroku',
        image: HighOnDadJokes,
        description: 'A dream blog for hardcore dad joke fans!',
        site: 'https://project2-mw.herokuapp.com/',
        repo: 'https://github.com/MarquisWillis/high-on-dad-jokes'
    },

    {
        id: 'ecommerce-backend',
        title: 'E-commerce Backend',
        tech: 'JavaScript, Node, Express, Sequelize (SQL), Insomnia',
        image: EcommerceBackend,
        description: 'A backend API that allows a developer to retrieve, create, update, and delete shopping items, categories, and tags',
        site: 'https://drive.google.com/file/d/1Tv25HJDfQI6oNlH3V2uuqgwKIYfso64u/view',
        repo: 'https://github.com/MarquisWillis/ecommerce-backend'
    },

    {
        id: 'throne-of-games',
        title: 'Throne of Games',
        tech: 'Full MERN Stack (MongoDB, Express, React, Node), GraphQL, tailwindcss',
        image: ThroneOfGames,
        description: 'A full stack game store where you may select a variety of games to look at',
        site: 'https://game-store-em.herokuapp.com/',
        repo: 'https://github.com/emmcewen/ThroneofGames'
    },

    {
        id: 'weather-dashboard',
        title: 'Weather Dashboard',
        tech: 'HTML, CSS, JavaScript, OpenWeather API, Bootstrap',
        image: WeatherDashboard,
        description: 'A simple 5 day weather forecast app for specific city lookup',
        site: 'https://marquiswillis.github.io/weather-app/',
        repo: 'https://github.com/MarquisWillis/weather-app'
    },

    {
        id: 'team-profile-generator',
        title: 'Team Profile Generator',
        tech: 'JavaScript, Node, Inquirer',
        image: TeamProfileGenerator,
        description: 'By writing classes in a unique library, a team profile generation page is ouput to a destination folder based on user input using inquirer',
        site: 'https://drive.google.com/file/d/124Ok5zn3maRlnL8LtSU4xP89n0lh0COp/view',
        repo: 'https://github.com/MarquisWillis/team-profile-generator'
    },
];

export default function Portfolio() {
    return (
        <div className='d-flex justify-content-center align-items-center flex-wrap text-white'>
            <div className='p-2'>
                <h1>Portfolio</h1>
            </div>
            <div className='project-card flex flex-wrap gap-5 m-5'>
                {console.log(projectApps)}
                {projectApps.map((projectApp) => {
                    return (<Project
                        id={projectApp.id}
                        title={projectApp.title}
                        tech={projectApp.tech}
                        image={projectApp.image}
                        description={projectApp.description}
                        site={projectApp.site}
                        repo={projectApp.repo}
                    />)
                })}
            </div>
        </div>
    );
}