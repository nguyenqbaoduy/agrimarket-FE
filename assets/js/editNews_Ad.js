//	PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const  imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function(){
	dropdownProfile.classList.toggle('show')
})

window.addEventListener('click', function(e){
	if(e.target !==imgProfile)	{
		if(e.target !== dropdownProfile){
			if(dropdownProfile.classList.contains('show')){
				dropdownProfile.classList.remove('show');
			}
		}
	}
})
//Upload Image
let uploadButton = document.getElementById("upload-button");
let choosenImage = document.getElementById("choosen-image");
let fileName = document.getElementById("file-name");
let imageUser = document.querySelector(".image-user");

uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    console.log(uploadButton.files[0]);
    reader.onload = () => {
        choosenImage.setAttribute("src",reader.result);
        imageUser.classList.add("active");
    }
    fileName.textContent = uploadButton.files[0].name;
};