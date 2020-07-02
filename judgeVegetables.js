const judgeVegetable = (vegetables, metric) => {
  let max = 0;
  let item = "";
  vegetables.forEach(
    element => {
      if (element[metric] > max) {
        max = element[metric];
        item = element["submitter"];
      }
    }
  )

  return item;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
