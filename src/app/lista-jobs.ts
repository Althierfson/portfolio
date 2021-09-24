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
        nome: 'Influência de agente virtual afetivo nas decisões do jogador em um jogo casual',
        discricao: 'Agentes virtuais são recursos bastante utilizados em jogos, os quais são primordial para muito deles, e podem ser usado para os mais diversos objetivos, como ajudar o jogador, dificultar ou orientar. Além disso, muitos desenvolvedores criam agentes que conseguem simular emoções como alegria, tristeza ou raiva. Esse tipo de agente, éconhecido como agente emotivo, e a expressão de emoções por parte dele em um jogopode resultar em uma maior imersão do jogador e também em uma experiência mais vívida. Inclusive, a manifestação de emoções também pode gerar uma maior empatiapor parte do jogador, fazendo com que ele fique triste ou feliz conforme o agente, respectivamente, simula esses sentimentos. No vasto universo dos jogos, uma classeque apresenta um crescimento tanto de jogos quanto de jogadores é a classe de jogos casuais. Esse tipo de jogo vem ganhando destaque, graças a evolução dos dispositivosmóveis e o acesso à tecnologia. Apesar de jogos casuais serem bastante simples emnível de desenvolvimento, muito desenvolvedores não apostam no recurso que podeser utilizado para engajamento do jogador, que são os agentes virtuais emotivos. Essefato, faz com que os desenvolvedores deixem de utilizar esse importante recurso quepode melhorar a experiência do usuário com o jogo. Por esse motivo, esse trabalho descreve o desenvolvimento de um jogo casual e de um agente virtual emotivo, com objetivo de verificar a influência e o impacto que esse agente causa na experiência do jogador. O agente desenvolvido foi inserido no jogo como um ajudante, que fornecedicas, que podiam ser verdadeiras ou falsas. Além disso, o agente utilizou a simulaçãode emoções para persuadir o jogador, e fazê-lo seguir as orientações dele. De acordocom os estudos realizados, foi encontrado evidências que o contato com o agenteafetou a experiência do jogador, e que o jogador quando percebe que o agente não está ajudando a avançar tende a ignorá-lo, mesmo que esse continue oferecendo ajuda. O estudo também mostrou que um agente que não se mostra capaz de ajudar o jogadorcausa a perda de confiança da pessoa no agente. Ainda foi observado no estudo, que os participantes perceberam o agente de forma diferente dependendo de como foi ainteração humano-agente.',
        links: [
            {
                nome: 'Repositorio GitHub',
                url: 'https://github.com/danieltorresBR/MemoryGame_ProjetoPesquisaUERN.git'
            }
        ]
    },
    {
        id: 2,
        nome: 'Space Virus Game',
        discricao: 'Você é o capitão de uma base espacial chamada “Caju Space”, uma base de sucesso e seguraça, onde milhares de pessoas moram e visitam diariamente. Porem uma ameaça se levanta contra ela, a ameça de um vírus alienígena conhecido como “Virus D”, seu objetivo como capitão da base é evitar que tal vírus se aproxime da nave e contamine as pessoas que vivem nela.Proteja a base eliminando o vírus, lute até o seu último suspiro, isso pode ser uma “guerra infinita”. Toque nos vírus para elimina-los, toque nos suprimentos para coleta-los e aumentar a resistência da sua base. Elimine os vírus antes que passem o escudo de proteção para ganhar mais pontos.',
        links: [
            {
                nome: 'Link Play Store',
                url: 'https://play.google.com/store/apps/details?id=com.cajugames.projetod&hl=pt-BR'
            }
        ]
    },
    {
        id: 3,
        nome: 'Cockroach Escape',
        discricao: 'Um divertido jogo onde você controla uma barata, o seu objetivo é desviar das botas que tentam esmagá-lo. Um ótimo jogo, excelente para passar o tempo e se divertir. Faça o seu recorde e tente superá-lo constantemente, colete os bónus para obter a maior pontuação possível. Fuja das botas, não seja esmagado e obtenha a maior pontuação. Um jogo completamente gratuito.',
        links: [
            {
                nome: 'Link Play Store',
                url: 'https://play.google.com/store/apps/details?id=org.godotengine.barataescape&hl=pt-BR'
            }
        ]
    },
]