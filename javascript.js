let a = document.querySelector("input");
let b = document.querySelector("button");

b.onclick =()=> {
    if(a.value==1234){
        alert("siz parolni to`g`ri kiritdingiz");
        b.style.color="green";
        b.style.marginTop="100px";
    }else{
        alert("siz xato parol kiritdingiz")
    };
    

}