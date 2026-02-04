function woodCalculator(chairs, tables, beds) {
  const chairWood = chairs * 3;
  const tableWood = tables * 10;
  const bedWood = beds * 50;

  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

console.log(woodCalculator(2, 1, 1)); 
