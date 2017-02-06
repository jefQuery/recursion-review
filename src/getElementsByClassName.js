// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body) {
  //document.body, element.childNodes, and element.classList

  let results = [];
  let classNameList = node.className.split(" ");
  
  //check if node has class === className, split class by (" "), check if _.some(class, className);
  if (classNameList.includes(className)){
    //if true, push to results array
    results.push(node);
  } 
  
  //check for children in node
  if (node.children !== undefined && node.children.length > 0){
    //var children = node.childNodes
    for (let i = 0; i < node.children.length; i++){
      //if children, iterate over children, recursively call getElementsByClassName
      results = results.concat(getElementsByClassName(className, node.children[i]));
    }
  }

  return results;
};
