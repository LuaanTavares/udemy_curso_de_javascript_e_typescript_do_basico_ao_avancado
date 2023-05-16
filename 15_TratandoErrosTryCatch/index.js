const soma = (x,y) =>{
  if (typeof x !== 'number' || typeof y !== 'number'){
   throw new Error('x e y precisam ser números.')
  }
  return x + y;
 }
 
 try{
   console.log(soma('10',20))
 }catch(error){
   console.log(error)
 }