function cadastroCliente() {
  let nome = document.getElementById("nome");
  let cpf = document.getElementById("cpf");
  let email = document.getElementById("email");
  let telefone = document.getElementById("telefone");
  let endereço = document.getElementById("endereço");

  let cliente = {
    nome: nome.value,
    cpf: cpf.value,
    email: email.value,
    telefone: telefone.value,
    endereço: endereço.value,
  };

  let dados = JSON.parse(localStorage.getItem("dadosCliente"));

  if (dados == null) {
    localStorage.setItem("dadosCliente", "[]");
    dados = [];
  }

  dados.push(cliente);

  localStorage.setItem("dadosCliente", JSON.stringify(dados));
  alert("Cliente cadastrado com sucesso!");

  nome.value = "";
  cpf.value = "";
  email.value = "";
  telefone.value = "";
  endereço.value = "";

  //

  let valores = Object.values(cliente);
  let tbody = document.getElementById("tab-clientes");
  let tr = document.createElement("tr");
  tbody.append(tr);

  valores.forEach((valor) => {
    let td = document.createElement("td");
    tr.append(td);
    td.append(valor);
  });
}
