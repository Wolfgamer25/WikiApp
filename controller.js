app.controller('wikiCtrl', function($scope, $http){
  var vm =$scope;
  vm.searchTermArr=[];
  vm.headerInfo={
    project: "AngularJs Wikipedia API",
    site:'Free Code Camp - Intermediate Front End Projects',
    profile: 'Jonathan Torres Linkedin',
    profileUrl: 'https://www.linkedin.com/in/jonathantorres250?trk=nav_responsive_tab_profile_pic'
  };
  vm.randomLink = "https://en.wikipedia.org/wiki/special:Random";

  vm.searchWiki = function(){$http({
    url:'http://en.wikipedia.org/w/api.php?action=opensearch&search='+ vm.searchTerm + '&format=json&callback=JSON_CALLBACK',
    method:"jsonp"
  }).success(function(response){
    //title
  vm.searchTermArr.push(response[1]);
    //description
    vm.searchTermArr.push(response[2]);
    //Article Link
    vm.searchTermArr.push(response[3]);
  });}
});
