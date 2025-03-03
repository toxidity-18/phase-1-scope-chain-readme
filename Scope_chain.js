// const globalvar = 1
// function firstfunc (){
//   const firstvar = 2
//   return firstvar + globalvar
// }
// firstfunc()// once invoked it proves the logic of global function variable and functions being available to the inner function thus proves scope chain .

const gv = 10
function frt(){
  const frtv = 20
  function snd(){
    const sndv = 30
      return frtv + sndv + gv
  }
  const resultFromSecondFunc = snd()
    return resultFromSecondFunc
  }

frt()// 60  due to the power of scopechain 

const globalVar = 1;

function firstFunc() {
  const firstVar = 2;

  function secondFunc() {
    const secondVar = 3;

    return secondVar + firstVar + globalVar;
  }

  const resultFromSecondFunc = secondFunc();

  return resultFromSecondFunc;
}

firstFunc();
// => 6

// tesing direction of scope chain
const fruit = 'Apple'
function one(){
  const vegy = cabbage;
  console.log ('fruit:',fruit);
  console.log('vegy:',vegy);
  console.log('legume:',legume)
  function two(){
    const legume = 'Beet root';
  console.log ('fruit:',fruit);
  console.log('vegy:',vegy);
  console.log('legume:',legume)
  }
}
one()
two()