let clicks = JSON.parse(localStorage.getItem('clicks'));
if (clicks) {
  document.querySelector('#profe').textContent = clicks[0].count ? clicks[0].count : 0;
  document.querySelector('#alumno').textContent = clicks[1].count ? clicks[1].count : 0;
}

function handleClick(event) {
  let btn = event.target;
  let n   = +btn.textContent;
  n++;
  btn.textContent = n;
  let clicks = JSON.parse(localStorage.getItem('count'));
  if (!clicks) clicks = [];
  if (btn.dataset.user == 'profe') 
    clicks[0] = { user: btn.dataset.user, count: n };
  else
    clicks[1] = { user: btn.dataset.user, count: n };

  localStorage.setItem('clicks', JSON.stringify(clicks));
}