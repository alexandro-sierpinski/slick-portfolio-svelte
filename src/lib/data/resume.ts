import { derived } from 'svelte/store';
import { currentLanguage } from '$lib/stores/languages';
import { base } from '$app/paths';

export const data = derived(currentLanguage, ($currentLanguage) => 
    $currentLanguage === 'pt-BR' 
        ? `${base}/resume/curriculo-pt.pdf`
        : `${base}/resume/resume-en.pdf`
);

export const title = 'Resumé';
