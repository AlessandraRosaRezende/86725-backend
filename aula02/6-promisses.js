const divisao = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    // pending
    setTimeout(() => {
      if (divisor === 0) {
        reject("Não é possível dividir por zero");
      } else {
        resolve(dividendo / divisor);
      }
    }, 2000);
  });
};

console.log(divisao(4, 2));

divisao(400, 2)
  .then((result) => {
    console.log(result); // 200
    divisao(result, 0)
      .then((result) => {
        console.log(result); // 100
        divisao(result, 0)
          .then((result) => {
            console.log(result); // 100
          })
          .catch((error) => {
            console.log(".catth do dividir: ", error);
          });
      })
      .catch((error) => {
        console.log(".catth do dividir: ", error);
      });
  })
  .catch((error) => {
    console.log(".catth do dividir: ", error);
  });

