import { derived } from 'svelte/store';
import { currentLanguage } from '$lib/stores/languages';

const createNavItems = () => {
	return derived(currentLanguage, ($currentLanguage) => [
		{
			title: $currentLanguage === 'pt-BR' ? 'Habilidades' : 'Skills',
			to: '/skills',
			icon: 'i-carbon-software-resource-cluster'
		},
		{
			title: $currentLanguage === 'pt-BR' ? 'Projetos' : 'Projects',
			to: '/projects',
			icon: 'i-carbon-cube'
		},
		{
			title: $currentLanguage === 'pt-BR' ? 'Experiência' : 'Experience',
			to: '/experience',
			icon: 'i-carbon-development'
		},
		{
			title: $currentLanguage === 'pt-BR' ? 'Educação' : 'Education',
			to: '/education',
			icon: 'i-carbon-education'
		},
		{
			title: $currentLanguage === 'pt-BR' ? 'Currículo' : 'Resume',
			to: '/resume',
			icon: 'i-carbon-result'
		}
	]);
};

export const items = createNavItems();
