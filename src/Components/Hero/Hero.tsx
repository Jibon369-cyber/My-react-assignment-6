import bannerStack from "../../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className='bg-white'>
      <div className='container mx-auto flex max-w-6xl items-center justify-between gap-12 px-6 py-20'>
        <div className='max-w-xl'>
          <h1 className='text-5xl font-bold leading-tight text-gray-900'>
            Build Your Ideal
            <span className='ml-3 bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent'>
              {" "}
              Development Stack
            </span>
          </h1>

          <p className='mt-6 max-w-lg text-base leading-7 text-gray-600'>
            Discover the best technologies for modern web development. Explore
            technologies, build your stack, and take your development skills to
            the next level.
          </p>
          <div className='mt-8 flex items-center gap-4'>
            <button className='rounded-lg bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90'>
              Explore Technologies
            </button>
            <button className='rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-brand-pink hover:text-brand-pink'>
              Learn More
            </button>
          </div>
        </div>

        <div className='flex-1'>
          <img
            src={bannerStack}
            alt='banner'
            className='w-full max-w-lg object-contain'
          />
        </div>
      </div>
    </section>
  );
}
