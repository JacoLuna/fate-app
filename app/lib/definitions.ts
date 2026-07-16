import { SkillsEnum } from "@/types/enums";

/* type Stress = {
    type: "physical" | "mental";
    level: 1 | 2 | 3 | 4;
} */

type Skill = {
    //type: "average" | "fair" | "good" | "great" | "superb";
    modifier: 1 | 2 | 3 | 4 | 5
    name: SkillsEnum;
}

/* export type Character = {
    id: number;
    name: string;
    description: string;
    refresh: number;
    aspects: string[];
    // skills: Record<string, Skill>;
    skills: String[];
    extras: string;
    stunts: string;
    // stress: Stress[];
    stress: string[];
    consequences: string[];
} */

export type Character = {
    id : number,
    character_name : string,
    character_description : string,
    refresh : string,
    aspects_1 : string,
    aspects_2 : string,
    aspects_3 : string,
    aspects_4 : string,
    aspects_5 : string,
    skills_superb : string,
    skills_great_1 : string,
    skills_great_2 : string,
    skills_good_1 : string,
    skills_good_2 : string,
    skills_good_3 : string,
    skills_fair_1 : string,
    skills_fair_2 : string,
    skills_fair_3 : string,
    skills_fair_4 : string,
    skills_average_1 : string,
    skills_average_2 : string,
    skills_average_3 : string,
    skills_average_4 : string,
    skills_average_5 : string,
    extras : string,
    stunts : string,
    stress_physical_1 : string,
    stress_physical_2 : string,
    stress_physical_3 : string,
    stress_physical_4 : string,
    stress_mental_1 : string,
    stress_mental_2 : string,
    stress_mental_3 : string,
    stress_mental_4 : string,
    consequences_1 : string,
    consequences_2 : string,
    consequences_3 : string,
    consequences_4 : string,
}