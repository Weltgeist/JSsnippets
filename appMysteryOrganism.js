// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns a random arr element
const returnRandElem = (arr) => {
  let index =Math.floor(Math.random() * arr.length);
  return [index, arr[index]];
};

// Returns a random diff DNA base
const returnRandDiffBase = (string) => {
  let dnaBases = ['A', 'T', 'C', 'G'];
  let index = dnaBases.findIndex(elem => elem === string);
  dnaBases.splice(index,1)
  return dnaBases[Math.floor(Math.random() * 3)];
};

// gets complement band
const complementBand = (string) => {
  const complement = ['A','T','C','G','T','A','G','C'];
  let index = complement.findIndex(elem => string === elem);
  if (index === -1) {
    console.log('Not a elligeable DNA Brand')
    return;
  }
  return complement[index+4];
}
//gets complement strands
//ref https://discoveringthegenome.org/discovering-genome/dna-sequencing/dna-complementary-base-pairing
const complementStrand = dnaStrand => {
  return dnaStrand.map(elem => complementBand(elem));
}

//Create a number of pAequor who will surive
const pAequorCreate = (num,option) => {
  let dnaObjArr = [];
  let n = 1;
  for (let i = 0 ; i < num; i++){
    dnaObjArr[i]=pAequorFactory(i,mockUpStrand());
    while(!dnaObjArr[i].willLikelySurvive()){
      dnaObjArr[i].mutate();
      n++;
    }
    if (option === 0) {
      console.log(n);
    }
    n=0
  }
  if (option === 0) {
    dnaObjArr.forEach(elem => console.log(elem.dna));
  }
  return dnaObjArr;
}

pAequorFactory = (number, arrDNA) => {
  return {
    specimenNum: number,
    dna: arrDNA,
    /**
     * modifie a random base in pAequor dna strand for another random base.
     */
    mutate(){
      let dnaBase = returnRandElem(this.dna);
      let dnaBaseNew = returnRandDiffBase(dnaBase[1]);
      this.dna[dnaBase[0]] = dnaBaseNew;
    },
    /**
     * calculate matching base between 2 dna strands. 
     * @param {object} pAequor object with dna
     */
    compareDNA(pAequor){
      let dnaMatch = this.dna.filter( (elem,index) => pAequor.dna[index] === elem );
      let percent = dnaMatch.length/this.dna.length*100;
      console.log(`Comparing ${this.specimenNum} and ${pAequor.specimenNum}\nMatch is ${dnaMatch} and it's ${percent}% `);
    },
    /**
     * check if DNA strand is at least 60% compose of [C,G] base.
     * @returns {bool} truthy for DNA Match.
     */
    willLikelySurvive(){
      let dnaMatch = this.dna.filter((a) => ['C','G'].some( b => a === b));
      let percent = dnaMatch.length/this.dna.length*100;
      return percent >= 60;
    },
    /**
     * complement pAequor DNA Strand
     */
    complement(){
      this.dna = complementStrand(this.dna);
    }
  }
}
//Test
//let dnaObj = pAequorFactory(8, ['A', 'T', 'C', 'G']);
//console.log(dnaObj.dna);
//dnaObj.mutate();
//console.log(dnaObj.dna);
//let dnaObj2 = pAequorFactory(10, ['A', 'T', 'C', 'G']);
//dnaObj.compareDNA(dnaObj2);
//let dnaObj3 = pAequorFactory(12, ['G', 'T', 'T', 'C']);
//console.log(dnaObj3.willLikelySurvive());
//let dnaObj4 = pAequorFactory(12, ['G', 'T', 'T', 'C']);
//console.log(dnaObj4.dna);
//console.log(complementStrand(dnaObj4.dna))
//dnaObj4.complement();
//console.log(dnaObj4.dna);


dnaObjArr = pAequorCreate(30);