let content = document.querySelectorAll('.input>label');
content.forEach((item)=>{
    item.innerHTML = item.innerHTML
    .split('')
    .map((elem,index) =>{
        return(
            `<span style="transition-delay:${(index+1)*80}ms">${elem}</span>`
        );
        console.log('${elem}');
    })
    .join('')
}
)