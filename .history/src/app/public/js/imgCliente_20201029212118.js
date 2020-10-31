$(function() {
    $('#fotoPerfil').change(function() {
        console.log($(this));
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()

        fileReader.onloadend = function() {
            $('#img').attr('src', fileReader.result)
        }
        fileReader.readAsDataURL(file)
    })
})