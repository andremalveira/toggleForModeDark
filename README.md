# Toggle for Mode Dark .js

------------

 Toggle for Mode Dark .js, é um script que adiciona um botão de alternância para uso do Mode Dark em seu projeto com todas as configurações necessária.

------------

# - Instalação

1. Inclua o código CSS no início do seu arquivo css:

Obs: Para usar o css abaixo, você deve construir seu projeto com variavéis CSS.

```css
:root{
  /*Aqui coloque as variáveis de cor do tema Padrão/Light*/
  --background:#eee;
  --text:#222;
}
[data-theme=dark]{
  /*Aqui coloque as variáveis de cor do tema Dark*/
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
 3. Adicione o JavaScript antes da tag  /body:

```html
<script src="togglemodedark.js"></script>     
```
------------

4. Inicialize o ToggleButton no:


```html
<script>toggleForModeDark();</script>
```

ou

```javascript
toggleForModeDark();
```