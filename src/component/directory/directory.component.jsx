import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import DirectoryData from './directory.data.js';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: DirectoryData
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {this.state.sections.map(({ id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;