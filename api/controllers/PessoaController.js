const database = require("../models");
const emails = require("../emails/emails");

class PessoaController {
  static async pegaTodasAsPessoas(req, res) {
    try {
      const todasAsPessoas = await database.Pessoas.findAll();
      return res.status(200).json(todasAsPessoas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaUmaPessoa(req, res) {
    const { id } = req.params;
    try {
      const umaPessoa = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(umaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async criaPessoa(req, res) {
    const novaPessoa = req.body;
    try {
      const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
      return res.status(200).json(novaPessoaCriada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async atualizaPessoa(req, res) {
    const { id } = req.params;
    const novosDadosPessoa = req.body;

    try {
      await database.Pessoas.update(novosDadosPessoa, {
        where: { id: Number(id) },
      });
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(pessoaAtualizada);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deletaPessoa(req, res) {
    const { id } = req.params;

    try {
      await database.Pessoas.destroy({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ mensagem: `Pessoa com o ID ${id} deletado(a)` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async sorteio(req, res) {
    let pessoas = await database.Pessoas.findAll();
    let amigoSecreto = [...pessoas];
    const len = amigoSecreto.length;

    //Embaralha o array utilizando o algoritmo de Sattolo, uma variação do algoritmo de Fischer Yates
    for (let i = 0; i < len - 1; i++) {
      
      let j = Math.floor(Math.random() * (len - (i + 1))) + (i + 1); 
      const temp = amigoSecreto[i];
      amigoSecreto[i] = amigoSecreto[j];
      amigoSecreto[j] = temp;
    }

    //Transforma o array embaralhado
    amigoSecreto = amigoSecreto.map((item) => {
      return {
        nome_amigoSecreto: item.nome,
      };
    });

    //Update em todos as Pessoas
    for (var i = 0; i < pessoas.length; i++) {
      try {
        await database.Pessoas.update(amigoSecreto[i], {
          where: { nome: String(pessoas[i].nome) },
        });
        pessoas[i] = await database.Pessoas.findOne({
          where: { nome: String(pessoas[i].nome) },
        });
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

        
    // Envia o e-mail para as Pessoas, com a informação de seu amigo secreto
    const email = await database.Pessoas.findAll();
    await emails.enviaEmail(email).catch(console.log);
    return res.status(200).json(pessoas);
 
  }

}

module.exports = PessoaController;
