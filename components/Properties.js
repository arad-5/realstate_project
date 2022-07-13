import PropertyCard from './property/PropertyCard';

const Properties = ({ properties, title }) => {
    return (
        <section>
            <div className='relative mb-8 grid gap-3 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4'>
                <div className='col-span-full text-center text-xl'>
                    <h1 className='inline-block rounded-full border bg-white px-3 py-1 dark:border-0 dark:bg-[#202020]'>
                        {title}
                    </h1>
                </div>
                {properties.map((property) => (
                    <PropertyCard property={property} key={property.id} />
                ))}
            </div>
        </section>
    );
};

export default Properties;
