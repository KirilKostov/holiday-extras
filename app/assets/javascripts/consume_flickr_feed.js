function createFlickrBox(item) {
  var TAG_COUNT = 5,
      DESCRIPTION_CUTOFF = 200,
      template = $('.flickr-box-template').clone(),
      authorUrl = 'https://www.flickr.com/photos/' + item.author_id,
      authorName = item.author.match(/\("(.*)"\)/)[1],
      rawDescription = document.createElement('div'),
      description,
      tags = item.tags ? item.tags.trim().split(' ').splice(0, TAG_COUNT) : [];

      rawDescription.innerHTML = item.description;
      description = rawDescription.querySelectorAll('p')[2] ? rawDescription.querySelectorAll('p')[2].innerHTML : 'N/A';
      if (description.length > DESCRIPTION_CUTOFF) {
        description = description.substring(0, DESCRIPTION_CUTOFF) + '...';
      }

  template.find('img').attr('src', item.media.m);
  template.find('.photo-title').attr('href', item.link).text(item.title);
  template.find('.author').attr('href', authorUrl).text(authorName);
  template.find('.description p').html(description);
  template.removeClass('flickr-box-template').addClass('flickr-box');
  if (!tags.length) {
    template.find('.tags p').append($('<span>',{ text: 'N/A' }));
  } else {
    $.each(tags, (function(i, tag){
      template.find('.tags p').append($('<span>', { text: tag}).addClass('tag'));
    }));
  }

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
