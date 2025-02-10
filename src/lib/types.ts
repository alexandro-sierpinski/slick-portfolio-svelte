import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export type EducationLocation = 'onSite' | 'remote' | 'hybrid';
export type ExperienceLocation = 'home' | 'hybrid' | 'office';
export type ExperienceContract = 'selfEmployed' | 'fullTime' | 'freelancer';

export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: ExperienceLocation;
	contract: ExperienceContract;
}

export type EducationSubject = 'algorithm' | 'algebra' | 'python' | 'cpp' | 'java' | 'english' | 'assembly' | 'rust';

export type EducationDegree = 'bachelor' | 'master' | 'phd' | 'certificate';

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: EducationLocation;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<EducationSubject>;
	degree: EducationDegree;
}
