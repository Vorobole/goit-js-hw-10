// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}


document
  .getElementById('promiseForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();


    const delay = parseInt(this.elements.delay.value, 10);
    const state = this.elements.state.value;

    createPromise(delay, state)
      .then(result => {
        iziToast.success({
          title: 'Success',
          message: `✅ Fulfilled promise in ${result}ms`,
        });
      })
      .catch(result => {
        iziToast.error({
          title: 'Error',
          message: `❌ Rejected promise in ${result}ms`,
        });
      });
  });
