function attachEvents() {
    let loadButton = document.getElementById("btnLoad");
    let phoneBook = document.querySelector("#phonebook");

    let newPersonValue = document.querySelector("#person");
    let newPhoneValue = document.querySelector("#phone");

    let createButtonRef = document.querySelector("#btnCreate")

    let nextElementId;

    function getAllPhones() {
        return fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(x => x.json())
            .then(x => {
                return Object.entries(x);
            });
    }

    loadButton.addEventListener("click", () => {
        loadPhoneBook();
    })

    createButtonRef.addEventListener("click", () => {
        let newPersonObj = {
            person: newPersonValue.value,
            phone: newPhoneValue.value
        }

        getAllPhones()
            .then(currentPhoneCollection => {
                fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${currentPhoneCollection.length}.json`, {
                    method: 'PUT',
                    body: JSON.stringify(newPersonObj)
                })
                    .then(() => {
                        newPersonValue.value = '';
                        newPhoneValue.value = '';

                        loadPhoneBook();
                    })
                    .catch(err => {
                        console.log(err, 'Error');
                    })
            })
    })

    function loadPhoneBook() {
        getAllPhones()
            .then(usserToBeDisplayed => {
                phoneBook.innerHTML = '';
                nextElementId = usserToBeDisplayed.length + 1;
                usserToBeDisplayed.forEach(([id, element]) => {
                    

                    if(!user) {
                        return;
                    }
                    let tempLi = document.createElement("li");

                    let deleteButton = document.createElement("button")

                    deleteButton.addEventListener("click", () => {
                        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`, {
                            method: 'DELETE'
                        })
                    })
                    deleteButton.textContent = "DELETE";

                    tempLi.appendChild(deleteButton);

                    tempLi.innerHTML = `${element.person}: ${element.phone} `;
                    phoneBook.appendChild(tempLi);
                });
            })
    }
}

attachEvents();