import type { ITechnology } from "../../Types/technology";

interface YourStackProps {
  stack: ITechnology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="self-start rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-bold text-gray-900">
          Your Stack
        </h2>

        <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {stack.length} Selected
        </span>
      </div>

      {/* Empty State */}
      {stack.length === 0 ? (
        <div className="flex min-h-60 flex-col items-center justify-center text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-400">
            +
          </div>

          <h3 className="mt-4 text-sm font-semibold text-gray-700">
            Your stack is empty
          </h3>

          <p className="mt-2 max-w-55 text-xs leading-5 text-gray-400">
            Add technologies from the list to build your
            development stack.
          </p>

        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-5 space-y-3">

            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
              >

                {/* Icon */}
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-9 w-9 shrink-0 object-contain"
                />

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-gray-400">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="shrink-0 text-lg font-bold text-gray-400 transition hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ×
                </button>

              </div>
            ))}

          </div>

          {/* Remove All */}
          <button
            onClick={onRemoveAll}
            className="mt-5 w-full rounded-lg border border-red-100 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}

    </aside>
  );
}