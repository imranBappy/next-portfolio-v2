import Image from 'next/image';
import React from 'react';
import SkillItem from './SkillItem';
import htmlIcon from '../../public/assets/skills/html.png';
import cssIcon from '../../public/assets/skills/css.png';

import javascriptIcon from '../../public/assets/skills/javascript.png';
import typescriptIcon from '../../public/assets/skills/typescrip.png';
import pythonIcon from '../../public/assets/skills/python.png';

import tailwindIcon from '../../public/assets/skills/tailwind.png'
import reactIcon from '../../public/assets/skills/react.png';
import reduxIcon from '../../public/assets/skills/redux.png';

import nodeIcon from '../../public/assets/skills/node.png';
import expressIcon from '../../public/assets/skills/expressjs.png';
import graphQLIcon from '../../public/assets/skills/graphql.png';
import nextjsIcon from '../../public/assets/skills/nextjs.png';

import mongoIcon from '../../public/assets/skills/mongo.png';
import mySQLIcon from '../../public/assets/skills/mySQL.png';


import githubIcon from '../../public/assets/skills/github1.png';
import firebaseIcon from '../../public/assets/skills/firebase.png';

const mySkills = [
    {
        title: 'HTML',
        src: htmlIcon
    }
    , {
        title: 'CSS',
        src: cssIcon
    },
    {
        title: 'JAVASCRIPT',
        src: javascriptIcon
    },
    {
        title: 'TYPESCRIPT',
        src: typescriptIcon
    },
    {
        title: 'PYTHON',
        src: pythonIcon
    },
    {
        title: 'TAILWIND',
        src: tailwindIcon
    },
    {
        title: 'REACT',
        src: reactIcon
    },
    {
        title: 'REDUX',
        src: reduxIcon
    },
    {
        title: 'NODE JS',
        src: nodeIcon
    },
    {
        title: 'EXPRESS JS',
        src: expressIcon
    },
    {
        title: 'GRAPHQL',
        src: graphQLIcon
    },
    {
        title: 'NEXT JS',
        src: nextjsIcon
    },
    {
        title: 'MONGODB',
        src: mongoIcon
    },
    {
        title: 'MYSQL',
        src: mySQLIcon
    },
    {
        title: 'GITHUB',
        src: githubIcon
    },
    {
        title: 'FIREBASE',
        src: firebaseIcon
    }
]
const Skills = () => {
    return (
        <section id="skills" className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-wide text-primary'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {
                        mySkills.map((skill, index) => <SkillItem
                            key={index}
                            title={skill.title}
                            src={skill.src}
                        />)
                    }



                </div>
            </div>
        </section>
    );
};

export default Skills;