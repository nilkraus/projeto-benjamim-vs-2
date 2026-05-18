**Configuração Do Formspree**
O formulário do site já está preparado para usar o Formspree. Hoje ele está com um link fictício no arquivo `index.html`:

```html
https://formspree.io/f/SEU_CODIGO_FORMSPREE
```

Quando o e-mail oficial for definido, será necessário criar o formulário no Formspree e substituir esse link pelo link real.

**1. Criar Conta No Formspree**
1. Acesse [https://formspree.io](https://formspree.io).
2. Clique em **Get Started** ou **Sign Up**.
3. Crie uma conta usando o e-mail responsável por receber os contatos do projeto.
4. Confirme o cadastro pelo e-mail, se o Formspree solicitar.

**2. Criar Um Novo Formulário**
1. Dentro do painel do Formspree, clique em **New Form**.
2. Dê um nome ao formulário, por exemplo:

```text
Contato - Projeto Benjamim
```

3. Configure o e-mail que receberá as mensagens, por exemplo:

```text
contato@projetobenjamim.org.br
```

4. Salve o formulário.

Depois disso, o Formspree vai gerar um endpoint parecido com este:

```html
https://formspree.io/f/abcdwxyz
```

Esse é o link real do formulário.

**3. Alterar No Código**
No projeto, abra o arquivo:

```text
index.html
```

Procure esta parte:

```html
<form class="contact-form" action="https://formspree.io/f/SEU_CODIGO_FORMSPREE" method="POST" novalidate>
```

Substitua apenas o link fictício pelo link real gerado pelo Formspree:

```html
<form class="contact-form" action="https://formspree.io/f/abcdwxyz" method="POST" novalidate>
```

Exemplo final:

```html
<form class="contact-form" action="https://formspree.io/f/abcdwxyz" method="POST" novalidate>
  <input type="hidden" name="_subject" value="Contato pelo site - Projeto Social Benjamim">
```

Não precisa alterar o JavaScript, desde que o `action` do formulário esteja correto.

**4. Como O Envio Vai Funcionar**
Quando uma pessoa preencher o formulário do site com:

```text
Nome completo
E-mail
Telefone / WhatsApp
Mensagem
```

e clicar em **Enviar Mensagem**, o site enviará esses dados para o Formspree.

O Formspree receberá as informações e encaminhará uma mensagem para o e-mail configurado no painel, por exemplo:

```text
contato@projetobenjamim.org.br
```

O usuário verá uma mensagem de sucesso na própria página:

```text
Mensagem enviada com sucesso. Em breve entraremos em contato.
```

Caso o link do Formspree esteja incorreto ou ainda não tenha sido configurado, aparecerá uma mensagem de erro avisando que não foi possível enviar.

**5. Primeiro Teste Obrigatório**
Depois de trocar o link no código:

1. Publique novamente o site no GitHub Pages.
2. Abra o site publicado.
3. Preencha o formulário com dados de teste.
4. Clique em **Enviar Mensagem**.
5. Verifique se o e-mail chegou na caixa de entrada configurada no Formspree.
6. Verifique também a pasta de spam/lixo eletrônico.

Em alguns casos, o Formspree pode pedir uma confirmação do e-mail de destino no primeiro envio.

**6. O Que você Deve Conferir**
Antes de considerar pronto, conferir:

```text
O link do action no index.html foi trocado pelo link real do Formspree.
O e-mail de recebimento foi confirmado dentro do Formspree.
O formulário envia sem abrir Outlook ou Gmail.
A mensagem chega no e-mail oficial do projeto.
A mensagem de sucesso aparece no site.
```

**Resumo Técnico**
O site usa este fluxo:

```text
Usuário preenche o formulário
        ↓
JavaScript valida os campos obrigatórios
        ↓
Dados são enviados para o endpoint do Formspree
        ↓
Formspree encaminha para o e-mail configurado
        ↓
Responsável recebe a mensagem no e-mail oficial
```

O ponto principal é substituir no `index.html`:

```html
https://formspree.io/f/SEU_CODIGO_FORMSPREE
```

pelo endpoint real gerado pelo Formspree.
