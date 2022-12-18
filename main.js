/******************************************************Loop Assigment*************************************************************************** */
/**Assigment One**/
let start1 = 10;
let end1 = 100;
let exclude = 40;
for(let i=start1 ; i<=end1 ; i+=start1){
  if(i==exclude){
  continue;
  }
  console.log(i)
}
/******************************************************************************************************************** */
/**Assigment two* */
let start2 = 10;
let end2 = 0;
let stop2 = 3;
for(let j=start2 ;j >=stop2 ;j--){
  if(j<start2){
    console.log(`0${j}`);
  }else{
  console.log(`${j}`)
  }
}
/******************************************************************************************************************* */
/**Assigment Three* */
let start3 = 1;
let end3 = 6;
let breaker = 2;
for(let i=start3 ; i<=end3 ;i++){
  console.log(i);
  for(let j=breaker;j<end3;j+=breaker){
    console.log(`--${j}`);
  }
}
/*********************************************************************************************************** */
/**Assigment Four* */
let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if(index === jump)break;
}
/****************************************************************************************************************** */
/**Assigment five* */
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for(let i=0 ;i<friends.length;i++){
  if(friends[i].startsWith(letter.toLocaleUpperCase())){
    continue;
  }else{ console.log(`--${friends[i]}`);}
}
/************************************************************************************************************* */
/**Assigment six* */
let start = 0;
let swappedName = "elZerO";
let temp=[];
for(let i=start; i<=swappedName.length; i++){
  if( swappedName[i] === swappedName[i].toUpperCase()){
      temp.push(swappedName[i].toLowerCase());

  }else{
    temp.push(swappedName[i].toUpperCase());

  }

console.log(temp.join(""));
/************************************************************************************************************************ */
/**Assigment 7* */
let starts = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for(i=starts ; i <mix.length;i++)
{
  if(i == starts || typeof mix[i] === "string")
  {
    continue;
  }else
  {
    console.log(mix[i])
  }
}
