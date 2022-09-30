//algoritmo para gerar CPF ->
const gerarCpf = () => {
    let newCpf = '610821033';
    //uso no primeiro digito verificador
    let x = 0;
    let j = 0;
    //uso no segundo digito verificador
    let c = 0;
    let b = 1;
/* 
        for(let i = 0; i<9; i++){
        //newCpf += (Math.floor(Math.random() * (10 - 0)));
    }  
 */
  //primeiro digito verificador ->
  for(let i=10; i>=2; i--){
    x += newCpf.charAt(j)*i;
    j++;
  }
  
     if(x % 11 === 1 || x % 11 === 0 ){
    newCpf += 0;
      console.log(`Digito verificador = 0 ${newCpf}`);
  } else {
    newCpf += 11 - (x % 11)
    console.log(`Digito verificador outro. ${newCpf}`);
  }   

//segundo digito verificador
  for(let i = 10; i>=2; i--){
    c += newCpf.charAt(b)*i;
    b++;
  }

  if(c % 11 === 0 || c % 11 === 1){
    newCpf += 0;
    console.log(`Segundo digito verificador = 0 ${newCpf}`);
  }else{
    newCpf += 11 - (c % 11)
    console.log(`Segundo digito verificador outro. ${newCpf}`);
  }

  console.log(newCpf);

} 
gerarCpf()
