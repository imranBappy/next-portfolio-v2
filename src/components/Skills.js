import Image from 'next/image';
import React from 'react';
import SkillItem from './SkillItem';

const mySkills = [
    {
        title: 'HTML',
        src: '/../public/assets/skills/html.png'
    }
    , {
        title: 'CSS',
        src: '/../public/assets/skills/css.png'
    },
    {
        title: 'JAVASCRIPT',
        src: '/../public/assets/skills/javascript.png'
    },
    {
        title: 'PYTHON',
        src: '/../public/assets/skills/python.png'
    },
    {
        title: 'TAILWIND',
        src: '/../public/assets/skills/react.png'
    },
    {
        title: 'REDUX',
        src: '/../public/assets/skills/redux.png'
    },
    {
        title: 'TAILWIND',
        src: '/../public/assets/skills/tailwind.png'
    },
    {
        title: 'NEXT JS',
        src: '/../public/assets/skills/nextjs.png'
    },
    {
        title: 'NODE JS',
        src: '/../public/assets/skills/node.png'
    },
    {
        title: 'MONGODB',
        src: '/../public/assets/skills/mongo.png'
    },
    {
        title: 'GITHUB',
        src: '/../public/assets/skills/github1.png'
    },
    {
        title: 'FIREBASE',
        src: '/../public/assets/skills/firebase.png'
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