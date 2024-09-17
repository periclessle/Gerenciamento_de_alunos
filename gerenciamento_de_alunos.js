// Definição dos registros de cada Aluno (1)
// Função que cria os registros
const criarRegistro = ({...reg}) => (nome,idade,matricula,curso) =>{
    reg.nome = String(nome)
    reg.idade = Number(idade)
    reg.matricula = Number(matricula)
    reg.curso = String(curso)
    return reg
}
const aluno = Object.freeze({})
const Dimitri = Object.freeze(criarRegistro(aluno)(`Dimitri`,19,20240001001,`CC`))
const Nayara = Object.freeze(criarRegistro(aluno)(`Nayara`,19,20230001002,`SI`))
const Pericles = Object.freeze(criarRegistro(aluno)(`Pericles`, 19,20250001003, `EC`))


// Criação da Turma (2)
const turma = Object.freeze([])


// Função adicionar alunos (3)
// Cria uma nova cópia da lista turma
const adicionarAluno = (...reg) => (...lista) => (lista, reg)
const turma1 = adicionarAluno(Dimitri, Nayara, Pericles)(turma)


// Função para mostrar a Turma (4)
const listarAlunos = () => console.log(turma1)
// listarAlunos()


//Fn que busca alunos pelo curso (5)
const buscarporCurso = (lista) => (curso) => lista.filter((x) => x.curso == curso)
//Const da lista de pessoas de um dado Curso
const filtrar = buscarporCurso(turma1)
// console.log(filtrar('SI'))


// Função remover alunos (6)
// lista de alunos removidos
const removidos = Object.freeze([])
const aRemover = adicionarAluno(Nayara, Dimitri)(removidos)
// Função que remove
const removerAluno = (lista) => (aRemover) => lista.filter((x) => !(aRemover.some(y => y == x)))
// Const da turma reduzida de alunos
const turma2 = removerAluno(turma1)(aRemover)
// console.log(turma2)

// Função que ordena os alunos do mais antigo para o mais recente (7)
const ordenar = (lista) => lista.sort((a,b) => a.matricula < b.matricula ? -1 : a.matricula > b.matricula ? 1 : 0)

// Função que retorna a quantidade de alunos em cada curso presentes em uma turma (8)

const quantidade = (lista) => (curso) => lista.filter((x) => x.curso == curso).length
const filtrado = quantidade(turma1)
// console.log(`O números de pessoas nesse curso é ${filtrado('CC')}`)


// Fn que edite os valores de campos do registro de algum aluno (9)

const editar = ({...aluno}) => (nome= aluno.nome, idade= aluno.idade, matricula= aluno.matricula, curso= aluno.curso) => {
    aluno.nome = nome
    aluno.idade = idade
    aluno.matricula = matricula
    aluno.curso = curso
    return aluno
}
const alunoEditado = editar(Pericles)('Caio Mendonça',20)
// console.log(alunoEditado)


// As listas se mantém inalteradas, portanto, funcional.
// Testando:
console.log(turma)
console.log(turma1)
console.log(removidos)
console.log(turma2)
console.log(ordenar(turma1))
console.log(filtrar('SI'))
console.log(Pericles)
console.log(alunoEditado)
console.log(`O números de pessoas nesse curso é ${filtrado('CC')}`)
