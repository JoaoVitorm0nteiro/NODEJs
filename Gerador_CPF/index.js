//algoritmo para gerar CPF ->
const gerarCpf = () => {
    let newCpf = '';
    let x = 0;
    let j = 0;
      for(let i = 0; i<9; i++){
        newCpf += (Math.floor(Math.random() * (10 - 0)));
    }
  //primeiro digito verificador ->
  for(let i=10; i>=2; i--){
    x += newCpf.charAt(j)*i
    j++
  }
  
     if(x % 11 === 0 || 1){
    newCpf += 0;
  } else {
    newCpf += 11 - (x % 11)
  }   


  console.log(x);    
} 

//segundo digito verificador


gerarCpf()
