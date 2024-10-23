const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(
    pokedev => {
        pokedev.addEventListener("click", () =>{
            esconderCartaoPokedev();           

            const idPokedevSelecionado = mostrarCartaoPokedev(pokedev);        
            
            desativarPokedevNaListagem();

            ativarPokedevNaListagem(idPokedevSelecionado);
                      
        })
    }
)



function ativarPokedevNaListagem(idPokedevSelecionado) {
    const pokedevParaAtivar = document.getElementById(idPokedevSelecionado);
    pokedevParaAtivar.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedev(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
