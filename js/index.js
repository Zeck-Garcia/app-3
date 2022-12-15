let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')

let pontos = 0
let placar = 0

let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplaudos = document.querySelector('#somAplausos')

let numQuestao = document.querySelector('#numQuestao')
let pergunta = document.querySelector('#pergunta')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

let articleQuestoes = document.querySelector('.questoes')

let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao : 0,
    pergunta : 'Pergunta',
    alternativaA : 'Alternativa A',
    alternativaB : 'Alternativa B',
    alternativaC : 'Alternativa C',
    alternativaD : 'Alternativa D',
    correta : '0',
    info : 'Informacao'
}

const q1 = {
    numQuestao : 1,
    pergunta : 'De quem é a famosa frase “Penso, logo existo”?',
    alternativaA : 'Platão',
    alternativaB : 'Galileu Galilei',
    alternativaC : 'Descartes',
    alternativaD : 'Sócrates',
    correta : 'Descartes',
    info : '“Je pense, donc je suis” é a frase original, escrita em francês, do filósofo René Descartes (1596-1650). Ela resume o pensamento e o método de Descartes, para quem tudo tem início na dúvida.'
}

const q2 = {
    numQuestao : 2,
    pergunta : 'De onde é a invenção do chuveiro elétrico?',
    alternativaA : 'França',
    alternativaB : 'Inglaterra',
    alternativaC : 'Brasil',
    alternativaD : 'Itália',
    correta : 'Brasil',
    info : 'Francisco Canhos é o nome do homem que, na década de 40, desenvolveu o primeiro chuveiro elétrico seguro em Jaú-SP. O aparelho vinha sendo desenvolvido desde os anos 30, mas apresentava riscos de curto-circuito'
}

const q3 = {
    numQuestao : 3,
    pergunta : 'Quais o menor e o maior país do mundo?',
    alternativaA : 'Vaticano e Rússia',
    alternativaB : 'Nauru e China',
    alternativaC : 'Mônaco e Canadá',
    alternativaD : 'Malta e Estados Unidos',
    correta : 'Vaticano e Rússia',
    info : 'O Vaticano, sede da igreja católica, tem apenas 44 hectares (0,44 km2). A Rússia, localizada em dois continentes (Ásia e Europa), tem 17 milhões de km2.'
}

const q4 = {
    numQuestao : 4,
    pergunta : 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
    alternativaA : 'Jânio Quadros',
    alternativaB : 'Jacinto Anjos',
    alternativaC : 'Getúlio Vargas',
    alternativaD : 'João Goulart',
    correta : 'João Goulart',
    info : 'João Belchior Marques Goulart (1919-1976) foi o 24º presidente do Brasil, cujo período de governo compreende os anos de 1961 a 1964.'
}

const q5 = {
    numQuestao : 5,
    pergunta : 'Qual o grupo em que todas as palavras foram escritas corretamente?',
    alternativaA : 'Asterístico, beneficiente, meteorologia, entertido',
    alternativaB : 'Asterisco, beneficente, metereologia, entretido',
    alternativaC : 'Asterisco, beneficente, meteorologia, entretido',
    alternativaD : 'Asterisco, beneficiente, metereologia, entretido',
    correta : 'Asterisco, beneficente, meteorologia, entretido',
    info : 'Estas palavras são exemplos de barbarismo, um vício de linguagem em que as palavras são pronunciadas ou escritas incorretamente.'
}

const q6 = {
    numQuestao : 6,
    pergunta : 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
    alternativaA : 'Dom Quixote',
    alternativaB : 'O Senhor dos Anéis',
    alternativaC : 'O Pequeno Príncipe',
    alternativaD : 'Ela, a Feiticeira',
    correta : 'Dom Quixote',
    info : 'Dom Quixote, de Miguel de Cervantes, é um clássico da literatura espanhola. A obra foi escrita em duas partes, uma em 1605, e a outra em 1615.'
}

