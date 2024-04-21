// ul etiketi seçimi
const myList = document.querySelector('ul');

// liste tıklama
myList.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});

// yeni element oluşturma
function newElement() {
  const inputValue = document.getElementById('task').value;
  const button = document.querySelector('#liveToastBtn');
  const content = document.querySelector('.toast');
  // hata mesajı
  if (!inputValue || inputValue.length === 0) {
    if(button) {
      button.addEventListener('click', function(){
        const toast = new bootstrap.Toast(content);
        toast.show();
      })
    }
    // input alanını temizleme
    document.getElementById('task').value = '';
    return;
  }

  // li elementi oluşturma ve listeye ekleme
  const li = document.createElement('li');
  li.textContent = inputValue;
  myList.appendChild(li);

  // span oluşturma, çarpı ekleme ve spani li elementine ekleme
  const span = document.createElement('SPAN');
  span.className = 'close';
  span.textContent = '\u00D7';
  li.appendChild(span);

  // spane tıklanınca li elementini silme
  span.onclick = () => {
    li.style.display = 'none';
  };

  // input alanı temizleme
  document.getElementById('task').value = '';
}