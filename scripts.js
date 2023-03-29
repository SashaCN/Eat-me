window.onload = () => {
  goods = document.querySelector('.goods-slider .bg');
  gift = document.querySelector('.gift .bg');
  window.onscroll = () => {
    parallaxBg(goods);
    parallaxBg(gift);
  }
}

function parallaxBg (e) 
{
  height = e.offsetHeight;
  if (window.scrollY > e.offsetTop - height) {
      e.style.backgroundPositionY = `-${window.scrollY/15}px`;
  }
  return false;
}