

const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))

}

loadBuddies(); // calling function 

const displayBuddies = buddy =>{

    const buddies = buddy.results;

    const buddiesText = document.getElementById('buddies');

    for(const buddy of buddies){
        console.log(buddy)
    const p = document.createElement('p');
    p.innerText = `Name :  ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} , Email : ${buddy.email} , Location : ${location} } `

    buddiesText.appendChild(p);

}

 

}
