var photoPosts;
function photosCallback(photoResponse) {
  photoPosts = photoResponse['posts'];
};

var textPosts;
function textCallback(textResponse) {
  textPosts = textResponse['posts'];
};

jQuery(function($) {
  var photos = $('#photos');
  function addPhoto(photo, url) {
    var photoSrc = photo['photo-url-500'];
    var photoEl = $('<a href="' + url + '"><img src="' + photoSrc + '"></a>');
    photos.append(photoEl);
  }
  photoPosts.forEach(function(fp) {
    var postUrl = fp['url-with-slug'];
    if (fp['photos']) {
      fp['photos'].forEach(function(photo) {
        addPhoto(photo, postUrl);
      });
    } else {
      addPhoto(fp, postUrl);
    }
  });
  photos.slidesjs({width:640, height:480, play:{
    active: false,
    effect: "fade",
    interval: 5000,
    auto: true,
    swap: true,
    pauseOnHover: true,
    restartDelay: 2500
  }});
  
  var texts = $('#texts');
  var ft = textPosts[0];
  var title = ft['regular-title'];
  var body = ft['regular-body'];
  texts.append($('<h1>' + title + "</h1>"))
    .append($(body));
});
