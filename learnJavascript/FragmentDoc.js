const fragment = document.createDocumentFragment();

for(let i=0; i<20; i++){
    const para = document.createElement('p');
    para.innerHTML = `this is para ${i}`;
    fragment.appendChild(para);
}
const div = document.createElement('div')
document.body.appendChild(div);
div.appendChild(fragment);


div.addEventListener('click',(event)=>{
    console.log(event.target.innerHTML);
})