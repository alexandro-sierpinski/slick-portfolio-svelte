import { writable, get } from 'svelte/store';

// Define os idiomas disponíveis
export type Language = 'pt-BR' | 'en-US';

// Cria o store com o idioma inicial
export const currentLanguage = writable<Language>('pt-BR');

// Definir as chaves possíveis de tradução
export type TranslationKey = keyof typeof translations['pt-BR'];

// Atualizar a função helper para usar o tipo correto
export function getTranslation(key: TranslationKey): string {
    const lang = get(currentLanguage);
    return translations[lang][key] || key;
}
// Dicionário de traduções
export const translations = {
    'pt-BR': {
        home: {
            title: 'Início',
            description: 'Lorem ipsum em português... (seu texto em português aqui)',
        },
        navbar: {
            home: 'Início',
            skills: 'Habilidades',
            projects: 'Projetos',
            experience: 'Experiência',
            education: 'Educação',
            resume: 'Currículo',
        },
        skill: {
            skill: 'Habilidades',
            programmingLanguages: 'Linguagens de Programação',
            frameworks: 'Frameworks',
            libraries: 'Bibliotecas',
            languages: 'Linguagens',
            databases: 'Bancos de Dados',
            orms: 'ORMs',
            devOps: 'DevOps',
            testing: 'Testes',
            devTools: 'Ferramentas Dev',
            markupStyle: 'Marcação & Estilo',
            design: 'Design',
            softSkills: 'Habilidades Interpessoais',
            others: 'Outros',
            notFound: 'Nada encontrado...'
        },
        project: {
            title: 'Projetos',
            notFound: 'Nada encontrado...',
            search: 'Buscar',
            websiteTemplate: 'Template de Website',
            description: 'Um template de portfólio de desenvolvedor estilo Vercel feito com Typescript e SvelteKit.',
            shortDescription: 'Um template de portfólio de desenvolvedor estilo Vercel feito com Typescript e SvelteKit.',
            status: {
                ongoing: 'em andamento',
                completed: 'concluído'
            },
            months: {
                0: 'Janeiro',
                1: 'Fevereiro',
            }
        },
        common: {
            search: 'Buscar...',
            searchPlaceholder: 'buscar'
        },
        experience: {
            title: 'Experiência',
            notFound: 'Nenhuma experiência encontrada...',
            current: 'Atual',
            years: 'anos',
            months: 'meses',
            present: 'Presente',
            description: 'Descrição da experiência em português',
            shortDescription: 'Descrição curta da experiência em português',
            contract: {
                selfEmployed: 'Autônomo',
                fullTime: 'Tempo Integral',
                freelancer: 'Freelancer'
            },
            location: {
                home: 'Home Office',
                hybrid: 'Híbrido',
                office: 'Escritório'
            }
        },
        education: {
            title: 'Educação',
            notFound: 'Nenhuma formação encontrada...',
            degree: {
                bachelor: 'Bacharelado em',
                master: 'Mestrado em',
                phd: 'Doutorado em',
                certificate: 'Certificado em'
            },
            computerScience: 'Ciência da Computação',
            location: {
                onSite: 'Presencial',
                remote: 'Remoto',
                hybrid: 'Híbrido'
            },
            status: {
                ongoing: 'Em andamento',
                completed: 'Concluído'
            },
            subjects: {
                algorithm: 'Algoritmos',
                algebra: 'Álgebra',
                python: 'Python',
                cpp: 'C++',
                java: 'Java',
                english: 'Inglês',
                assembly: 'Assembly',
                rust: 'Rust'
            }
        },
        resume: {
            title: 'Currículo',
            download: 'Baixar',
            notFound: 'Ops! Nenhum currículo disponível no momento.'
        }
    },
    'en-US': {
        home: {
            title: 'Home',
            description: 'Lorem ipsum in english... (your english text here)',
        },
        navbar: {
            home: 'Home',
            skills: 'Skills',
            projects: 'Projects',
            experience: 'Experience',
            education: 'Education',
            resume: 'Resume',
        },
        skill: {
            skill: 'Skills',
            programmingLanguages: 'Programming Languages',
            frameworks: 'Frameworks',
            libraries: 'Libraries',
            languages: 'Languages',
            databases: 'Databases',
            orms: 'ORMs',
            devOps: 'DevOps',
            testing: 'Testing',
            devTools: 'Dev Tools',
            markupStyle: 'Markup & Style',
            design: 'Design',
            softSkills: 'Soft Skills',
            others: 'Others',
            notFound: 'Could not find anything...'
        },
        project: {
            title: 'Projects',
            notFound: 'Could not find anything...',
            search: 'Search',
            websiteTemplate: 'Website Template',
            description: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
            shortDescription: 'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
            status: {
                ongoing: 'ongoing',
                completed: 'completed'
            },
            months: {
                0: 'January',
                1: 'February',
            }
        },
        common: {
            search: 'Search...',
            searchPlaceholder: 'search'
        },
        experience: {
            title: 'Experience',
            notFound: 'No experience found...',
            current: 'Current',
            years: 'years',
            months: 'months',
            present: 'Present',
            description: 'Experience description in English',
            shortDescription: 'Short experience description in English',
            contract: {
                selfEmployed: 'Self-employed',
                fullTime: 'Full-time',
                freelancer: 'Freelancer'
            },
            location: {
                home: 'Home Office',
                hybrid: 'Hybrid',
                office: 'Office'
            }
        },
        education: {
            title: 'Education',
            notFound: 'No education found...',
            degree: {
                bachelor: 'Bachelor degree of',
                master: 'Master degree of',
                phd: 'PhD in',
                certificate: 'Certificate in'
            },
            computerScience: 'Computer Science',
            location: {
                onSite: 'On-site',
                remote: 'Remote',
                hybrid: 'Hybrid'
            },
            status: {
                ongoing: 'Ongoing',
                completed: 'Completed'
            },
            subjects: {
                algorithm: 'Algorithm',
                algebra: 'Algebra',
                python: 'Python',
                cpp: 'C++',
                java: 'Java',
                english: 'English',
                assembly: 'Assembly',
                rust: 'Rust'
            }
        },
        resume: {
            title: 'Resume',
            download: 'Download',
            notFound: 'Oops! No resume available at the moment.'
        }
    }
} as const;
