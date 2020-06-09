let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers(){
    return this.appetizers;
  },
  get mains(){
    return this.mains;
  },
  get desserts(){
    return this.deserts;
  },
  set appetizers(appetizerChoices){
    this.appetizers = appetizerChoices;
  },
  set mains(mainChoices){
    this.appetizers = mainChoices;
  },
  set desserts(dessertChoices){
    this.appetizers = dessertChoices;
  },
  get courses(){

  }
};