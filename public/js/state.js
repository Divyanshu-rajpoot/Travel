const planroute = document.getElementById('nearest-hotel')
const pla = document.getElementById('naame');
const explore = document.getElementById('more-detail');
planroute.addEventListener('click', () => {
    window.location.href = `${pla.innerText}/plan`;
})


