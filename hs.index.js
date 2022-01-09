function SortLocalStorage(){
    if(localStorage.length > 0){
       var localStorageArray = new Array();
       for (i=0;i<localStorage.length;i++){
           localStorageArray[i] = localStorage.key(i)+localStorage.getItem(localStorage.key(i));
       }
    }
    var sortedArray = localStorageArray.sort();
    return sortedArray;