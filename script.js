var textarea=document.getElementById('textarea')

var uCase=document.getElementById('uCase')
var preview=document.getElementById('preview')

uCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    console.log(textarea.value)
    let updatevalue=textarea.value.toUpperCase()
   console.log(updatevalue)
    textarea.value=updatevalue
    preview.innerHTML=updatevalue

})

var lCase=document.getElementById('lCase')

lCase.addEventListener('click',()=>{
    textarea.innerHTML=""
    console.log(textarea.value)
    let updatevalue=textarea.value.toLowerCase()
   console.log(updatevalue)
    textarea.value=updatevalue
    preview.innerHTML=updatevalue

})

var counter=document.getElementById('counter')
var toRead=document.getElementById('toRead')
textarea.addEventListener('input',(e)=>{
    console.log(e.target.value.length)
    let wordscharCount=e.target.value
    counter.innerHTML=`
    <b>${wordscharCount.split(" ").length}</b> words and <b>${wordscharCount.replace(/ /g,"").length}</b> characters
    `
    // in 1 min 125 words can be read
    toRead.innerHTML=`
    <b>${((1/125)*wordscharCount.split(" ").length).toFixed(2)}</b> Minutes to Read
    `

    preview.innerHTML=e.target.value

})
var clearText=document.getElementById('clearText')
clearText.addEventListener('click',()=>{
    textarea.value=""
    preview.innerHTML=""
    toRead.innerHTML=""
    counter.innerHTML=""
})
