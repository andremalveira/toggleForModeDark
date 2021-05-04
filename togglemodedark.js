

function toggleForModeDark(configs) {
  configs = configs || {};
  var id           = configs['id'] || '#toggleButton';
  var toggleSize   = configs['toggleSize'] || 34;
  var dotColor     = configs['dotColor'] || '#fff';
  var activatedBackground = configs['activatedBackground'] || '#192351';
  var disabledBackground = configs['disabledBackground'] || '#f6ca69';

  let toggleDark = document.querySelector(id);
    toggleDark
      .innerHTML=`<label><input><div><div></div></div></label>`;
    var toggleDarkStyles = {
      "display": "flex",
      "align-items": "center",
    }
    Object.assign(toggleDark.style, toggleDarkStyles);

  let label       = toggleDark.firstElementChild;
  let input       = label.firstElementChild;
  let sliderRound = label.lastElementChild;
  let dot         = sliderRound.firstElementChild;


  label.setAttribute('for', 'toggleCheck');
    var labelStyles = {
      "width": toggleSize*2+'px',
      "height": toggleSize+'px',
      "display": "inline-block",
      "position": "relative",
    }
    Object.assign(label.style, labelStyles);

  input.style.display='none';
  input.setAttribute('type', 'checkbox');
  input.setAttribute('id', 'toggleCheck');

  sliderRound.style.backgroundColor=disabledBackground;
    var sliderRoundStyles = {
      "border-radius": "50px",
      "bottom": "0",
      "cursor": "pointer",
      "left": "0",
      "position": "absolute",
      "right": "0",
      "top": "0",
      "transition": "0.4s",
    };
    Object.assign(sliderRound.style, sliderRoundStyles);

  dot.style.backgroundColor=dotColor;
    var dotStyles = {
      "color": "",
      "border-radius": "50%",
      "bottom": "4px",
      "content": "''",
      "height": toggleSize-8+'px',
      "left": "4px",
      "position": "absolute",
      "transition": "0.4s",
      "width": toggleSize-8+'px',
    };
    Object.assign(dot.style, dotStyles);


    const toggleSwitch = document.querySelector(`${id} input[type="checkbox"]`);
    const currentTheme = localStorage.getItem('theme');
    var toggleChek = false;

    const toggleActive = () => {
      sliderRound.style.backgroundColor=activatedBackground;
      dot.style.transform=`translateX(${toggleSize}px)`;
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
    const toggleDisable = () => {
      sliderRound.style.backgroundColor=disabledBackground;
      dot.style.transform='';
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
          toggleActive();
          toggleSwitch.checked = true;
          toggleChek = true;
      }
    }

    input.addEventListener('click', () => {
      if(toggleChek == false){
        toggleActive();
        toggleChek = true;
      } else {
        toggleDisable();
        toggleChek = false;
      }

    })

}
