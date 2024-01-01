//Код для формы
const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('file-input');

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('dragover');
    dropzone.style.borderColor = 'yellow';
});

dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('dragover');
    dropzone.style.borderColor = 'gray';
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('dragover');
    dropzone.style.borderColor = 'white';
    const formats = ["image/jpeg", "image/png", "image/pdf"];
    const file = e.dataTransfer.files[0];
    if (file && formats.indexOf(file.type) != -1) {
        const reader = new FileReader();
        
        reader.onload = () => {
            const thumbnail = document.createElement('img');
            thumbnail.src = reader.result;
            thumbnail.style.maxWidth = '100%';
            thumbnail.style.maxHeight = '100%';

            // Удаляем существующее содержимое внутри блока dropzone
            dropzone.innerHTML = '';

            // Добавляем превью внутрь блока dropzone
            dropzone.appendChild(thumbnail);
        };

        reader.readAsDataURL(file);
    }
    else
    {
        dropzone.innerHTML = '<p>Неверный формат изображения!</p> <p>.png / .jpg / .pdf</p>';
        dropzone.style.borderColor = 'red';
    }
});

dropzone.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    const formats = ["image/jpeg", "image/png", "image/pdf"];
    if (file && formats.indexOf(file.type) != -1) {
        const reader = new FileReader();

        reader.onload = () => {
            const thumbnail = document.createElement('img');
            thumbnail.src = reader.result;
            thumbnail.style.maxWidth = '100%';
            thumbnail.style.maxHeight = '100%';

            dropzone.innerHTML = '';
            dropzone.appendChild(thumbnail);
        };

        reader.readAsDataURL(file);
    }
    else
    {
        dropzone.innerHTML = '<p>Неверный формат изображения!</p> <p>.png / .jpg / .pdf</p>';
        dropzone.style.borderColor = 'red';
    }
});