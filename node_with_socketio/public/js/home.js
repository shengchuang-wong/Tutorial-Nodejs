$(document).ready(function() {


    $('#favorite').on('submit', function(e) {
        e.preventDefault();

        let id = $('#id').val();
        let clubName = $('#clubName').val();
    
        $.ajax({
            url: '/home',
            type: 'POST',
            data: {
                id: id,
                clubName: clubName
            },
            success: function() {
                console.log(clubName);
            }
        });
    });

});