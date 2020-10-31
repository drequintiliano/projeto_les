$(function() {
    $('fotoPerfil').change(function() {
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()

        console.log(file);

        fileReader.onloadend = function() {
            $('#img').attr('src', fileReader.result)
        }
        fileReader.readAsDataURL(file)
    })
})