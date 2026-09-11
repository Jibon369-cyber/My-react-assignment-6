import type { ITechnology } from "../../Types/technology";

interface TechnologyCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAdd: (technology: ITechnology) => void;
}

export default function TechnologyCard({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className='rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
      {/* Icon + Badge */}
      <div className='flex items-start justify-between gap-3'>
        <img
          src={technology.icon}
          alt={technology.name}
          className='h-12 w-12 shrink-0 object-contain'
        />

        <span className='rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-500'>
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className='mt-5 text-lg font-bold text-gray-900'>
        {technology.name}
      </h3>

      {/* Description */}
      <p className='mt-2 min-h-14 text-sm leading-6 text-gray-500'>
        {technology.description}
      </p>

      {/* Category + Difficulty */}
      <div className='mt-5 flex flex-wrap items-center justify-between gap-2'>
        <span className='rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600'>
          {technology.category}
        </span>

        <span className='text-xs font-medium text-gray-500'>
          {technology.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className='mt-4 flex items-center gap-1 text-sm'>
        <span className='text-yellow-400'>★</span>

        <span className='font-semibold text-gray-700'>{technology.rating}</span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-gray-100 text-gray-400"
            : "bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet text-white hover:opacity-90"
        }`}>
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
