        const TOKEN = "6466682623:AAEgFDt_JO4L6BXmRAGDBkzjKUWwP5bXcc4";
        const CHAT_ID = "1094504508";
        const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendPhoto`;
        const URI_API_DOC = `https://api.telegram.org/bot${ TOKEN }/sendDocument`;
        const URI_API_DATA = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
        
        document.getElementById('form-tg').addEventListener('submit', function(e)
        {
            e.preventDefault();

            let message = `\bИмя пользователя: ${this.name.value}\n`;
            message += `\bПочта: ${this.email.value}\n`;

            var error;

            document.getElementById('form-modal').addEventListener('click', function() {
                if(error)
                {
                    document.getElementById('form-modal').style.display = 'none';
                    document.getElementById('modal-loader').style.display = 'block';
                    document.getElementById('modal-text').style.display = 'block';
                }
            });

            const formData = new FormData();
            formData.append('chat_id', CHAT_ID);
            formData.append('photo', this.document.files[0]);
            formData.append('caption', message);

            const optionalformData = new FormData();
            optionalformData.append('chat_id', CHAT_ID);
            optionalformData.append('document', this.document.files[0]);

            var imageWidth = 0;
            const fileInput = document.getElementById('file-input');
            const file = fileInput.files[0];

            function checkResolution() {

            if (file) {
                const image = new Image();
                image.onload = function() {
                    const width = this.width;
                    imageWidth = width;
                };
                image.src = URL.createObjectURL(file);
            }
        }
        checkResolution();
        setTimeout(() => {
            if(imageWidth >= 3840)
            {
                console.log('Sending form...');
                document.getElementById('form-modal').style.display = 'flex';
                document.getElementById('modal-error-icon').style.display = 'none';
                document.getElementById('modal-error-text').style.display = 'none';
                document.getElementById('modal-complete-icon').style.display = 'none';
                document.getElementById('modal-complete-text').style.display = 'none';
                axios.post(URI_API_DATA,
                    {
                        chat_id: CHAT_ID,
                        parse_mode: 'html',
                        text: message
                    })
                axios.post(URI_API_DOC, optionalformData,
                {
                    headers:{
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .catch(err=>{
                    console.error(err);
                    document.getElementById('form-modal').style.display = 'flex';
                    document.getElementById('modal-error-icon').style.display = 'block';
                    document.getElementById('modal-error-text').style.display = 'block';
                    document.getElementById('modal-loader').style.display = 'none';
                    document.getElementById('modal-text').style.display = 'none';
                    document.getElementById('modal-complete-icon').style.display = 'none';
                    document.getElementById('modal-complete-text').style.display = 'none';
                    error=err;
                })
                .finally(()=>{
                    if(error)
                    {
                        return;
                    }
                        document.getElementById('modal-loader').style.display = 'none';
                        document.getElementById('modal-text').style.display = 'none';
                        document.getElementById('modal-error-icon').style.display = 'none';
                        document.getElementById('modal-error-text').style.display = 'none';
                        document.getElementById('modal-complete-icon').style.display = 'block';
                        document.getElementById('modal-complete-text').style.display = 'block';
                        setTimeout(() => {
                            location.reload();
                        }, 1000);
                })
                return;
            }

            console.log('Sending form...');
            document.getElementById('form-modal').style.display = 'flex';
            document.getElementById('modal-error-icon').style.display = 'none';
            document.getElementById('modal-error-text').style.display = 'none';
            document.getElementById('modal-complete-icon').style.display = 'none';
            document.getElementById('modal-complete-text').style.display = 'none';

            axios.post(URI_API, formData,
            {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            })
            .catch(err=>{
                console.error(err);
                document.getElementById('form-modal').style.display = 'flex';
                document.getElementById('modal-error-icon').style.display = 'block';
                document.getElementById('modal-error-text').style.display = 'block';
                document.getElementById('modal-loader').style.display = 'none';
                document.getElementById('modal-text').style.display = 'none';
                document.getElementById('modal-complete-icon').style.display = 'none';
                document.getElementById('modal-complete-text').style.display = 'none';
                error=err;
            })
            .finally(()=>{
                if(error)
                {
                    return;
                }
                    document.getElementById('modal-loader').style.display = 'none';
                    document.getElementById('modal-text').style.display = 'none';
                    document.getElementById('modal-error-icon').style.display = 'none';
                    document.getElementById('modal-error-text').style.display = 'none';
                    document.getElementById('modal-complete-icon').style.display = 'block';
                    document.getElementById('modal-complete-text').style.display = 'block';
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
            })
        }, 50);
        })