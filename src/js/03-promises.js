import { Notify } from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submit: document.querySelector('button'),
};

refs.submit.addEventListener('click', onGeneratePromise);

function onGeneratePromise(e) {
  e.preventDefault();

  const delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, i * step + delay);
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`✅ Fulfilled promise ${position} in ${delay}ms`);
      //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    });
}
