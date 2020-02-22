$ = jQuery.noConflict();

$(document).ready(function() {
    $('.upload-btn').on('click', function() {
        $('#upload-input').click();
    }); 

    $('#upload-input').on('change', function() {
        let uploadInput = $('#upload-input');

        if(uploadInput.val() != '') {
            let formData = new FormData();

            formData.append('upload', uploadInput[0].files[0]);

            $.ajax({
                url: '/uploadFile',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function() {
                    uploadInput.val('');
                    alert('upload success')
                }
            });
        }

    });
});