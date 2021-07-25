function cadastroProduto() {
  let codigo = document.getElementById("codigo");
  let produto = document.getElementById("produto");
  let marca = document.getElementById("marca");
  let quantidade = document.getElementById("quantidade");

  let item = {
    codigo: codigo.value,
    produto: produto.value,
    marca: marca.value,
    quantidade: quantidade.value,
  };

  let dados = JSON.parse(localStorage.getItem("dadosProduto"));

  if (dados == null) {
    localStorage.setItem("dadosProduto", "[]");
    dados = [];
  }

  dados.push(item);

  localStorage.setItem("dadosProduto", JSON.stringify(dados));
  alert("Produto cadastrado com sucesso!");

  codigo.value = "";
  produto.value = "";
  marca.value = "";
  quantidade.value = "";

  //

  let valores = Object.values(item);
  let tbody = document.getElementById("tab-produtos");
  let tr = document.createElement("tr");
  tbody.append(tr);

  valores.forEach((valor) => {
    let td = document.createElement("td");
    tr.append(td);
    td.append(valor);
  });
}
