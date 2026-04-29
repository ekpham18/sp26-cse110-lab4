for (const car in statistics){
  if (car[0] == 'r'){
    console.log(statistics[car]);
  } else if (statistics[car] % 2 == 1){
    console.log(statistics[car]);
  }
}