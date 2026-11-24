// 上の大きいボタンが画面から消えたら、下に同じボタンを出す
(() => {
  const mainCta = document.querySelector('[data-main-cta]');
  const bar = document.querySelector('.sticky');
  if (!mainCta || !bar) return;
  new IntersectionObserver(([e]) => {
    bar.classList.toggle('show', !e.isIntersecting && e.boundingClientRect.top < 0);
  }).observe(mainCta);
})();
