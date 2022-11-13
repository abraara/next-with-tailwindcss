function PageHeading({tagline, title, ...props}) {
    return ( 
        <header className="bg-gradient-to-b from-indigo-500 to-blue-400 via-sky-500 w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl text-gray-200 font-extrabold pb-5 md:text-6xl lg:text-8xl">{title}</h1>
            <p className="text-sm text-gray-800/60 md:text-lg lg:text-2xl">{tagline}</p>
        </header>

     );
}

export default PageHeading;