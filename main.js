var photoPosts;
function photosCallback(photoResponse) {
  photoPosts = photoResponse['posts'];
  console.log(photoPosts);
};

var textPosts;
function textCallback(textResponse) {
  textPosts = textResponse['posts'];
  console.log(textPosts);
};

jQuery(function($) {
  var photos = $('#photos');
  var fp = photoPosts[0];
  var photoSrc = fp['photo-url-500'];
  var photoUrl = fp['url-with-slug'];
  var photoEl = $('<a href="' + photoUrl + '"><img src="' + photoSrc + '"></a>');
  photos.append(photoEl);
});