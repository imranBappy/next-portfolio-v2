import React from 'react';

const ProjectBtn = ({ href, level }) => {
    return (
        <a href={href} className='text-center py-2 flex-grow rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>
            {level}
        </a>
    );
};

export default ProjectBtn;