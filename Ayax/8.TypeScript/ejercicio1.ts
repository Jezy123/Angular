var numlist:number[] = [2,4,6,8,100]
var suma:number=0
var mayoresCien:number=0
for (let i = 0; i < 5; i++) {
   if(numlist[i]>100){
    mayoresCien++;
   }
   suma=suma+numlist[i] 
}
window.alert(suma);
window.alert(mayoresCien);