import React from 'react'
import SingleService from '../components/Services/SingleService';
import { ServiceObjTwo } from '../components/Services/ServiceData';

const Service2Page = () => {
    return (
        <>
           <SingleService {...ServiceObjTwo} />
        </>
    )
}

export default Service2Page
