const chatWidget = document.querySelector('.chat-widget');
const packageButtons = document.querySelectorAll('.package button');
const packageSelect = document.querySelector('.order-form select');

const packageMap = {
  'Starter Pack': 'Starter Pack — Rp59.000',
  'Warrior Pack': 'Warrior Pack — Rp249.000',
  'Commander Pack': 'Commander Pack — Rp529.000',
};

chatWidget.addEventListener('click', () => {
  chatWidget.querySelector('span').textContent = 'CS Online';
  chatWidget.classList.add('is-open');
  alert('Live chat siap dihubungkan ke WhatsApp, Crisp, Tawk.to, atau Intercom.');
});

packageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const packageName = button.closest('.package').querySelector('h3').textContent;
    packageSelect.value = packageMap[packageName];
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
  });
});
