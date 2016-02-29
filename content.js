setTimeout(function(){
  //parse tags
  java8Tag = false;
  androidTag = false;
  tags = $(".post-taglist a")
  for(i = 0; i < tags.length; i++){
    tag = tags[i].innerText.toUpperCase();
    if(tag == "JAVA"){
      java8Tag = true;
    }else if(tag == "ANDROID"){
      androidTag = true;
    }
  }

  replaceElements = function(classes){
    //all class names have class 'typ' on stack overflow
    //get all span elements with class 'typ'
    c = $(".typ");

    //for each element, check if class exists in respective classes array
    for (i = 0; i < c.length; i++){
      //element text
      className = c[i].innerText;
      //if found class name, its index is returned
      index = findClassName(className, classes);
      if(index > -1){
        element = $(c[i])
        row = classes[index]
        //replace the element with our own element, adding unique class name for css
        element.replaceWith('<a class="new_link_333" href="' + row.href + '">' +  row.class + "</a>");
      }
    }
  }

  if(java8Tag){
    replaceElements(classesJava8);
  }
  if(androidTag){
    replaceElements(classesAndroid);
  }


}, 1000)
