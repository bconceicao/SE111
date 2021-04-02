"use strict";

//if there is an error in th syntax here, please let me know. i cannot find it/why the title/user are undefined

const domain = "https://jsonplaceholder.typicode.com";

const getPhoto = (id) => {
    if (id < 1 || id > 5000) {

        return Promise.reject
            (new Error("Photo Id must be between 1 and 5000"));
    }else{
        return fetch(`${domain}/photos/${id}`)
            .then( response => response.json());
    }
};

const getPhotoAlbum = photo => {
    return fetch(`${domain}/albums/${photo.albumID}`)
        .then( response => response.json() )
        .then( album => {
            photo.album = album;
            return photo;
        });
};

const getPhotoAlbumUser = photo => {
    return fetch(`${domain}/users/${photo.album.userID}`)
        .then( response => response.json() )
        .then( user => {
            photo.album.user = user;
            return photo;
        });
};

const displayPhotoData = photo => {

    let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
    html    += `<h4>Title: ${photo.title}</h4>`;
    html    += `<p>Album: ${photo.album.title}</p>`;
    html    += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);
};

const displayError = e => {
    let html = `<span>${e}</span>`;
    $("#photo").html(html);
};


$(document).ready ( () => {

    $("#view_button").click( () => {
        const photo_id = $("#photo_id").val();
        getPhoto(photo_id)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError);
    });
});