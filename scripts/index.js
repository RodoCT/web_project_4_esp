//Popup wrappers
const profileInfoPopup = document.querySelector(".popup_type_edit-profile");

//Open buttons
const profileButton = document.querySelector(".profile__edit");

//Close buttons
const closeProfileButton = profileInfoPopup.querySelector(".popup__close");

//Forms
const profileForm = document.querySelector(".form__profile-edit");

//Profile elements
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//Form inputs
const nameInput = document.querySelector(".form__input_type_name");
const descriptionInput = document.querySelector(
  ".form__input_type_description"
);

//Popup toggle
function togglePopup(modal) {
  modal.classList.toggle("popup__opened");
}

//Button listeners
closeProfileButton.addEventListener("click", () => {
  togglePopup(profileInfoPopup);
});

//Profile info submit
function submitProfileInfo(e) {
    e.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    togglePopup(profileInfoPopup);
  }
  
  profileForm.addEventListener("submit", submitProfileInfo);
  profileButton.addEventListener("click", () => {
    if (profileInfoPopup.classList.contains("popup__opened")) {
      nameInput.value = profileName.textContent;
      descriptionInput.value = profileDescription.textContent;
    }
    togglePopup(profileInfoPopup);
  });