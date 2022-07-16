import PropertyCard from '../../property/PropertyCard';

const RecommendationProperties = ({ properties }) => {
    return (
        <div className='h-full'>
            <div
                className='sticky top-0 z-20 w-full bg-white/60 backdrop-blur-lg py-2 text-center text-xl dark:bg-[#151515]/60 '
            >
                <h1 className='inline-block rounded-full border bg-white px-3 py-1 dark:border-0 dark:bg-[#202020]'>
                    recommendations
                </h1>
            </div>
            <div className='h-full grid-cols-2 md:grid lg:block lg:px-4'>
                {properties.map((property) => (
                    <PropertyCard property={property} key={property.title} />
                ))}
            </div>
        </div>
    );
};

export default RecommendationProperties;
