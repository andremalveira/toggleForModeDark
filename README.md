## Toggle for Mode Dark .js

 Toggle for Mode Dark .js, é um script que adiciona um botão de alternância para uso do Mode Dark em seu projeto com todas as configurações necessária.

<a href="https://andremalveira.github.io/toggleModeDark/" target="_blank"> Demo</a>
------------

# - Instalação

1. Inclua o código CSS no início do seu arquivo css:

   Obs: Para usar o css abaixo, você deve construir seu projeto com variavéis CSS.

```css
:root{
  /*Coloque aqui as variáveis de cor do tema Padrão/Light*/
  --background:#eee;
  --text:#222;
}
[data-theme=dark]{
  /*Coloque aqui as variáveis de cor do tema Dark*/
  --background:#161625;
  --text:#eee;
}
```
------------
2. Adicione a Marcação HTML:

```html
<div id="toggleButton"></div>
```
------------
 3. Adicione o JavaScript antes da tag  </body>:

```html
<script src="togglemodedark.js"></script>     
```
------------

4. Inicialize o ToggleButton:


```html
<script>toggleModeDark();</script>
```

ou

```javascript
toggleModeDark();
```

------------

# - Opções do ToggleButton:

|  Opçoes | Tipo  | Padrão  | Descrição  |
| ------------ | ------------ | ------------ | ------------ |
|  id: | Text  | "#toggleButton"  | Altera o id do ToggleButton  |
|  toggleSize: | Number  | 30  | Altera o tamanho do ToggleButton  |
| dotColor:  |  Text | "#fff"  | Altera a cor do dot do ToggleButton  |
| activatedBackground:  |  Text | "#192351"  | Altera a cor de fundo quando ativado  |
|  disabledBackground: | Text  | "#f6ca69"  |  Altera a cor de fundo quando desativado |
|  textLightDark: | Boolean  | false  |  Adiciona o texto Light e Dark no ToggleButton |


Exemplos:

```javascript
//Alterando o Tamanho do ToggleButton
toggleModeDark({
	toggleSize:40
});

//Alterando o tamanho e as cores de fundo do ToggleButton
toggleModeDark({
	toggleSize:40,
	activatedBackground:"#eee",
	disabledBackground:"#333",
});
```