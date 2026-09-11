import { useEffect, useState } from "react";
import type { ITechnology } from "../../Types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

export default function Technologies () {
    const [technologies, setTechnologies] = useState<ITechnology[]>([]);
    const [loading, setLoading] = useState(true);
    const [stack, setStack] = useState<ITechnology[]>([]);


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
        return;
      }

      setStack((previousStack) => [...previousStack, technology]);
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
          <YourStack stack={stack} />
          </div>

        </div>
      </section>
    );
}