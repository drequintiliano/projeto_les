$(function() {
    $('#fotoPerfil').change(function() {
        console.log($(this));
        const file = $(this)[0].files[0]
        const fileReader = new FileReader()

        console.log(file);

        fileReader.onloadend = function() {
            $('#img').attr('src', fileReader.result)
            console.log(fileReader.result);
        }
        fileReader.readAsDataURL(file)
    })
})