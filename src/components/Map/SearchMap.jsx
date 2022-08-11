import React, { useState } from 'react';


function SearchMap(props) {

    const [inputIDOnChange, setInputIDOnChange] = useState({})

    const handleInputChange = (e) => {
        setInputIDOnChange({...inputIDOnChange, [e.target.name]: e.target.value });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        props.setInputID(inputIDOnChange);

        const markerInfo = props.filteredData.filter((mapLocation) => (
            mapLocation.id === parseInt(inputIDOnChange.idinput))
        );

        console.log(markerInfo[0].latitude);
        props.setIdcoords([markerInfo[0].latitude, markerInfo[0].longitude]);

        props.setFlyToInputID(true);

    }
    
    return (
        <form>
        <div className='max-w-36 p-3 m-4 mr-5 z-10 absolute right-0 top-0 h-10 bg-lightGrey'>
            <label>Input ID: </label>
            <input type="number" name="idinput" onChange={handleInputChange} />

            <button onClick={handleSubmit}>Submit ID</button>
        </div>
        </form>
    )
}

export default SearchMap