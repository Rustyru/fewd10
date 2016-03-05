$('Document').ready(function () {
    $('input[type="submit"]').click(function (event) {
        event.preventDefault();
        var newItem = $('#addItem').val();
        $('#addItem').val('');
        if (newItem != '') {
            $('ul').prepend('<li>' + newItem + '</li>');
        };
    });
    /* dynamically assign the function to the ul children at runtime
    */
    $('ul').on("click", "li", function () {
        $(this).toggleClass('done');
    });
});
