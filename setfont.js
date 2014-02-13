var allDom = document.querySelectorAll("*");
for (var i  = 0; i < allDom.length; ++i) {
   var obj= allDom[i];
   if(typeof obj.setAttribute != "undefined"){
      baseStyle="";
      if(obj.getAttribute("style"))
         baseStyle=obj.getAttribute("style");
      obj.setAttribute("style","font-family: 'Comic Sans MS' !Important;"+ baseStyle);
   }
}
