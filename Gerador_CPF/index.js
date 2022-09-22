//algoritmo para gerar CPF ->
const gerarCpf = () =>{
    let newCpf = '';
    let x = 0;
    let j = 0;
      for(let i = 0; i<9; i++){
        newCpf += (Math.floor(Math.random() * (10 - 0)))
    }
  
    console.log(newCpf); 
  
  //primeiro digito verificador ->
  for(let i=10; i>=2; i--){
    x += newCpf.charAt(j)*i
    j++
  }
  //console.log(x);    
} 

gerarCpf()
