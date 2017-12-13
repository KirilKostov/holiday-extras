function jsonFlickrFeed(json) {
  $.each(json.items, function(i, item) {
    $('<img />').attr('src', item.media.m).appendTo('#image-section');
    $('<a>', { className: 'photo-title', href: item.link, text: item.title } ).appendTo("#image-section");
    $('<span>' , { text: 'by'}).appendTo('#image-section');
    $('<a>', { className: 'author-name', href: 'https://www.flickr.com/photos/' + item.author_id, text: item.author } ).appendTo("#image-section");
    $('<p>', { className: 'description', text: item.description.trim() } ).appendTo("#image-section");
    $('<p>', { className: 'tags', text: 'Tags: ' + item.tags.trim().split(' ').join(', ') } ).appendTo("#image-section");
  });
};

$.ajax({
  url: 'https://api.flickr.com/services/feeds/photos_public.gne',
  dataType: 'jsonp',
  data: { 'format': 'json' }
});

