const RequestHelper = function(url){
  this.url = url
};

RequestHelper.prototype.get = function (onComplete) {
  const xhr = new XMLHttpRequest();
  // opens up the link between the app and the api
  xhr.open('GET', this.url);
  // defines what type of data will be accepted
  xhr.setRequestHeader('Accept', 'application/json');
  // actual request to API
  xhr.send();

// event to listen for the data being loaded
  xhr.addEventListener('load', () => {
    // 200 status means everything is good
    if (xhr.status !== 200) {
      return;
    }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data);
  });
};

module.exports = RequestHelper;
