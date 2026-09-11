import type { ITechnology } from "../../Types/technology";

interface IYourStackProps {
  stack: ITechnology;
}

export default function YourStack({stack}: IYourStackProps) {
  return (
    <aside className='self-start rounded-2xl border border-gray-200 bg-white p-5 shadow-sm'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-bold text-gray-900'>Your Stack</h2>
        <span className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600'>
          {stack.length} Selected
        </span>
      </div>

      {stack.length === 0 ? (
        <div className='flex min-h-60 flex-col items-center justify-center text-center'>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-400'>
            +
          </div>

          <h3 className='mt-4 text-sm font-semibold text-gray-700'>
            Your stack is empty
          </h3>

          <p className='mt-2 max-w-55 text-xs leading-5 text-gray-400'>
            Add technologies from the list to build your development stack.
          </p>
        </div>
      ) : (
        /* Selected Technologies */
        <div className='mt-5 space-y-3'>
          {stack.map((technology) => (
            <div
              key={technology.id}
              className='flex items-center gap-3 rounded-xl border border-gray-100 p-3'>
              {/* Icon */}
              <img
                src={technology.icon}
                alt={technology.name}
                className='h-9 w-9 object-contain'
              />

              {/* Name + Category */}
              <div className='min-w-0 flex-1'>
                <h3 className='truncate text-sm font-semibold text-gray-800'>
                  {technology.name}
                </h3>

                <p className='text-xs text-gray-400'>{technology.category}</p>
              </div>

              {/* Remove Button */}
              <button
                className='text-sm font-bold text-gray-400 hover:text-red-500'
                aria-label={`Remove ${technology.name}`}>
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
