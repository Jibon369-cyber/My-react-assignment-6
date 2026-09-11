export type TechnologyCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type Difficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";


export interface ITechnology {
  id: string;
  name: string;
  category: TechnologyCategory;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}