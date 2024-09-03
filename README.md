# atividadePI
 GitHub API
Descrição: A GitHub API permite que você interaja com dados do GitHub, como repositórios, issues, pull requests, e muito mais. É uma API muito útil para automação e integração com o GitHub.
Demonstração via curl:curl -H "Authorization: token SEU_TOKEN" https://api.github.com/repos/OWNER/REPO

OpenWeatherMap API
Descrição: A OpenWeatherMap API fornece informações sobre o clima em diferentes cidades ao redor do mundo. Ela oferece dados como temperatura, condições meteorológicas e previsões.
Demonstração via curl:

Obter a previsão do tempo para uma cidade (GET):
curl "https://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo&appid=SUA_CHAVE_DE_API"

Twitter API
Descrição: A Twitter API permite que você acesse e interaja com dados do Twitter, como tweets, usuários, e muito mais. Você pode usar esta API para postar tweets, ler timelines e seguir/desseguir usuários.
Demonstração via curl:Postar um novo tweet: (POST):curl -X POST "https://api.twitter.com/2/tweets" \
     -H "Authorization: Bearer SEU_TOKEN_DE_AUTENTICAÇÃO" \
     -H "Content-Type: application/json" \
     -d '{"text": "Olá, mundo!"}'

