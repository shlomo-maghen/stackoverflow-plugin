setTimeout(function(){
  c = $(".typ");
  for (i=0; i < c.length; i++){
    className = c[i].innerText;
    index = findClassName(className);
    if(index > -1){
      element = $(c[i])
      row = classes[index]
      element.replaceWith('<a class="new_link_333" href="' + row.href + '">' +  row.class + "</a>");
    }

  }
}, 1000)
