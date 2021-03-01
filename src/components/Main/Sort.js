import React from 'react';
import '../../styles/sort.scss';

class Sort extends React.PureComponent {
    render() {
        const options = ['Release Date', 'Rating'];
        return (
            <div className="sort">
                <label htmlFor="sort__select" className="sort__label">Sort By</label>
                <select name="sort" id="sort__select" className="sort__select">
                    {options.map(function (option, index) {
                        return <option key={index} name={option}>{option}</option>
                    })}
                </select>
            </div>
        )
    }
}

export default Sort;
