const customSelectWrapper = document.querySelector('.custom-select-wrapper');
const customSelectTrigger = document.querySelector('.custom-select-trigger');
const customOptions = document.querySelectorAll('.custom-option');

customSelectTrigger.addEventListener('click', function() {
    customSelectWrapper.classList.toggle('active');
});

customOptions.forEach(function(option) {
    option.addEventListener('click', function() {
        customOptions.forEach(function(opt) {
            opt.classList.remove('selected');
        });
        option.classList.add('selected');
        customSelectTrigger.textContent = option.textContent;
        document.querySelector('.custom-select select').value = option.getAttribute('data-value');
        customSelectWrapper.classList.remove('active');
    });
});

document.addEventListener('click', function(e) {
    if (!customSelectWrapper.contains(e.target)) {
        customSelectWrapper.classList.remove('active');
    }
});