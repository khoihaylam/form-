let ten=document.getElementById("ten")
let tuoi=document.getElementById("sotuoi")
let chon=document.getElementById("chon")
let nam=document.getElementById("nam")
let nu=document.getElementById("nu")
let h1=document.getElementById("h1")
let button=document.querySelector("button")
function thongtin(){
    if(nam.checked){
    h1.innerHTML=`ho va ten:${ten.value}<br>
    so tuoi:${Number(tuoi.value)}<br>
    thanh pho:${chon.value}<br>
    gioi tinh:${nam.value}
    `
    }
    else{
        h1.innerHTML=`ho va ten:${ten.value}<br>
        so tuoi:${Number(tuoi.value)}<br>
        thanh pho:${chon.value}<br>
        gioi tinh:${nu.value}
        `
    }
}
button.addEventListener("click",()=>{
    thongtin()
})