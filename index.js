ons.ready(function() {
    initTimeline();
    var tabar = document.querySelector('ons-tabbar');
    tabar.addEventListener('postchange', function(event) {

        if(event.index == 0){
            initTimeline(event);
        }

    });
});

function initTimeline(event){

    var url = "http://psupin.azurewebsites.net/pins";
    $.get(url, function(data){        
        $("#timetab").attr("badge", data.length);       
        $.each(data, function(index, item){        
            $.get('card.html', function(template) {
                var rendered = Mustache.render(template, item);
                $("#pins").append(rendered); 
              });
        });
    });


}
