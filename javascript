<html>
<head></head>
<body></body>

 <script>
 /*  Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
/*   function isEven(num){
     if(num%2==0){
     return("true");
     console.log(num);
    //  alert(even);
 }else{
     return("false");
 }
}


/*
     
     
     
function odd(num){
if(num%2!=0){
    return("true")
}
else{
    return("false")
}
}


/*
     Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

function bothOdd(num1,num2){
    if(num1%2 !=0 || num2%2 !=0){
        return("true");
    }
    else{
        return("false");
    }
    
    
    
    /*
        Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.


     function getFullName(firstName, lastName){
 
 return(firstName +" "+ lastName);

};
console.log(getFullName("E" , "hari"));


 /*
     Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.



   function getLengthOfWord(word1){
 return word1.length;
}
console.log(getLengthOfWord("hari"))


/*
Write a function called “isSameLength”.
Given two words, “isSameLength” returns whether the given words have the same length.

   function isSameLength(word1,word2){
    if(word1.length==word2.length){
        return("true")
    }else{
        return("false")
    }
}
console.log(isSameLength("hari", "bala"))


/*Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
  
  
  function getNthElement(array,n){
    if(array.length!=0){
        console.log(array[n]);
    }
    else
    {
        console.log(undefined);
    }
    
}
getNthElement([1,2,3,4,5,8],3);


 /*  
     Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘undefined’.

    function getLastElement(array){
    if(array.length!=0){
        console.log(array[(array.length)-1])
    }
    else
    {
        console.log(undefined);
    }
    
}
getLastElement([1,2,4,3,5,6,7]);


