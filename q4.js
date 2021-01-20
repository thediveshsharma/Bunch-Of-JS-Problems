let star =(num) =>{
  //outer 
  for(let i=1; i <= num; i++)
   {
   //inner loop
   let str = ""
    for(let j=1; j<=i; j++)
   {
     str = str + "*"
    }
    
    console.log(str)
    str = ""
   }

}
star(5);
