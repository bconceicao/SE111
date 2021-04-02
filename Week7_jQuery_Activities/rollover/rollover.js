"use strict";
$(document).ready(() =>{

    $("#image_rollovers img").each( (index, img) => {

        const oldURL = img.src;
        const newURL = img.id;

        const rolloverImage = new Image();
        rolloverImage.src = newURL;

        $(img).hover(

            () => img.src = newURL,
            () => img.src = oldURL
        );

    });
});
