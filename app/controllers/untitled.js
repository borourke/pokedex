var require = require || function(what,callback) {
  var myScript = Asset.javascript('//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js', {
    onLoad: function(){
      jQuery.noConflict();
      callback(null,null,jQuery);
    }
  });
}

require(['jquery-noconflict'], function(jQuery) {
  //Ensure MooTools is where it must be
  Window.implement('$', function(el, nc){
    return document.id(el, nc, this.document);
  });
  var $ = window.jQuery;
  var totalHighlights = 0;
  // Preprocess

  // Array with available relation slots
  // Because all fields are hardcoded, they must be re-used.
  $('.eventextraction').each(function() {
    $(this)[0].events = [];
    $(this)[0].typeId = 0; // // next unused slot
    for(i=0;i<30;i++) {
      $(this)[0].events.push(0);
    }
  });

  var questionText;
  var color = ['#8dd3c7','#ffffb3','#bebada','#fb8072','#80b1d3','#fdb462','#b3de69','#fccde5','#d9d9d9','#bc80bd'
,'#ccebc5','#ffed6f','#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f','#ff7f00'
,'#cab2d6','#6a3d9a','#ffff99','#b15928','#fbb4ae','#b3cde3','#ccebc5','#decbe4','#fed9a6','#ffffcc'];

  // remove margin between relations list
  $('div.event').css('margin','0px');
  // Add remove buttons to relations
  $('select.event').after(function() {
    return '<span id=\'' + $(this).attr('name').split('[')[1].split(']')[0] + '\' class=\'remove\'>[x]</span>';
  });

  // Initalize non-gold page
  if (!$("#gold_form").length) {
    $('.super_secret_box').addClass('hidden_foo');
  }

  if ($("#gold_form").length) {
    $('.golden_field').removeClass('hidden').find('.cml_gold_loaded').removeClass('hidden');
  }

  // remove relation function
  $('.remove').click(function() {
    var gold = $("#gold_form").length ? "_gold" : "";

    $(this).siblings('.term').remove();
    eventextraction =  $(this).parents('.eventextraction');

    var id = $(this).attr('id');
    $(eventextraction).find('.' + id + 'a' + gold).val("");
    if ($("#gold_form").length) {
      $(this).siblings('.' + id).addClass('hidden').parent().parent().parent().addClass('hidden');
    } else {
      $(this).siblings('.' + id).addClass('hidden').parent().parent().addClass('hidden');
    }
    $(this).siblings('.' + id).prop('selectedIndex',0); // reset selection
    $(eventextraction).find('.' + id + 'term').replaceWith(function() {
      return $(this).contents();
    });

    // remove any partial selections to maintain color usage
    $(eventextraction).find('#selection').replaceWith(function() {
      return $(this).contents();
    });
    $(eventextraction)[0].events[id.substr(5)] = 0;
    $(eventextraction)[0].typeId = $.inArray(0,$(eventextraction)[0].events); // get next unused relation slot
    totalHighlights --;
  });

  // split passages
  $(".eventextraction .passage").each(function() {
    questionText = $(this).text();
    $(this).val($(this).text());
    var words = $(this).text().split("");
    // var test = 'Hello\n  Chris ';
    // $(this).val(test);
    // var words = test.split(' ');
    var passage = "";
    $.each(words, function(i, v) {
      if(v == " ")
        passage += "<span class='words'>" + v + "</span>";
      else
        passage += "<span class='word'>" + v + "</span>";
    });
    $(this).html(passage);
  });

  // Highlighting functions
  // highlight term
  function highlightTerm(passage, start) {
    var id = $(passage).parents('.eventextraction')[0].typeId;
    if(!$(start).parents('#selection').length && id != -1) { // if no selection is made and maximum matches is not reached
      $(passage).children('#selection').contents().unwrap();
      start.wrapAll("<span class='term event" + id + "term' id='selection' />");

      $(passage).find('span:not(#selection)').bind('mouseover', function(e) {
        highlightMultiple(start, $(e.target), passage, id);
      });

    } else { // remove when click on selection
      $(passage).children('#selection').replaceWith(function() {
        return $(this).contents();
      });
    }
  }

  // Highlighting functions
  // highlight term
  function highlightTerm(passage, start, end) {
    $(passage).children('#selection').replaceWith(function() {
      return $(this).contents();
    });
  }

  // highlight range of terms
  function highlightMultiple(start, end, passage, id) {
    // ignore margins between elements
    $(passage).find('#selection').contents().unwrap();
    if(start.is(end)) { // single element
      $(start).wrapAll("<span class='term event" + id + "term' id='selection'/>");
    } else { // if range of elements
      if($(passage).find('span').index(start) > $(passage).find('span').index(end)) { // swap if end is before start
        var temp = end;
        end = start;
        start = temp;
      }

      if(!start.parent().not($('#selection')).is(end.parent().not($('#selection')))) {
        // common parent element
        var common = end.parents().not($('#selection')).has(start).first();
        if(start.parent('.term').not(common).length) { // if word has a parent term
          start = $(common).children().has(start);
          // $(start).parent('.term');
        }
        if(end.parent('.term').not(common).length) {
          end = $(common).children().has(end);
          //end = $(end).parent('.term');
        }
      }
      // highlight range
      $(start).nextUntil(end.next()).andSelf().wrapAll("<span class='term event" + id + "term' id='selection' />");
    }
  }

  function getText(passage) {
    var splitMessage = passage.val().split('');
    var selection = $(passage).find('#selection .word, #selection .words');
    var m = '';
    for(i=0; i< selection.length; i++) {
      var currentWord = selection.eq(i).text();
        m += currentWord;
    }
    return m;
  }
  // get word range index
  function selectionIndex(passage) {
    var splitMessage = passage.val().split('');
    var selection = $(passage).find('#selection .word, #selection .words');
    var startId = $(passage).find('.word,.words').index(selection.first());

    if(selection.length == 1) { // single word
      return startId;
    } else { // range of words
      return startId + "-" + (startId + selection.length - 1);
    }
  }
  function getIndexStart(passage) {
    var splitMessage = passage.val().split('');
    var selection = $(passage).find('#selection .word,#selection .words');
    var startId = $(passage).find('.word,.words').index(selection.first());
    var charsum = 0;
    for(i=0;i<startId;i++) {
      var word = splitMessage[i];
      charsum += word.length;
    }
    return charsum;
  }

  function getIndexEnd(passage) {
    var splitMessage = passage.val().split('');
    var selection = $(passage).find('#selection .word,#selection .words');
    var startId = $(passage).find('.word,.words').index(selection.first());
    var charsum = 0;
    for(i=0;i<startId;i++) {
      var word = splitMessage[i];
      charsum += word.length;
    }

    var firstIndex = charsum;
    var lastIndex = charsum;
    for (i=firstIndex; i< firstIndex + selection.length -1;  i++ ) {
      var nw = splitMessage[i];
      lastIndex += nw.length;
    }
    return lastIndex;
  }

  // finish selection and link terms
  function endSelection(eventextraction) {
    var typeId = $(eventextraction)[0].typeId;

    var gold = $("#gold_form").length ? "_gold" : ""

    // add terms in relation selection
    $(eventextraction).find('.entity' + typeId + gold).val(getText($(eventextraction).find('#passage')));
    $(eventextraction).find('.entity' + typeId + 's' + gold).val(getIndexStart($(eventextraction).find('#passage')));
    $(eventextraction).find('.entity' + typeId + 'e' + gold).val(getIndexEnd($(eventextraction).find('#passage')));
    $(eventextraction).find('.ev' + typeId + 'a' + gold).val(selectionIndex($(eventextraction).find('#passage')));

    console.log( 'entity: ' + $(eventextraction).find('.entity' + typeId + gold).first().val());
    console.log( 'index start: ' + $(eventextraction).find('.entity' + typeId + 's' + gold).first().val());
    console.log( 'index end: ' + $(eventextraction).find('.entity' + typeId + 'e' + gold).first().val());

    $(eventextraction).find('.event' + typeId + gold).before('<span class=\'term event' + typeId + 'term\'>' + $(eventextraction).find('#passage #selection .word,#passage #selection .words').not(":last").end().text() + '</span>');
    if ($("#gold_form").length) {
      $(eventextraction).find('.event' + typeId + gold).removeClass('hidden').parent().parent().parent().removeClass('hidden');
    } else {
      $(eventextraction).find('.event' + typeId + gold).removeClass('hidden').parent().parent().removeClass('hidden');
    };

    // remove selection ids
    $(eventextraction).find('#selection').removeAttr('id');

    // set relation slot as occupied; find next slot;
    $(eventextraction)[0].events[typeId] = 1;
    $(eventextraction)[0].typeId = $.inArray(0,$(eventextraction)[0].events);  // next unused slot

    totalHighlights ++;
  }

  function buildArray(eventextraction) {
    var gold = $("#gold_form").length ? "_gold" : ""
    answers = {}
    $.each($(eventextraction).find('.entity'), function(index, value) {
      letters = $(eventextraction).find($(".ev" + index + 'a' + gold)).val();
      category = $(eventextraction).find($(".event" + index + gold + " option:selected")).first().text();
      if (letters != '' && category != '') {
        answers[letters] = category
      }
    });
    keys_sorted = []
    $.each(answers, function(key, value) {
      keys_sorted.push(key);
    })
    keys_sorted.sort();
    giantString = ""
    $.each(keys_sorted, function(index, value) {
      giantString = giantString + "|?" + value + "|!" + answers[value]
    })
    console.log(giantString);
    return giantString;
  }

  // highlighting triggers
  $(".passage span:not(#selection)").mousedown(function(e) {
    highlightTerm($(this).parents('.passage'), $(e.target));
  }).mouseup(function() {
    $('span').unbind('mouseover');
    if($(this).parents('.eventextraction').find('#passage #selection').length) {
      endSelection($(this).parents('.eventextraction'));
    }
  });

  $(".eventextraction .verification").blur(function(e){
   // alert($(this).val() + "--------------");
    if ($(this).val() != totalHighlights) {
      $(this).val("");
    }
  });

  // load up the final text box for gold grading
  $("input#check, a.js-tq-editor-submit-btn").hover(function(e) {
    $(".eventextraction").each(function() {
      if ($("#gold_form").length) {
        $('.gold_eval_gold').val(buildArray(this));
      } else {
        $(this).find('input.super_secret_box').val(buildArray(this));
      }
      console.log($(this).find('input.super_secret_box').val());
    })
  });
});
