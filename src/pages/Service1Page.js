import React from 'react'
import SingleService from '../components/Services/SingleService';
import { ServiceObjOne } from '../components/Services/ServiceData';

const Service1Page = () => {
    return (
        <>
           <SingleService {...ServiceObjOne} />
        </>
    )
}

export default Service1Page
