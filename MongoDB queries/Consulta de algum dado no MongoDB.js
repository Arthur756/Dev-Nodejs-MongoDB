
//Utilizando a base de dados
use aluno_db

//Inserindo os dados na coleção alunos
db.alunos.insertMany([{
    nome: 'joão', 
    email:'joao@mail.com',
    dataNascimento: '2000-09-10'
},
{
    nome: 'jose', 
    email:'jose@mail.com',
    dataNascimento: '2009-09-10'
},
{
    nome: 'maria', 
    email:'maria@mail.com',
    dataNascimento: '1990-05-13'
},
{
    nome: 'ana', 
    email:'ana@mail.com',
    dataNascimento: '2012-10-12'
}])

//Busca o nome e o e-mail do aluno mais velho
db.alunos.find({}, {_id: 0, nome: 1, email: 1}).sort({dataNascimento: 1}).limit(1)

//Busca o nome dos alunos que tem mais de 20 anos
db.alunos.find({dataNascimento: { $lte: "2002"}}, {_id: 0, nome:1})