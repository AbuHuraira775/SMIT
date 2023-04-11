// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function add1(a){
//     function add2(b){
//         return a+b
//     }
//     return add2(5)
// }

// const res = add1(5)
// console.log(res)

// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.

// let arr = [1,2,3,4,5,6,7,8,9,10,11,23,45,67,78,43,21]
// function recursion(n,value){     
//         if(n<arr.length){
//             if(arr[n]==value){console.log('true')}
//             else{console.log('false') }
//         }
//         recursion(n+1,value)
// }
// const res = recursion(0,5)
// console.log(res)

// 3. Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.

// function addPara(content){
//     var para2 = document.getElementById('para2')
//     para2.innerText = content
// }

// 4. Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.

// function addItems(content){
//     var ol = document.getElementById('ol')
//     var li = document.createElement('li')
//     li.innerText = content
//     ol.appendChild(li)
// }

// 5. Write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color.


// var html = document.getElementById('body')  
// function bg(html,code){
//     for(var i=0;i<6;i++){
//         code += Math.floor(Math.random()*9)
//     }
//     html.style.backgroundColor = code
// }

// bg(html,'#')

// 6. Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store.


// function addData(){
// const data = {
//     name : prompt("enter name"),
//     age :  prompt("enter age"),
//     city :  prompt("enter city"),
// }
// function localStorage_obj(key,obj){
//     localStorage.setItem(key,(JSON.stringify(obj)))
// }
// localStorage_obj('student',data)
// console.log(data)
// }

// 7. Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.

// function create_obj(){           
//     let employee = {
//         Ename : prompt('enter name'),
//         Eid : prompt('enter id'),
//         Edepartment : prompt('enter department'),
//         Esalary : prompt('enter salary'),
//     }
//     console.log(employee)
//     localStorage.setItem('employee',(JSON.stringify(employee)))
//     return employee
// }
// function retrieve_Data(key){
//     const fetch_data = localStorage.getItem(key,(JSON.parse(data)))
//     console.log(fetch_data)
// }

// 8. Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.

// function add_obj(){
//     let create_obj = {
//         name : prompt('enter name'),
//         id : prompt('enter id'),
//         age : prompt('enter age'),
//         city : prompt('enter city'),
//     }
//     localStorage.setItem(create_obj.name,(JSON.stringify(create_obj.name)))
//     localStorage.setItem(create_obj.id,(JSON.stringify(create_obj.id)))
//     localStorage.setItem(create_obj.age,(JSON.stringify(create_obj.age)))
//     localStorage.setItem(create_obj.city,(JSON.stringify(create_obj.city)))

//     let name = localStorage.getItem(JSON.parse(create_obj.name))
//     let id = localStorage.getItem(JSON.parse(create_obj.id))
//     let age = localStorage.getItem(JSON.parse(create_obj.age))
//     let city = localStorage.getItem(JSON.parse(create_obj.city))

//     console.log(name,id,age,city)
//     return create_obj
// }

// const data = add_obj()
// console.log(data)