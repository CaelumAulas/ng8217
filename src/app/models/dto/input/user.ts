export class User {

    private name = '';
    private username = '';
    private password = '';
    private phone = '';
    private avatar = '';

    constructor({nome, username, senha, telefone, avatar}: {nome: string, username: string, senha: string, telefone: string, avatar: string}){

        this.name = nome;
        this.username = username;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;

    }

}