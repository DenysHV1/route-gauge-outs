export const cookiePolicy = () => {
  const btnEl1 = document.querySelector('.cookies-accept-js');
  const btnEl2 = document.querySelector('.cookies-decline-js');
  const modalEl = document.querySelector('#cookies-section-js');

  if (JSON.parse(localStorage.getItem('RouteGaude-status'))) {
    if (modalEl) {
      modalEl.style.display = 'none';
    }
    return;
  }

  btnEl1.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('RouteGaude-status', JSON.stringify(true));
  });

  btnEl2.addEventListener('click', () => {
    modalEl.style.display = 'none';
    localStorage.setItem('RouteGaude-status', JSON.stringify(false));
  });
};
