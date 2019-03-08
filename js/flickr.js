$(document).ready(function () {

    $('button').click(function () {
        $('button').removeClass("selected");
        $(this).addClass("selected");
        let flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        let photographer = $(this).text();
        let flickrOptions = { 
            tags: photographer,
            format: "json"
        };
        function displayPhotos(data) {
            let photoHTML = '<ul>';
            $.each( data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 tablet-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '"></a></li>';
                
            });
            photoHTML += '</ul>';
            $('#photos').html(photoHTML);
        }
        $.getJSON(flickrAPI, flickrOptions, displayPhotos);
    }); 

}); // END READY

