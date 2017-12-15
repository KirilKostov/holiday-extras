function createFlickrBox(item) {
  var template = $('.flickr-box-template').clone(),
      authorUrl = 'https://www.flickr.com/photos/' + item.author_id,
      authorName = item.author.match(/\("(.*)"\)/)[1],
      rawDescription = document.createElement('div'),
      description,
      tags = item.tags ? item.tags.trim().split(' ').join(', ') : 'N/A';

      rawDescription.innerHTML = item.description;
      description = rawDescription.querySelectorAll('p')[2] ? rawDescription.querySelectorAll('p')[2].innerHTML : 'N/A';

  template.find('img').attr('src', item.media.m);
  template.find('.photo-title').attr('href', item.link).text(item.title);
  template.find('.author').attr('href', authorUrl).text(authorName);
  template.find('.description span').html(description);
  template.find('.tags span').text(tags);
  template.removeClass('flickr-box-template').addClass('flickr-box');

  return template;
}

function appendToContainer(i, item) {
  var flickrContainer = '#images-container',
      flickrBox = createFlickrBox(item);

  flickrBox.appendTo(flickrContainer);
};

function jsonFlickrFeed(json) {
  $.each(json.items, appendToContainer);
};

$.ajax({
  url: 'https://api.flickr.com/services/feeds/photos_public.gne',
  dataType: 'jsonp',
  data: { 'format': 'json' }
});

