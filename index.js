var rows = document.querySelectorAll('.rows')


//countallrows
rows.forEach( (allrows, key) => {
  var tagcode = allrows.parentElement;
  var allcodetext = allrows.innerText || allrows.outerText;
  var allcodetext = allcodetext.replace(" ", "&nbsp;");


  //insertextareawithcodetext
  tagcode.insertAdjacentHTML('beforeend', `<textarea>${allcodetext}</textarea>`);
  var textarea = tagcode.querySelector('textarea');
  //insertbuttoncopyinrows
  tagcode.insertAdjacentHTML('beforeend', '<div class="copy"><span>Copy Code</span></div>');
  //copy
  var buttoncopy = document.querySelectorAll('code .copy')[key];
  buttoncopy.addEventListener('click', function(e) {
    textarea.select();
    document.execCommand("cut");
  }); 


  //countallrow
  var countrowsHTML = '';
  var allrowsChildrens = allrows.children.length
  var allcountrow = document.querySelectorAll('.countrow')[key];

  allrows.setAttribute('id', key);

  for (var i = 1; i < allrowsChildrens + 1; i++) {
    if(i <=9){
      countrowsHTML += `<div>&nbsp;&nbsp;${i} |</div>`;
    } else if(i >=9 && i<100) {
      countrowsHTML += `<div>&nbsp;${i} |</div>`;
    } else if(i >=100) {
      countrowsHTML += `<div>${i} |</div>`;
    }

    allcountrow.innerHTML=countrowsHTML;
  }

})

//<div class="copy"><span>Copy Code</span></div>
























//STYLES.

/* var space = document.querySelectorAll('code .row[space]');

space.forEach((space)=>{space.style.marginLeft='1rem';}) */