interface Link {
    nome: string;
    url: string;
}

export interface Job {
    id: number;
    nome: string;
    discricao: string;
    links: Link;
}

export const Lista_jobs = [
    {
        id: 1,
        nome: 'Influencia de Agente',
        discricao: 'Trabalho desenvolvido para...',
        links: [
            {
                nome: '16 congresso',
                url: 'urls'
            },
            {
                nome: 'Repositorio GitHub do projeto',
                url: 'urls'
            }
        ]
    },
    {
        id: 2,
        nome: 'Site em HTML5',
        discricao: 'Um simples site desenvolvido em HTML5',
        links: [
            {
                nome: 'Repositorio Github',
                url: 'https://github.com/Althierfson/Google-Glass-Site-HTML5-.git'
            }
        ]
    },
    {
        id: 3,
        nome: 'Influencia de Agente',
        discricao: 'Trabalho desenvolvido para...',
        links: [
            {
                nome: '16 congresso',
                url: 'urls'
            },
            {
                nome: 'Repositorio GitHub do projeto',
                url: 'urls'
            },
            {
                nome: 'Repositorio GitHub do projeto',
                url: 'urls'
            }
        ]
    }, 
]