let input = document.getElementById('input');

let CEP = document.getElementById('cep');

let rua = document.getElementById('rua');

let complemento = document.getElementById('complemento');

let Bairro = document.getElementById('bairro');

let Localidade = document.getElementById('localidade');

let DDD = document.getElementById('ddd');

let flagContainer = document.querySelector('.img');

let img = document.getElementById('notFixed');

function getLocate() {
    if (input.value.length < 8 || input.value.length > 8) {
        window.alert('Um CEP deve conter exatamente 8 digítos!');
        input.focus();
    }
    else {
        axios.get(`https://viacep.com.br/ws/${input.value}/json/`)
        .then(response => {
            const data = response.data;
            CEP.innerHTML = `CEP - ${input.value}`;
            rua.innerHTML = JSON.stringify(data.logradouro);
            complemento.innerHTML = `Complemento - ${JSON.stringify(data.complemento)}`;
            Bairro.innerHTML = `Bairro - ${JSON.stringify(data.bairro)}`;
            Localidade.innerHTML = `Localidade - ${JSON.stringify(data.localidade)} - ${
                JSON.stringify(data.uf)
            }`;
            DDD.innerHTML = `DDD - ${JSON.stringify(data.ddd)}`;
            input.value = ''
            switch (data.uf) {
                case 'AC':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Acre.png')
                    break
                case 'AL':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Alagoas.jpg')
                    break
                case 'AP':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Amapa.png')
                    break
                case 'AM':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Amazonas.jpg')
                    break
                case 'BA':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Bahia.jpg')
                    break
                case 'CE':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Ceara.jpg')
                    break
                case 'DF':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/DF.jpg')
                    break
                case 'ES':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/EspiritoSanto.jpg')
                    break
                case 'GO':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Goias.jpg')
                    break
                case 'MA':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Maranhao.jpg')
                    break
                case 'MS':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/MatoGrossoSUL.jpg')
                    break
                case 'MT':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/MatoGrosso.jpg')
                    break
                case 'MG':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/MinasGerais.jpg')
                    break
                case 'PA':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Para.jpg')
                    break
                case 'PB':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Paraiba.jpg')
                    document.body.style.backgroundImage = 'url(./flags/Paraiba.jpg)'
                    break
                case 'PR':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Parana.jpg')
                    break
                case 'PE':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Pernambuco.jpg')
                    break
                case 'PI':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Piaui.jpg')
                    break
                case 'RJ':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Rio.jpg')
                    break
                case 'RN':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/RioGrandeDoNorte.jpg')
                    break
                case 'RS':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/RGdoSul.jpg')
                    break
                case 'RO':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Rondonia.jpg')
                    break
                case 'RR':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Roraima.jpg')
                    break
                case 'SC':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/SantaCatarina.jpg')
                    break
                case 'SP':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/SaoPaulo.jpg')
                    break
                case 'SE':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Sergipe.jpg')
                    break
                case 'TO':
                    flagContainer.style.display = 'block'
                    img.setAttribute('src', './flags/Tocantins.jpg')
                    break
                default:
                    document.body.style.backgroundImage = 'url(./img/city.png)'
            }

        })
        .catch(error => {
            console.log(error);
            window.alert(
                'Ops! Parece que houve um erro para recebermos seu CEP 😢. Desculpe não é você, é a gente 🤖🚧'
            );
        });
    }
}