/*Buttons*/
let uppercaseReference = document.querySelector('#uppercase');
let lowercaseReference = document.querySelector('#lowercase');
let firstUpperReference = document.querySelector('#firstUpper');
let firstUppersReference = document.querySelector('#firstUppers');

/*textAre Value*/
let textareaReference = document.querySelector('#textarea');
let textareaValue = "";
function captureTextareaValue(){
  textareaValue = textareaReference.value.toLowerCase();
};


uppercaseReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValueUpperCase = textareaValue.toUpperCase();
  textareaReference.value = textareaValueUpperCase;
});

lowercaseReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValuelowercase = textareaValue.toLowerCase();
  textareaReference.value = textareaValuelowercase;
});



firstUpperReference.addEventListener("click", ()=>{
  captureTextareaValue();
  let textareaValuefirstUpper = textareaValue[0].toUpperCase();
  textareaReference.value = textareaValuefirstUpper + textareaValue.substring(1);
});


firstUppersReference.addEventListener("click", ()=>{ 
  function firstUppers(){
    const subst = textareaReference.value.toLowerCase().replace(/(?:^|\s)\S/g, (a)=> { //regex
      return a.toUpperCase();
    });
    return subst;
  };
  textareaReference.value = firstUppers();
});