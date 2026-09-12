import bannerStack from "../../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className='overflow-hidden bg-white'>
      <div className='mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-6 lg:grid-cols-2 lg:gap-12 lg:py-8'>
        {/* Content */}
        <div className='text-center lg:text-left'>
          <p className='text-sm font-semibold uppercase tracking-wider text-brand-pink'>
            Build Your Future
          </p>

          <h1 className='mt-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
            Build Your Ideal
            <span className='block bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent'>
              Perfect Tech Stack
            </span>
          </h1>

          <p className='mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base lg:mx-0'>
            Discover modern technologies, explore their capabilities, and create
            a development stack that matches your goals.
          </p>

          {/* Buttons */}
          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start'>
            <a
              href='#technologies'
              className='rounded-lg bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 cursor-pointer'>
              Explore Technologies
            </a>

            <a
              href='#about'
              className='rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 cursor-pointer'>
              Learn More
            </a>
          </div>
        </div>

        {/* Banner */}
        <div className='flex justify-center lg:justify-end'>
          <div className='w-full max-w-lg overflow-hidden'>
            <img
              src={bannerStack}
              alt='Development technology illustration'
              className='h-auto w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
