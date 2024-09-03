///// Superfish drop down menus
$(document).ready(function() {
	$('.sf-menu').superfish({
		autoArrows:  false
	});
});

///// Portfolio Stuff
$(document).ready(function(){

    ///// prettyPhoto
    callprettyPhoto();

    function callprettyPhoto() {
        ///// Work around for PrettyPhoto HTML Validation
        $('a.portfolio-zoom[data-rel]').each(function() {
            $(this).attr('rel', $(this).data('rel'));
        });

        ///// Call prettyPhoto
        $("a[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, show_title: false });
    }

    ///// Quicksand
    var $filterType = $('#filterOptions li.active a').attr('class');
    var $holder = $('ul.holder');
    var $data = $holder.clone();

    $('#filterOptions li a').click(function(e) {
        
        $('#filterOptions li').removeClass('active');
        
        var $filterType = $(this).attr('class');
        $(this).parent().addClass('active');
        
        if ($filterType == 'all') {
            var $filteredData = $data.find('li');
        } 
        else {
            var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
        }
        
        ///// Call quicksand
        $holder.quicksand($filteredData, {
            duration: 800,
            easing: 'easeInOutQuad'
            },
            function() {
                callprettyPhoto();
        });
        return false;
    });
});

///// jQuery UI Elements
$(document).ready(function() {
    $("#accordion").accordion({autoHeight: false,});
    $("#tabs").tabs();
});

///// Flickr Footer
$(document).ready(function(){
    $('#flickr').jflickrfeed({
        limit: 12,
        qstrings: {
            id: '34139186@N04'
        },
        itemTemplate: 
                '<a href="{{image_b}}" data-rel="prettyPhoto"><span class="flickr-zoom"></span><span class="flickr-bg"></span><img src="{{image_s}}" alt="{{title}}" /></a>'
            }, function(data) {
                $('#flickr a[data-rel]').each(function() {$(this).attr('rel', $(this).data('rel'));});
                $("#flickr a[rel^='prettyPhoto']").prettyPhoto({deeplinking: false, social_tools: false, show_title: false });
    });
});
