console.log("hello");

let list1 = [];
let list2 = [];
let list3 = [];

let movies_input = document.getElementsByClassName("textarea1");
console.log(Array.isArray(movies_input));

for(let i = 0; i < movies_input.length; i++){
    
    console.log("value = ", movies_input[i].value);
    movies_input[i].onchange = function(event) {
        movies_input[i].value = event.target.value;
        console.log(movies_input[i].value);

        if(i == 0) {
            list1 = list1.concat(movies_input[0].value.split("\n"));
            list1 = [...new Set(list1)];
            console.log(list1);
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

            
        console.log(list1);
        console.log(list2);
        console.log(list3);
    }

    movies_input[i].onfocus = function() {
        movies_input[i].value = "";

        if(i == 1){
            document.getElementById("list1").innerHTML = "";

            for(let movie of list1){
                let li = document.createElement("li");
                li.innerText = movie;
                document.getElementById("list1").appendChild(li);
            }
        }

        if(i == 0){

            // document.getElementById("list1").innerHTML = "";

            // for(let movie of list1){
            //     let li = document.createElement("li");
            //     li.innerText = movie;
            //     document.getElementById("list1").appendChild(li);
            // }

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
        }
        
    }
    
    
}
