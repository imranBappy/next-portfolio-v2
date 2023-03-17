import React from 'react';

const IconLink = ({ url, icon }) => {
    return (
        <a
            href={url}
            target='_blank'
        >
            <div className='icon_link'>
                {
                    icon
                }
            </div>
        </a>
    );
};

export default IconLink;