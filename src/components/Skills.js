import Image from 'next/image';
import React from 'react';
import SkillItem from './SkillItem';
import htmlIcon from '../../public/assets/skills/html.png';
import cssIcon from '../../public/assets/skills/css.png';

import javascriptIcon from '../../public/assets/skills/javascript.png';
import pythonIcon from '../../public/assets/skills/python.png';
import reactIcon from '../../public/assets/skills/react.png';
import reduxIcon from '../../public/assets/skills/redux.png';
import tailwindIcon from '../../public/assets/skills/tailwind.png';
import nextjsIcon from '../../public/assets/skills/nextjs.png';
import nodeIcon from '../../public/assets/skills/node.png';
import mongoIcon from '../../public/assets/skills/mongo.png';
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
        title: 'PYTHON',
        src: pythonIcon
    },
    {
        title: 'TAILWIND',
        src: reactIcon
    },
    {
        title: 'REDUX',
        src: reduxIcon
    },
    {
        title: 'TAILWIND',
        src: tailwindIcon
    },
    {
        title: 'NEXT JS',
        src: nextjsIcon
    },
    {
        title: 'NODE JS',
        src: nodeIcon
    },
    {
        title: 'MONGODB',
        src: mongoIcon
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