const q7 = {
    numQuestao : 7,
    pergunta : 'Quantas casas decimais tem o número pi?',
    alternativaA : 'Duas',
    alternativaB : 'Centenas',
    alternativaC : 'Infinitas',
    alternativaD : 'Vinte',
    correta : 'Infinitas',
    info : 'Ao longo dos tempos, vários estudiosos têm se dedicado a calcular o número pi e já chegaram ao número de 62,8 trilhões de casas decimais.'
}

const q8 = {
    numQuestao : 8,
    pergunta : 'Atualmente, quantos elementos químicos a tabela periódica possui?',
    alternativaA : '113',
    alternativaB : '109',
    alternativaC : '108',
    alternativaD : '118',
    correta : '118',
    info : 'Os últimos elementos foram adicionados à tabela periódica em 2016. Eles são: 113 (Nihônio), 115 (Moscóvio), 117 (Tenessino) e 118 (Oganessônio).'
}

const q9 = {
    numQuestao : 9,
    pergunta : 'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
    alternativaA : 'Japão e Serra Leoa',
    alternativaB : 'Austrália e Afeganistão',
    alternativaC : 'Itália e Chade',
    alternativaD : 'Brasil e Congo',
    correta : 'Japão e Serra Leoa',
    info : 'No Japão, a expectativa de vida é em média 84 anos, enquanto na Serra Leoa é 53 anos.'
}

const q10 = {
    numQuestao : 10,
    pergunta : 'O que a palavra legend significa em português?',
    alternativaA : 'Legenda',
    alternativaB : 'Conto',
    alternativaC : 'Lenda',
    alternativaD : 'Legendário',
    correta : 'Lenda',
    info : 'Legend, que parece significar “legenda”, faz parte do grupo dos falsos cognatos. Falsos cognatos são palavras de línguas distintas que apresentam semelhanças na grafia e/ou na pronúncia, mas cujos significados são diferentes. Outros exemplos são: costume, que significa fantasia, e to push, que significa empurrar.'
}

const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log('Total de questões ' + totalDeQuestoes)
total.textContent = totalDeQuestoes

numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

function proximaQuestao(nQuestao){
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
    d.setAttribute('value', nQuestao + 'D')
    progresso.value = parseInt(progresso.value) + 1
}

alternativas.addEventListener('dblclick', () =>{
    pontos -= 10
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100}
        
})

function bloquearAlternativas(){
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas(){
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto(){
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar(){
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta){
    
    let numeroDaQuestao = nQuestao.value

    let respostaEscolhida = resposta.textContent

    let acerta = questoes[numeroDaQuestao].correta

    let ajuda = document.querySelector('.informacao')

    if(respostaEscolhida == acerta){

        piscarNoAcerto()

            ajuda.style.display = 'block'
            let teste = questoes[numeroDaQuestao].info
            ajuda.textContent = teste

            ajuda.addEventListener('click', function(){
        
                if (ajuda.style.display = 'none'){

                    console.log('deu bom') 
                    
                    setTimeout(function(){
                        proxima = numeroDaQuestao + 1
                
                        if(proxima > totalDeQuestoes){
                            console.log('Fim do Jogo')
                            fimDoJogo()
                        }   else {
                            proximaQuestao(proxima)
                        }
                    }, 150)

                } else {
                    console.log('deu ruim')
                }
            })

        somAcerto.play()
        pontos += 10

        setTimeout(() => {
            tirarPiscar()
        }, 250)
    
    }  else {
        console.log('nosi')

        setTimeout(function(){

            proxima = numeroDaQuestao + 1
    
            if(proxima > totalDeQuestoes){
                console.log('Fim do Jogo')
                fimDoJogo()
            }   else {
                proximaQuestao(proxima)
            }
        }, 150)
    }

        placar = pontos
        instrucoes.textContent = 'Pontos ' + placar

    desbloquearAlternativas()
}

function fimDoJogo(){

    somAplaudos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = 'Fim de jogo, você conseguiu ' + pontos + ' ponto' + s

    instrucoes.classList.add('placar')

    articleQuestoes.style.display = 'none'

    setTimeout(function(){
        pontos = 0
        
        instrucoes.classList.remove('placar')

        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na respota'
    }, 6000)
}

//PROJETO DESENVOLVIDO A PARTIR DO CURSO DE JS