document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('obter-imagem-cachorro').addEventListener('click', function () {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                const imgElement = document.getElementById('imagem-cachorro');
                imgElement.src = data.message;
                imgElement.style.display = 'block';
            })
            .catch(error => console.error('Erro ao obter imagem de cachorro:', error));
    });
});
