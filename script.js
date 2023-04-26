// --------------- UI
// register used input
const numpad = document.querySelectorAll('.btn');
numpad.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(button.textContent);
  });
});

