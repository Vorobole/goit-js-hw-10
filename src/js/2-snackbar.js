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

document.querySelector('.form').addEventListener('submit', function (event) {
  event.preventDefault();

  const delay = parseInt(this.elements.delay.value, 10);
  const state = document.querySelector('input[name="state"]:checked');

  this.reset();

  if (state) {
    createPromise(delay, state.value)
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
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Please select a state (fulfilled/rejected)',
    });
  }
});
