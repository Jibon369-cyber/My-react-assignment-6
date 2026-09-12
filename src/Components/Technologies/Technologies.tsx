import { useEffect, useState } from "react";
import type { ITechnology } from "../../Types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

export default function Technologies () {
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [stack, setStack] = useState<ITechnology[]>([]);

    const loadTechnologies = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/technologies.json");

        if (!response.ok) {
          throw new Error("Failed to load technologies.");
        }

        const data: ITechnology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        setError("Unable to load technologies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
        const loadTechnologies = async() => {
            try {
                const response = await fetch("/src/Data/tachnologies.json")

                if (!response.ok) {
                    throw new Error("Failed to load technologies")
                } 
                const data: ITechnology[] = await response.json();

                setTechnologies(data)
            } catch(error) {
                console.log(error);
                
            }finally {
                setLoading(false)
            }
        }
        loadTechnologies();
    }, []);

    const handleAdd = (technology: ITechnology) => {
      const alreadyExists = stack.some((item) => item.id === technology.id);

      if (alreadyExists) {
        toast.warning(`${technology.name} is already in your stack.`);

        return;
      }

      setStack((previousStack) => [...previousStack, technology]);

      toast.success(`${technology.name} added to your stack.`);
    };

    const handleRemove = (id: string) => {
        const technology = stack.find(
            item => item.id === id
        );

        setStack(previousStack => 
            previousStack.filter(item => item.id !== id)
        );

        if (technology) {
            toast.info(`${technology.name} remove from your stack`);
        }
    }

    const handleRemoveAll = () => {
        if (stack.length === 0) {
            return;
        }
      setStack([]);

      toast.info("All technologies removed from your stack.");
    };

    if (loading) {
        return (
          <section className='flex min-h-100 items-center justify-center'>
            <p className='text-sm font-medium text-gray-500'>
              Loading technologies...
            </p>
          </section>
        );
    }

    if (error) {
      return (
        <section id='technologies' className='bg-gray-50 px-6 py-20'>
          <div className='mx-auto flex max-w-xl flex-col items-center justify-center rounded-2xl border border-red-100 bg-white px-6 py-12 text-center shadow-sm'>
            <div className='flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-2xl text-red-500'>
              !
            </div>

            <h2 className='mt-5 text-xl font-bold text-gray-900'>
              Something went wrong
            </h2>

            <p className='mt-2 text-sm leading-6 text-gray-500'>{error}</p>

            <button
              onClick={loadTechnologies}
              className='mt-6 rounded-lg bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90'>
              Try Again
            </button>
          </div>
        </section>
      );
    }


    return (
      <section id='technologies' className='bg-gray-50 px-6 py-20'>
        <div className='mx-auto max-w-6xl'>
          <div className='mx-auto max-w-2xl text-center'>
            <p className='text-sm font-semibold uppercase tracking-wider text-brand-pink'>
              Technologies
            </p>
            <h2 className='mt-3 text-3xl font-bold text-gray-900'>
              Choose Your{" "}
              <span className='ml-2 bg-linear-to-r from-brand-orange via-brand-pink to-brand-violet bg-clip-text text-transparent'>
                Tech Stack
              </span>
            </h2>
            <p className='mt-4 text-sm leading-6 text-gray-500'>
              Explore popular technologies and select the tools that match your
              development journey.
            </p>
          </div>

          <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_280px]'>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3'>
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={stack.some(item => item.id === technology.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          <YourStack 
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
          />
          </div>

        </div>
      </section>
    );
}