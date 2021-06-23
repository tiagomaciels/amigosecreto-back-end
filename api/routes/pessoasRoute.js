const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");
const emails = require("../emails/emails")

const router = Router();

router.get("/pessoas", PessoaController.pegaTodasAsPessoas);
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa);

router.post("/pessoas", PessoaController.criaPessoa);

router.put("/pessoas/:id", PessoaController.atualizaPessoa);

router.delete("/pessoas/:id", PessoaController.deletaPessoa);

router.put("/sorteio", PessoaController.sorteio);

module.exports = router;
