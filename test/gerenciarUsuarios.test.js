const { expect } = require('chai');
const {retornarUsuarios} = require('../src/gerenciarUsuarios')
const {adicionarNovoUsuario} = require('../src/gerenciarUsuarios')


describe('Testar as Funções de Gestão de Usuários', function(){
    it('Validar que posso adicionar um novo nome de usuário na lista', function(){
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario('Djalma');

        // 2. Retornar a lista de usuarios na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios(); 
        // 3. Comparar se o novo nome está no fim da lista de usuários 
        expect(listaDeUsuarios.at(-1)).to.equal('Djalma');
    })
});