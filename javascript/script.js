console.log("hello");

let list1 = [];
let list2 = [];
let list3 = [];

list1 = localStorage.getItem('movieListA');
list1 = JSON.parse(list1);
console.log("list 1 : ",list1);
list2 = localStorage.getItem('movieListB');
list2 = JSON.parse(list2);
console.log("list 2 : ",list2);
list3 = localStorage.getItem('movieListC');
list3 = JSON.parse(list3);
console.log("list 3 : ",list3);

let movies_input = document.getElementsByClassName("textarea1");
console.log(movies_input);

for(let i = 0; i < movies_input.length; i++){
    
    console.log("value = ", movies_input[i].value);
    movies_input[i].onchange = function(event) {
        movies_input[i].value = event.target.value;
        // console.log(movies_input[i].value);

        if(i == 0) {
            list1 = list1.concat(movies_input[0].value.split("\n"));
            list1 = [...new Set(list1)];
            // console.log(list1);

            list2.map((movie2, ind2) => {
                list1.map((movie1, ind1) => {
                    if(movie1 == movie2){
                        list3.push(movie1);
                        list1.splice(ind1,1);
                        list2.splice(ind2,1);
                    }
                })
            })
        }

        if(i == 1) {
            list2 = list2.concat(movies_input[1].value.split("\n"));
            list2 = [...new Set(list2)];


            list1.map((movie, ind1) => {
                list2.map((movie2, ind2) => {
                    if(movie2 == movie){
                        list3.push(movie);
                        list1.splice(ind1,1);
                        list2.splice(ind2,1);
                    }
                })
            })
        }

    }

    movies_input[i].onfocus = function() {
      
        // clearing textbox on focus
        movies_input[i].value = "";


        // add movies to the list boxes
        document.getElementById("list1").innerHTML = "";

        for(let movie of list1){
            let li = document.createElement("li");
            li.innerText = movie;
            document.getElementById("list1").appendChild(li);
        }
        
        document.getElementById("list2").innerHTML = "";

        for(let movie of list2){
            let li = document.createElement("li");
            li.innerText = movie;
            document.getElementById("list2").appendChild(li);
        }

        document.getElementById("list3").innerHTML = "";
        
        for(let movie of list3){
            let li = document.createElement("li");
            li.innerText = movie;
            document.getElementById("list3").appendChild(li);
        }

        
        localStorage.setItem('movieListA', JSON.stringify(list1));
        localStorage.setItem('movieListB', JSON.stringify(list2));
        localStorage.setItem('movieListC', JSON.stringify(list3));
        
    }    
}

// FUNCTION FOR CLEARING DATA
function clearData() {
    list1 = [];
    localStorage.removeItem('movieListA');
    document.getElementById("list1").innerHTML = "";
    list2 = [];
    localStorage.removeItem('movieListB');
    document.getElementById("list2").innerHTML = "";
    list3 = [];
    localStorage.removeItem('movieListC');
    document.getElementById("list3").innerHTML = "";
}
