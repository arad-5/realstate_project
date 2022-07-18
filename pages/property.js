import { fetchAPI } from '../utils/fetchAPI';

import Image from 'next/image';
import PaginationSwiper from '../components/PaginationSwiper';
import PropertyAgencyLogoBadge from '../components/agency/PropertyAgencyLogoBadge';

import { IoLocationSharp } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdCalendarViewMonth, MdVerified } from 'react-icons/md';
import { IoCall } from 'react-icons/io5';

import GoogleMapReact from 'google-map-react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ContactModal from '../components/property/detail/ContactModal';

const Property = ({
    propertyDetail,
    propertyDetail: {
        title,
        photos,
        active,
        agency,
        isVerified,
        category,
        location,
        description,
        price,
        area,
        rooms,
        baths,
        purpose,
        geography,
        phoneNumber,
        contactName,
    },
}) => {
    const [readMore, setReadMore] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    return (
        <section className='pt-14 pb-20 sm:pt-20'>
            <div className='sm:px-20'>
                <div>
                    <div>
                        <div className='h-72 rounded-2xl sm:h-[50vh]'>
                            <PaginationSwiper images={photos} alt={title} />
                        </div>
                        <div className='my-2 flex justify-between space-x-2 sm:justify-start'>
                            {active && (
                                <span className='animate-pulse rounded-full bg-green-500 px-4 py-1 font-bold leading-8 text-white dark:bg-green-900 dark:text-green-200'>
                                    active
                                </span>
                            )}
                            <PropertyAgencyLogoBadge
                                agency={agency}
                                isVerified={isVerified}
                            />
                        </div>
                    </div>
                    <div className='fixed bottom-0 left-0 z-40 w-screen sm:space-y-0 space-y-1 border-t bg-white/70 px-2 sm:py-2 backdrop-blur-sm dark:border-[#404040] dark:bg-[#151515]/70 sm:static sm:flex sm:w-auto sm:border-2 sm:px-0'>
                        <div className='w-full items-center justify-between space-y-2 sm:flex'>
                            <div className='flex flex-wrap space-x-2 text-lg border'>
                                <div className='flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                                    {price} AED
                                </div>
                                <div className='absolute -top-10 left-0 flex items-center rounded-full bg-red-600 px-3 py-1 font-bold text-white dark:bg-[#390000] dark:text-red-500 sm:static'>
                                    {purpose === 'for-sale' ? 'SALE' : 'RENT'}
                                </div>
                                <div className='flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                                    <MdCalendarViewMonth className='mr-2' />
                                    {Math.round(area)} m<sup>2</sup>
                                </div>
                                <div className='flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                                    <FaBed className='mr-2' />
                                    {rooms}
                                </div>
                                <div className='flex items-center rounded-full border px-3 py-1 dark:border-[#404040]'>
                                    <FaBath className='mr-2' />
                                    {baths}
                                </div>
                            </div>
                            <PrimaryButton
                                className='flex items-center justify-center sm:w-auto'
                                onClick={() => setIsContactModalOpen(true)}
                            >
                                contact
                                <IoCall className='ml-2' />
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className='inline-block'>
                    <h1 className='text-2xl'>{title}</h1>
                    <div className='mt-2 flex items-start'>
                        <IoLocationSharp className='mt-1 text-xl text-blue-600' />
                        <h3>
                            {location.map(
                                (locationItem) => locationItem.name + ', '
                            )}
                        </h3>
                    </div>
                    <div className='first-letter my-2 rounded-2xl border p-4 dark:border-[#404040]'>
                        <p>
                            {readMore
                                ? description
                                : description.slice(0, 150) + '...'}
                            <button
                                className={`ml-2 text-green-500 sm:static sm:ml-2 sm:mt-4 ${
                                    readMore &&
                                    'fixed right-2 bottom-32 z-20 ml-0 rounded-full border bg-white px-2 py-1 dark:border-[#404040] dark:bg-[#151515]'
                                }`}
                                onClick={() => setReadMore((curr) => !curr)}
                            >
                                read {readMore ? 'less' : 'more'}
                            </button>
                        </p>
                    </div>
                </div>
                <div className='col-start-1 border-t pt-3 dark:border-[#404040]'>
                    <ul className='space-x-2'>
                        {category.map((categoryItem) => (
                            <li
                                className='inline-block rounded-full border px-3 py-1 text-blue-500 dark:border-[#404040]'
                                key={categoryItem.slug}
                            >
                                #<h4 className='inline'>{categoryItem.name}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='h-[50vh] w-full'>
                    {geography.lat && geography.lng && (
                        <GoogleMapReact
                            defaultCenter={{
                                lat: geography.lat,
                                lng: geography.lng,
                            }}
                            defaultZoom={15}
                        >
                            <div
                                lat={geography.lat}
                                lng={geography.lng}
                                className='h-6 w-6 -translate-x-1/2 -translate-y-1/2'
                            >
                                <IoLocationSharp className=' h-full w-full -translate-y-2 text-base text-blue-600' />
                            </div>
                        </GoogleMapReact>
                    )}
                </div>
                <ContactModal
                    contact={''}
                    isContactModalOpen={isContactModalOpen}
                    setIsContactModalOpen={setIsContactModalOpen}
                    phoneNumber={phoneNumber}
                    contactName={contactName}
                    agencyBadge={
                        <PropertyAgencyLogoBadge
                            agency={agency}
                            isVerified={isVerified}
                        />
                    }
                />
            </div>
        </section>
    );
};

export default Property;

export const getServerSideProps = async ({ query }) => {
    const propertyDetail = await fetchAPI(
        `https://bayut.p.rapidapi.com/properties/detail?externalID=${query.id}`
    );

    return {
        props: {
            propertyDetail,
        },
    };
};
const dummy = {
    id: 3215081,
    objectID: 3215081,
    ownerID: 1099878,
    userExternalID: '1099878',
    sourceID: 1,
    state: 'active',
    geography: {
        lat: 25.060612,
        lng: 55.200228,
    },
    purpose: 'for-sale',
    price: 1250000,
    product: 'superhot',
    productLabel: 'default',
    rentFrequency: null,
    referenceNumber: 'JVC-HK-EATONP-2BR',
    permitNumber: '7197538784',
    title: 'Kitchen Appliances | Pool View | Best Investment',
    title_l1:
        'شقة في إيتون بليس قرية جميرا الدائرية 2 غرف 1250000 درهم - 5933491',
    description:
        'Azco Real Estate Brokers (LLC) is delighted to offer you this Stylish and Upgraded Elegant apartment located in the most sought-after residential community in Dubai, Jumeirah Village Circle. \n\nEaton Place is the perfect place to make precious memories. A place for the kids to run free with its beautifully landscaped gardens, to keep fit and healthy with its fitness and recreation facilities and to hang-out and relax in the majestic entrance lobby. Easily accessible and suitable for families, Eaton Place promotes modern family living where family comes first. \n\nSituated in the heart of Jumeirah Village Circle (JVC) Dubai, Eaton Place holds a distinct architectural style in the heart of JVC Community, with its striking residential exterior and welcoming ambience. \n\nPROPERTY DETAILS AND AMENITIES:\n■ 2 Bedroom Apartment\n■ 2 Bathrooms\n■ Parking space\n■ Covered Parking\n■ Central A/C\n■ Build In Wardrobes\n■ Children Play Area\n■ Build In Wardrobes\n■ Broadband Ready\n\nCONTACT US: MR. HASSAN KHALID - Property Consultant\n\nWHO WE ARE?\nAZCO Real Estate Brokers, LLC. is an award winning and culturally diverse brokerage that brings together a team of multilingual and highly qualified real estate brokers. AZCO utilizes extensive expertise of the local market and internationalism of real estate. At AZCO, we exercise a client centrode approach that helps us to deliver end-to-end property management and real estate solutions. \n\nBuyers, Sellers, and Tenants can reach us anytime. Thank you for Choosing Azco Real Estate!',
    description_l1:
        'Azco Real Estate Brokers (LLC) is delighted to offer you this Stylish and Upgraded Elegant apartment located in the most sought-after residential community in Dubai, Jumeirah Village Circle. \n\nEaton Place is the perfect place to make precious memories. A place for the kids to run free with its beautifully landscaped gardens, to keep fit and healthy with its fitness and recreation facilities and to hang-out and relax in the majestic entrance lobby. Easily accessible and suitable for families, Eaton Place promotes modern family living where family comes first. \n\nSituated in the heart of Jumeirah Village Circle (JVC) Dubai, Eaton Place holds a distinct architectural style in the heart of JVC Community, with its striking residential exterior and welcoming ambience. \n\nPROPERTY DETAILS AND AMENITIES:\n■ 2 Bedroom Apartment\n■ 2 Bathrooms\n■ Parking space\n■ Covered Parking\n■ Central A/C\n■ Build In Wardrobes\n■ Children Play Area\n■ Build In Wardrobes\n■ Broadband Ready\n\nCONTACT US: MR. HASSAN KHALID - Property Consultant\n\nWHO WE ARE?\nAZCO Real Estate Brokers, LLC. is an award winning and culturally diverse brokerage that brings together a team of multilingual and highly qualified real estate brokers. AZCO utilizes extensive expertise of the local market and internationalism of real estate. At AZCO, we exercise a client centrode approach that helps us to deliver end-to-end property management and real estate solutions. \n\nBuyers, Sellers, and Tenants can reach us anytime. Thank you for Choosing Azco Real Estate!',
    externalID: '5933491',
    slug: 'kitchen-appliances-pool-view-best-investment-5933491',
    slug_l1: 'kitchen-appliances-pool-view-best-investment-5933491',
    location: [
        {
            id: 1,
            level: 0,
            externalID: '5001',
            name: 'UAE',
            name_l1: 'الإمارات',
            slug: '/uae',
            slug_l1: '/uae',
        },
        {
            id: 2,
            level: 1,
            externalID: '5002',
            name: 'Dubai',
            name_l1: 'دبي',
            slug: '/dubai',
            slug_l1: '/dubai',
        },
        {
            id: 59,
            level: 2,
            externalID: '5416',
            name: 'Jumeirah Village Circle (JVC)',
            name_l1: 'قرية جميرا الدائرية',
            slug: '/dubai/jumeirah-village-circle-jvc',
            slug_l1: '/dubai/jumeirah-village-circle-jvc',
        },
        {
            id: 1561,
            level: 3,
            externalID: '10575',
            name: 'Eaton Place',
            name_l1: 'إيتون بليس',
            slug: '/dubai/jumeirah-village-circle-jvc/eaton-place',
            slug_l1: '/dubai/jumeirah-village-circle-jvc/eaton-place',
        },
    ],
    category: [
        {
            id: 1,
            level: 0,
            externalID: '1',
            name: 'Residential',
            name_l1: 'سكني',
            slug: 'residential',
            slug_l1: 'residential',
            nameSingular: 'Residential',
            nameSingular_l1: 'سكني',
        },
        {
            id: 2,
            level: 1,
            externalID: '4',
            name: 'Apartments',
            name_l1: 'شقق',
            slug: 'apartments',
            slug_l1: 'apartments',
            nameSingular: 'Apartment',
            nameSingular_l1: 'شقة',
        },
    ],
    createdAt: 1652012646,
    approvedAt: 1652012646,
    updatedAt: 1652255558,
    touchedAt: 1652264392.838423,
    reactivatedAt: 1652012646,
    rooms: 2,
    baths: 2,
    area: 106.00236864,
    score: 100,
    score_l1: 65,
    coverPhoto: {
        id: 210869606,
        externalID: '122638262',
        title: null,
        orderIndex: 0,
        nimaScore: 8.762446285110286,
        url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869606/9fb7c134f9e04d42ab5a3f3859fad454',
        main: true,
    },
    photoCount: 13,
    videoCount: 0,
    panoramaCount: 0,
    photos: [
        {
            id: 210869606,
            externalID: '122638262',
            title: null,
            orderIndex: 0,
            nimaScore: 8.762446285110286,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869606/9fb7c134f9e04d42ab5a3f3859fad454',
        },
        {
            id: 210869607,
            externalID: '122638264',
            title: null,
            orderIndex: 1,
            nimaScore: 8.624061826543311,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869607/cef87545e80b451daf5f591eac09c647',
        },
        {
            id: 210869608,
            externalID: '122638265',
            title: null,
            orderIndex: 2,
            nimaScore: 8.902697557946965,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869608/2f5007f79da848259484d399756b1355',
        },
        {
            id: 210869609,
            externalID: '122638266',
            title: null,
            orderIndex: 3,
            nimaScore: 8.413557709330007,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869609/68a61b8e60e14e0ba42d9d496ee0a4cd',
        },
        {
            id: 210869610,
            externalID: '122638267',
            title: null,
            orderIndex: 4,
            nimaScore: 8.702883328650842,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869610/b1db7b31670e4615a3fa4167aa1de1a3',
        },
        {
            id: 210869611,
            externalID: '122638268',
            title: null,
            orderIndex: 5,
            nimaScore: 8.431042655691272,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869611/0797b4ce20fc45de986f5acb6a4d2866',
        },
        {
            id: 210869612,
            externalID: '122638270',
            title: null,
            orderIndex: 6,
            nimaScore: 7.824244696943424,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869612/789113f71af949b5b21ced49268b8072',
        },
        {
            id: 210869613,
            externalID: '122638271',
            title: null,
            orderIndex: 7,
            nimaScore: 8.644386593053241,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869613/6063522e56af43999b409e993ede7e34',
        },
        {
            id: 210869614,
            externalID: '122638272',
            title: null,
            orderIndex: 8,
            nimaScore: 6.015637856776111,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869614/0fbf997af5fd434e94e04bda12acccf9',
        },
        {
            id: 210869615,
            externalID: '122638273',
            title: null,
            orderIndex: 9,
            nimaScore: 5.999995615376986,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869615/a0b7989252d941d0835e8e433e65bea5',
        },
        {
            id: 210869616,
            externalID: '122638275',
            title: null,
            orderIndex: 10,
            nimaScore: 6.000006747013947,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869616/4c08818e51d140e09fb4c93df36c1a07',
        },
        {
            id: 210869617,
            externalID: '122638276',
            title: null,
            orderIndex: 11,
            nimaScore: 7.861501080584276,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869617/f5690676195649c2860ff28d690789f1',
        },
        {
            id: 210869618,
            externalID: '122638277',
            title: null,
            orderIndex: 12,
            nimaScore: 7.824782418247196,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/210869618/91ee9606440144f8b6f6c06ab9bd6ee0',
        },
    ],
    floorPlans: [],
    floorPlan: {
        id: 33118,
        typeIdentifier: 'type',
        typeIdentifierValue: '1',
        images: [
            {
                id: 24874,
                externalID: 'd5062052-2edc-4b4e-897a-537de6ff0935',
                orderIndex: 9,
                image2D: {
                    id: 73164272,
                },
                image3D: {
                    id: 73164273,
                },
                label: null,
            },
        ],
        models: [
            {
                id: 9208,
                externalID: 'ef449fc142484335b492142abdc7b726',
                orderIndex: 9,
                placeholderImage: {
                    id: 102953105,
                },
                label: null,
                modelURL: null,
            },
        ],
    },
    videos: [],
    panoramas: [],
    amenities: [
        {
            externalGroupID: 9,
            groupRank: 1,
            text: 'Features',
            text_l1: 'مزايا',
            amenities: [
                {
                    text: 'Electricity Backup',
                    text_l1: 'نظام كهرباء احتياطي للطوارئ',
                    value: '1',
                    rank: 2,
                    slug: 'electricity-backup',
                    format: 'checkbox',
                    externalID: 10,
                },
                {
                    text: 'Parking Spaces',
                    text_l1: 'مواقف سيارات',
                    value: '1',
                    rank: 3,
                    slug: 'parking-spaces',
                    format: 'number',
                    externalID: 68,
                },
                {
                    text: 'Centrally Air-Conditioned',
                    text_l1: 'نظام تبريد مركزي',
                    value: '1',
                    rank: 4,
                    slug: 'centrally-air-conditioned',
                    format: 'checkbox',
                    externalID: 7,
                },
                {
                    text: 'Storage Areas',
                    text_l1: 'مناطق تخزين',
                    value: '1',
                    rank: 7,
                    slug: 'storage-areas',
                    format: 'checkbox',
                    externalID: 70,
                },
            ],
        },
        {
            externalGroupID: 5,
            groupRank: 2,
            text: 'Building',
            text_l1: 'البناء',
            amenities: [
                {
                    text: 'Balcony or Terrace',
                    text_l1: 'شرفة أو تراس',
                    value: '1',
                    rank: 1,
                    slug: 'balcony-or-terrace',
                    format: 'checkbox',
                    externalID: 3,
                },
                {
                    text: 'Lobby in Building',
                    text_l1: 'ردهة إستقبال',
                    value: '1',
                    rank: 2,
                    slug: 'lobby-in-building',
                    format: 'checkbox',
                    externalID: 5,
                },
                {
                    text: 'Reception/Waiting Room',
                    text_l1: 'غرفة استقبال /انتظار',
                    value: '1',
                    rank: 8,
                    slug: 'receptionwaiting-room',
                    format: 'checkbox',
                    externalID: 41,
                },
            ],
        },
        {
            externalGroupID: 3,
            groupRank: 3,
            text: 'Health and Fitness',
            text_l1: 'الصحة و اللياقة',
            amenities: [
                {
                    text: 'Gym or Health Club',
                    text_l1: 'صالة رياضية أو نادي صحي',
                    value: '1',
                    rank: 3,
                    slug: 'gym-or-health-club',
                    format: 'checkbox',
                    externalID: 22,
                },
                {
                    text: 'Swimming Pool',
                    text_l1: 'مسبح',
                    value: '1',
                    rank: 6,
                    slug: 'swimming-pool',
                    format: 'checkbox',
                    externalID: 45,
                },
            ],
        },
        {
            externalGroupID: 7,
            groupRank: 9,
            text: 'Miscellaneous',
            text_l1: 'الخدمات العامة',
            amenities: [
                {
                    text: 'Number of Bathrooms',
                    text_l1: 'عدد دورات المياه',
                    value: '2',
                    rank: 13,
                    slug: 'number-of-bathrooms',
                    format: 'number',
                    externalID: 38,
                },
                {
                    text: 'Number of Bedrooms',
                    text_l1: 'عدد الغرف',
                    value: '2',
                    rank: 14,
                    slug: 'number-of-bedrooms',
                    format: 'number',
                    externalID: 39,
                },
            ],
        },
    ],
    phoneNumber: {
        mobile: '+971521280789',
        phone: '+971521280789',
        whatsapp: '971521280789',
        proxyMobile: '+971525207993',
        proxyPhone: '+97148723010',
        phoneNumbers: ['+971521280789'],
        mobileNumbers: ['+971521280789'],
    },
    contactName: 'Hassan Khalid',
    agency: {
        id: 829,
        objectID: 829,
        name: 'AZCO Real Estate Brokers (LLC) - Lease JVC',
        name_l1: 'أزكو للوساطة العقارية',
        externalID: '2734',
        product: 'premium',
        productScore: 2,
        licenses: [
            {
                number: '16719',
                authority: 'RERA',
            },
        ],
        logo: {
            id: 96346843,
            url: 'https://bayut-production.s3.eu-central-1.amazonaws.com/image/96346843/1fb4f272c0f644f990bc5d49dc53c364',
        },
        slug: 'azco-real-estate-brokers--llc-lease-jvc-2734',
        slug_l1: 'azco-real-estate-brokers--llc-lease-jvc-2734',
        tier: 1,
        roles: [],
        active: true,
        createdAt: '2017-12-14T16:31:33.009813+00:00',
        commercialNumber: null,
    },
    active: true,
    hasExactGeography: true,
    verification: {
        status: 'verified',
        type: 'manual',
        eligible: true,
        comment: null,
        updatedAt: 1652076444.838006,
        verifiedAt: 1652170490.214125,
        visitedAt: null,
    },
    isVerified: true,
    completionStatus: 'completed',
    randBoostScore: 729,
    randBoostScore_l1: 729,
    furnishingStatus: 'unfurnished',
    extraFields: {
        dldBuildingNK: 'tabu+ejari-97532798',
        dldPropertySK: 'dld|mea|ae|tabu+ejari-97538784',
    },
    type: 'property',
    cityLevelScore: 1,
    indyScore: 729,
    indyScore_l1: 729,
    hasMatchingFloorPlans: true,
    hidePrice: false,
};
