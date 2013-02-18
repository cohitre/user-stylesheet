(function () {

function Container() {
  this.element = document.getElementById("container");
}

Container.prototype = {
  addGroup: function (title) {
    return new Group(title);
  }
}

function Group(title) {
  this.title = title;
  this.bookmarks = [];
}


chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
  console.log(bookmarkTreeNodes)
});

})();
