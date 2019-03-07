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

        }
        $getJSON(flickrAPI, flickrOptions, displayPhotos);
    }); 

}); // END READY

