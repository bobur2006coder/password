let a = document.querySelector("input");
let b = document.querySelector("button");

b.onclick =()=> {
    if(a.value==1234){
        alert("siz parolni to`g`ri kiritdingiz");
        b.style.color="white";
        b.style.marginTop="100px";
        b.style.background="green"
    }else{
        alert("siz xato parol kiritdingiz")
    };
    

}