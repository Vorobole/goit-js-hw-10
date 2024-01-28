const form = document.querySelector('.feedback-form');
const LocalStorageKey = 'feedback-form-state';

const savedData = JSON.parse(localStorage.getItem(LocalStorageKey) || '{}');
form.elements.email.value = savedData.email || '';
form.elements.message.value = savedData.message || '';

form.addEventListener('input', e => {
  const { name, value } = e.target;
  const updatedData = { ...savedData, [name]: value.trim() };
  localStorage.setItem(LocalStorageKey, JSON.stringify(updatedData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem(LocalStorageKey);
    form.reset();
  } else {
    alert('Усі поля мають бути заповнені');
  }
});
