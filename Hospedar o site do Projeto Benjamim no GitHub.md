**Objetivo**
Hospedar o site do Projeto Benjamim no GitHub do projeto ou da igreja, usando como base o repositório atual:

[https://github.com/nilkraus/projeto-benjamim-vs-2](https://github.com/nilkraus/projeto-benjamim-vs-2)

E depois apontar o domínio comprado no Registro.br para o GitHub Pages.

**1. Baixar O Projeto Atual**
Opção mais simples:

1. Acessar o repositório:
   [https://github.com/nilkraus/projeto-benjamim-vs-2](https://github.com/nilkraus/projeto-benjamim-vs-2)

2. Clicar no botão verde **Code**.

3. Clicar em **Download ZIP**.

4. Extrair o arquivo `.zip` no computador.

5. Conferir se dentro da pasta existem arquivos como:

```text
index.html
css/
js/
assets/
politica-de-privacidade.html
transparencia.html
README.md
```

**2. Criar Um Novo Repositório No GitHub**
1. Entrar no GitHub da instituição ou do responsável técnico.

2. Clicar em **New repository**.

3. Criar um repositório com nome simples, por exemplo:

```text
projeto-benjamim
```

4. Deixar como **Public**, pois GitHub Pages gratuito funciona diretamente em repositórios públicos.

5. Não precisa marcar para criar README, porque o projeto já tem arquivos.

6. Clicar em **Create repository**.

**3. Enviar Os Arquivos Para O Novo Repositório**
Opção pela interface do GitHub:

1. Entrar no repositório novo.

2. Clicar em **uploading an existing file** ou **Add file > Upload files**.

3. Arrastar todos os arquivos e pastas do projeto extraído.

4. Conferir se o `index.html` está na raiz do repositório, e não dentro de uma pasta extra.

Correto:

```text
projeto-benjamim/index.html
projeto-benjamim/css/
projeto-benjamim/js/
projeto-benjamim/assets/
```

Errado:

```text
projeto-benjamim/projeto-benjamim-vs-2/index.html
```

5. Clicar em **Commit changes**.

**4. Ativar O GitHub Pages**
1. No repositório novo, clicar em **Settings**.

2. No menu lateral, clicar em **Pages**.

3. Em **Build and deployment**, selecionar:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

4. Clicar em **Save**.

5. Aguardar alguns minutos.

O GitHub vai gerar um endereço parecido com:

```text
https://usuario-ou-organizacao.github.io/projeto-benjamim/
```

Esse link serve para testar antes de configurar o domínio.

**5. Configurar O Domínio Personalizado No GitHub**
Depois que o domínio já estiver comprado no Registro.br, por exemplo:

```text
projetobenjamim.org.br
```

No GitHub:

1. Ir em **Settings > Pages**.

2. Em **Custom domain**, digitar o domínio:

```text
projetobenjamim.org.br
```

3. Clicar em **Save**.

O GitHub poderá criar automaticamente um arquivo chamado `CNAME` no repositório com o domínio dentro.

Segundo a documentação do GitHub, é recomendado adicionar o domínio no GitHub antes de configurar o DNS, para evitar risco de outra pessoa tentar usar o domínio em outro Pages.

**6. Configurar DNS No Registro.br**
No Registro.br:

1. Acessar [https://registro.br](https://registro.br).

2. Entrar na conta onde o domínio foi comprado.

3. Clicar no domínio desejado.

4. Ir até a área de **DNS**.

5. Usar o modo avançado de edição da zona DNS, caso necessário.

Para o domínio principal, exemplo:

```text
projetobenjamim.org.br
```

criar quatro registros do tipo **A** apontando para os IPs do GitHub Pages:

```text
Tipo: A
Nome: @ ou vazio
Valor: 185.199.108.153
```

```text
Tipo: A
Nome: @ ou vazio
Valor: 185.199.109.153
```

```text
Tipo: A
Nome: @ ou vazio
Valor: 185.199.110.153
```

```text
Tipo: A
Nome: @ ou vazio
Valor: 185.199.111.153
```

Para o `www`, criar um registro **CNAME**:

```text
Tipo: CNAME
Nome: www
Valor: usuario-ou-organizacao.github.io
```

Importante: no CNAME do `www`, não colocar o nome do repositório. O GitHub recomenda apontar para:

```text
usuario.github.io
```

ou:

```text
organizacao.github.io
```

Exemplo fictício:

```text
projetobenjamim.github.io
```

**7. Aguardar Propagação**
Depois de alterar o DNS, pode levar alguns minutos ou até 24 horas para funcionar completamente.

Durante esse período, o site pode abrir em alguns dispositivos e em outros não. Isso é normal por causa da propagação DNS.

**8. Ativar HTTPS**
Depois que o domínio estiver funcionando:

1. Voltar em **GitHub > Settings > Pages**.

2. Aguardar aparecer a opção **Enforce HTTPS**.

3. Marcar **Enforce HTTPS**.

Às vezes essa opção demora algumas horas para liberar.

**9. Testes Finais**
Testar estes endereços:

```text
https://projetobenjamim.org.br
https://www.projetobenjamim.org.br
```

Conferir:

```text
A página inicial abre corretamente.
As imagens carregam.
A galeria funciona.
O menu mobile funciona.
Os links do rodapé funcionam.
O formulário aponta para o Formspree correto.
O botão de WhatsApp funciona.
O VLibras aparece.
O HTTPS está ativo.
```

**10. Fluxo De Manutenção Depois Da Hospedagem**
Quando precisar alterar conteúdo:

1. Entrar no GitHub.

2. Abrir o arquivo desejado, por exemplo:

```text
index.html
css/styles.css
js/main.js
```

3. Clicar no lápis de edição.

4. Fazer a alteração.

5. Clicar em **Commit changes**.

6. Aguardar o GitHub Pages atualizar o site.

Normalmente a atualização aparece em poucos minutos.

**Observações Importantes**
O domínio próprio não fica “dentro” do GitHub. O que acontece é:

```text
Domínio comprado no Registro.br
        ↓
DNS aponta para GitHub Pages
        ↓
GitHub Pages mostra o site hospedado no repositório
```

Também é importante manter o repositório público e com o `index.html` na raiz.

Fontes úteis:
- [GitHub Docs: configurar domínio personalizado no GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Registro.br](https://registro.br)
