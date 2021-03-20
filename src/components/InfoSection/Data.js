const map = require('../../images/map.svg').default;
const destinations = require('../../images/destinations.svg').default;
const contact = require('../../images/contact.svg').default;

export const InfoObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headLine: 'GIS Analyst & QA/QC Specialist at TPL Maps',
    description: 'I am a GIS Analyst with 3+ years of professional GIS experience and 2+ years of WebGIS development experience. I work as a Senior GIS Analyst and Quality Assurance Specialist at TPLTrakker. My expertise are QGIS, QGIS Server, PostgreSQL, Geoserver, Mapbox, ArcGIS, Erdas Imagine, MySQL, GIS Programming, Cartography, Utility Networking & Digitization, Land Use Planning & Management, Data preparation, Info gram development, Python scripting and Web scraping using selenium and BS4. I also work as a front-end developer and I develop landing pages and Portfolios. I am also a Photographer and I work on photo editing and video making.',
    buttonLabel: 'Interested?',
    imgStart: false,
    img: map,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false    
};

export const InfoObjTwo = {
    id: 'skills',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'My skills',
    headLine: 'Few of the skills I am good at',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: destinations,
    alt: 'discover',
    dark: false,
    primary: false,
    darkText: true   
};

export const InfoObjThree = {
    id: 'services',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headLine: 'Unlimited Transactions with zero fee',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Contact Us',
    imgStart: false,
    img: contact,
    alt: 'contact',
    dark: true,
    primary: true,
    darkText: false    
};