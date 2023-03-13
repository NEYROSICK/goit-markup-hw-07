(() => {
  const filterBtn = document.querySelectorAll('.filter-button');

  filterBtn.forEach(button => {
    button.addEventListener('click', toggleFilter);

    function toggleFilter() {
      filterBtn.forEach(btn => {
        btn.classList.remove('filter-active');
      });
      button.classList.add('filter-active');
    }
  });
})();
