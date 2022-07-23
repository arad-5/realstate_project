import PropertyCard from './PropertyCard'

const Properties = ({ properties, title }) => {
    return (
        <section>
            {title && (
                <div className='mb-4 text-center text-xl'>
                    <h1 className='inline-block rounded-full border px-3 py-1 dark:border-0 dark:bg-[#202020]'>{title}</h1>
                </div>
            )}
            <div className='relative grid overflow-hidden rounded-2xl border dark:border-neutral-700 sm:grid-cols-2 sm:gap-3 sm:overflow-visible sm:p-4 md:gap-5 lg:grid-cols-3 xl:grid-cols-4'>
                {properties.map(property => (
                    <PropertyCard property={property} key={property.id} />
                ))}
            </div>
        </section>
    )
}

export default Properties
