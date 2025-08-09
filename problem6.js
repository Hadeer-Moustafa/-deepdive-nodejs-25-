let non =[];
function vowelsAndConsonants(s) {
    for(let i=0;i<s.length;i++){
        if(s[i]==="a"||s[i]==="e"||s[i]==="i"||s[i]==="o"||s[i]==="u"){
            console.log(s[i]);
        }
        else{
            non.push(s[i]);
        }
        
    }
    for(let i=0;i<non.length;i++){
         console.log(non[i]);
    }
}