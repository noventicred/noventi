# Projeto NoventiCred

## Informações do Projeto

**URL**: <ADICIONE_AQUI_O_SEU_URL>

## Como posso editar este código?

Existem várias formas de editar sua aplicação.

**Use seu editor de código preferido**

Se quiser trabalhar localmente usando seu próprio editor, basta clonar este repositório e fazer push das alterações.

O único requisito é ter Node.js & npm instalados - [instale com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Siga estes passos:

```sh
# Passo 1: Clone o repositório usando a URL do seu projeto Git.
git clone <SUA_URL_GIT>

# Passo 2: Navegue até o diretório do projeto.
cd <NOME_DO_SEU_PROJETO>

# Passo 3: Instale as dependências necessárias.
npm i

# Passo 4: Inicie o servidor de desenvolvimento com recarregamento automático e preview instantâneo.
npm run dev
```

**Edite um arquivo diretamente no GitHub**

- Navegue até o(s) arquivo(s) desejado(s).
- Clique no botão "Edit" (ícone de lápis) no canto superior direito da visualização do arquivo.
- Faça suas alterações e faça commit.

**Use GitHub Codespaces**

- Navegue até a página principal do seu repositório.
- Clique no botão "Code" (botão verde) próximo ao canto superior direito.
- Selecione a aba "Codespaces".
- Clique em "New codespace" para iniciar um novo ambiente Codespace.
- Edite arquivos diretamente no Codespace e faça commit e push das alterações quando terminar.

## Quais tecnologias são usadas neste projeto?

Este projeto é construído com:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Como posso fazer o deploy deste projeto?

Faça o deploy usando a plataforma de sua preferência (Vercel, Netlify, etc).

## Posso conectar um domínio personalizado?

Sim! Basta configurar o domínio na plataforma de deploy escolhida.

Leia mais na documentação da sua plataforma de deploy.

## Integração com API de criação de Pix (Axipayments)

Este projeto integra a geração de cobranças Pix via API da Axipayments. O fluxo é o seguinte:

1. O usuário preenche um formulário de simulação de empréstimo em 3 etapas.
2. Após o envio dos dados, o backend (`/api/pix/route.ts`) faz uma requisição para a API da Axipayments para criar uma cobrança Pix.
3. A resposta da API retorna o QR Code (imagem em base64) e o código "copia e cola" do Pix, que são exibidos para o usuário pagar.

### Configuração das chaves da API

Crie um arquivo `.env.local` na raiz do projeto e adicione suas chaves:

```
AXIPAY_PUBLIC_KEY=sua_public_key
AXIPAY_SECRET_KEY=sua_secret_key
```

### Exemplo de payload enviado para a Axipayments

```json
{
  "identifier": "12345678909-1712345678901",
  "amount": 17.9,
  "client": {
    "name": "Nome do Cliente",
    "email": "email@exemplo.com",
    "phone": "11999999999",
    "document": "12345678909"
  },
  "products": [
    {
      "id": "emprestimo",
      "name": "Simulação de Empréstimo",
      "quantity": 1,
      "price": 17.9
    }
  ],
  "dueDate": "2025-07-02",
  "metadata": { "origem": "formulario-emprestimo" },
  "callbackUrl": "https://sua.api.com/pix/callback/teste"
}
```

### Exemplo de resposta da Axipayments

```json
{
  "pix": {
    "code": "000201...",
    "base64": "iVBORw0KGgoAAA..."
  },
  ...
}
```

- O campo `pix.code` é o código "copia e cola".
- O campo `pix.base64` é a imagem do QR Code em base64.

### Exibição no frontend

O frontend consome a rota `/api/pix`, recebe os dados e exibe o QR Code e o código Pix para o usuário realizar o pagamento.
