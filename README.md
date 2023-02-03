# Talker Manager
### Autor: Matheus Eduardo de Sousa Azevedo

Este projeto foi desenvolvido por mim e faz parte do acervo de atividades executadas na escola de programação Trybe. A formação ao longo de 1 ano em Desenvolvimento Web desta instituição  conta com mais de 1.500 horas de aulas e aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias ágeis e habilidades comportamentais. Tudo voltado totalmente para o mercado de trabalho com intuito de entregar um profissional adequado para a realidade atual. 

## Sobre o projeto

É uma aplicação de gerenciamento de palestrantes, onde é possível registrar, visualizar, pesquisar, editar e excluir informações dos palestrantes. É uma API Rest escrita em Node.js com Express e utiliza docker para garantir a consistência dos dados. O projeto segue os conceitos de CLEAN CODE para garantir a qualidade do código e facilidade na manutenção.

Os dados dos palestrantes são armazenados em um arquivo JSON, permitindo uma fácil manipulação e backup dos dados. A aplicação conta com um crud completo dos palestrantes, garantindo a integridade dos dados e a efetividade na gestão dos palestrantes.

## Rotas

A aplicação conta com duas rotas principais: talker e login.

-   A rota talker é responsável por realizar as operações de registro, visualização, pesquisa, edição e exclusão dos palestrantes.
    
-   A rota login é responsável por autenticar o usuário, permitindo o acesso ao crud dos palestrantes.
    

## Instalação

Para instalar e executar a aplicação, é necessário ter o Node.js e o docker instalados em sua máquina.

1.  Clone o repositório:

`git clone git@github.com:Matheus-Azevedo/Project-Talker-Manager-Matheus-Eduardo.git` 

2.  Entre na pasta do projeto:


`cd talker-register` 

3.  Instale as dependências:

`npm install` 

4.  Inicie a aplicação:

`docker-compose up` 

## Contribuição

Se desejar contribuir para o projeto, basta clonar o repositório, criar uma branch com suas alterações e enviar um pull request. Qualquer contribuição é bem-vinda!

![1667793425879](https://user-images.githubusercontent.com/40497869/210862923-97584f96-f3d1-4614-a9b1-647bd392e36b.jpeg)
