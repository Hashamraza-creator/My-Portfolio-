document.querySelector('.cross-icon').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{

    document.querySelector('.sidebar').classList.toggle('sidebarGo');

if(document.querySelector('.sidebar').classList.contains('sidebarGo')){

document.querySelector('.ham-icon').style.display = 'inline'
document.querySelector('.cross-icon').style.display = 'none'

}

else{

    document.querySelector('.ham-icon').style.display = 'none'
    document.querySelector('.cross-icon').style.display = 'inline'
    


}



})
