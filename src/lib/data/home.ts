import { Platform } from '$lib/types';
import { getSkills } from './skills';
import { derived } from 'svelte/store';
import { currentLanguage, translations } from '$lib/stores/languages';
import { get } from 'svelte/store';

export const title = get(derived(
	currentLanguage,
	($currentLanguage) => translations[$currentLanguage].navbar.home
));

console.log(title);

export const name = 'Alexandro';

export const lastName = 'Sierpinski';


export const description = derived(
	currentLanguage,
	($currentLanguage) => translations[$currentLanguage].home.description
);

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/alexandro-sierpinski' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/alexandro-sierpinski-20202629b/'
	},
	// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://twitter.com/'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	{
		platform: Platform.Email,
		link: 'sierpinskinoticias@gmail.com'
	},
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },
	// {
	// 	platform: Platform.Facebook,
	// 	link: 'https://www.facebook.com'
	// }
];

export const skills = getSkills('js', 'css', 'html', 'reactjs', 'sass', 'svelte', 'ts');
