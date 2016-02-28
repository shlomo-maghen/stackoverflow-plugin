setTimeout(function(){
  //first check if there is a java tag
  java8Tag = false;
  tags = $(".post-taglist a")
  for(i = 0; i < tags.length; i++){
    if(tags[i].innerText.toUpperCase() == "JAVA"){
      java8Tag = true;
      break;
    }
  }
  if(java8Tag){
    //all java class names have class 'typ' on stack overflow
    //get all span elements with class 'typ'
    c = $(".typ");
    //for each element, check if class exists in javaClasses.json
    for (i = 0; i < c.length; i++){
      //element text
      className = c[i].innerText;
      //if found class name, its index is returned
      index = findClassName(className);
      if(index > -1){
        element = $(c[i])
        row = classes[index]
        //replace the element with our own element, adding unique class name for css
        element.replaceWith('<a class="new_link_333" href="' + row.href + '">' +  row.class + "</a>");
      }
    }
  }
}, 1000)
