const userData = [
    {
        id:"1",
        firstName:"Adrian",
        lastName:"Sumagang",
        occupation:"Student",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"2",
        firstName:" Jayson",
        lastName:"Custodio",
        occupation:"Student",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"3",
        firstName:"Vanessa",
        lastName:"Pasaan",
        occupation:"Teacher",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"4",
        firstName:"Richie",
        lastName:"Jimenez",
        occupation:"Staff",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"5",
        firstName:"Rolito",
        lastName:"Valles",
        occupation:"Father",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"6",
        firstName:"Karen",
        lastName:"Carabuena",
        occupation:"Cook",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"7",
        firstName:"Neson",
        lastName:"Mendes",
        occupation:"Singer",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"8",
        firstName:"Kaith",
        lastName:"C",
        occupation:"Student",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"9",
        firstName:"Alvilen",
        lastName:"Sumagang",
        occupation:"Student",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    },
    {
        id:"10",
        firstName:"Alvin",
        lastName:"Sumagang",
        occupation:"Student",
        profilePicture:"https://www.google.com/search?rlz=1C5CHFA_enPH858PH858&q=profile+black+in+white+image&tbm=isch&source=univ&sa=X&ved=2ahUKEwj-_9vFpvrkAhWMZt4KHbmyCI4QsAR6BAgGEAE&biw=1320&bih=718#imgrc=dK6UTVT7i9E-yM:"
    }
];

const tableElement = document.getElementById('users');
const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', (event)=>{
    const searchText = searchInput.value.toLowerCase();
    console.log(searchText);

if(!searchText){
    
}


const filteredUsers = userData.filter((user)=>{
    return user.firstName.toLowerCase() === searchText ||
    user.lastName.toLowerCase() === searchText ||
    user.occupation.toLowerCase() == searchText;
        
    })

console.log(filteredUsers);

const tbody = tableElement.children[1];
Array.from(tbody.children).forEach((row)=>{
    row.remove();
})
addRows(filteredUsers);

});

 const addRows=(users) =>{

    const forEachCallbackFn = function(user){
        const rowElement= document.createElement('tr');
        const id = document.createElement('td');
        const firstName = document.createElement('td');
        const lastName = document.createElement('td');
        const occupation = document.createElement('td');
    
    
        id.textContent = user.id;
        firstName.textContent = user.firstName;
        lastName.textContent = user.lastName;
        occupation.textContent = user.occupation;
    
        rowElement.appendChild(id);
        rowElement.appendChild(firstName);
        rowElement.appendChild(lastName);
        rowElement.appendChild(occupation);
    
        // tableElement.appendChild(rowElement);
        tableElement.children[1].appendChild(rowElement);
    }
    users.forEach(forEachCallbackFn);
    
};

addRows(userData);