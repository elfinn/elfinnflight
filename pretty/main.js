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
  function addPhoto(photo) {
    var photoSrc = photo['photo-url-500'];
    var photoEl = $('<a href="//elfinnflight.com/tagged/photos"><img src="' + photoSrc + '"></a>');
    photos.append(photoEl);
  }
  photoPosts.forEach(function(fp) {
    // var postUrl = fp['url-with-slug'];
    if (fp['photos']) {
      fp['photos'].forEach(function(photo) {
        addPhoto(photo);
      });
    } else {
      addPhoto(fp);
    }
  });
  photos.slidesjs({
    width: 500,
    height: 375,
    play: {
      active: false,
      effect: "fade",
      auto: true,
      pauseOnHover: true,
    },
    navigation: {
      active: false
    }});
  
  var texts = $('#texts');
  var ft = textPosts[0];
  var title = ft['regular-title'];
  var body = ft['regular-body'];
  texts.append($(
    '<div class="textcontent">' +
      '<h1>' + title + "</h1>" +
      body +
    '</div>'))
    .append($(
      '<div class="textlinks">' +
        '<a href="//elfinnflight.com/tagged/text">Text posts</a>' +
        '<a href="' + ft['url-with-slug'] + '">This post</a>' +
      '</div>'));
});
