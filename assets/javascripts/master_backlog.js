// Initialize the backlogs after DOM is loaded
$(function() {
  // Initialize each backlog
  $('.backlog').each(function(index){
    RB.Factory.initialize(RB.Backlog, this);
  });
  // $("#project_info").bind('click', function(){ $("#velocity").dialog({ modal: true, title: "Project Info"}); });
  RB.BacklogsUpdater.start();

  // Workaround for IE7
  if($.browser.msie && $.browser.version <= 7){
    var z = 2000;
    $('.backlog, .header').each(function(){
      $(this).css('z-index', z);
      z--;
    });
  }
});
