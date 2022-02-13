const config = {
    headers: {
      "content-type": "application/json",
    },
  };
   
  let skip = 0;
   
  document.querySelectorAll(".edit").forEach((item) => {
    item.addEventListener("click", function (event) {
      console.log(this.id, this, event);
      let userName = prompt("Enter your new user name");
      let userEmail = prompt("Enter your new user name");
      let userPhone = prompt("Enter your new user name");
   
      if (userName || userEmail || userPhone) {
        let body = JSON.stringify({
          id: this.getAttribute("id"),
          newData: {
            newName: userName,
            newEmail: userEmail,
            newPhone: userPhone,
          },
        });
   
        axios
          .post("/edit-item", body, config)
          .then((res) => {
            if (res.status == 200) {
              (this.innerText = newData.newName),
                (this.innerText = newData.newEmail),
                (this.innerText = newData.newphone);
              // event.target.parentElement.querySelector('.name').innerHTML = userInput;
              // event.target.parentElement.querySelector('.email').innerHTML = userInput;
              // event.target.parentElement.querySelector('.phone').innerHTML = userInput;
            } else {
              alert("Updation Failed");
            }
          })
          .catch((err) => {
            alert("Updation failed");
          });
      }
    });
  });
   
  document.querySelectorAll(".delete").forEach((item) => {
    item.addEventListener("click", function (event) {
      if (confirm("Do You want to delete the todo")) {
        let body = JSON.stringify({
          id: event.target.getAttribute("id"),
        });
   
        axios
          .post("/delete-item", body, config)
          .then((res) => {
            if (res.status == 200) {
              event.target.parentElement.remove();
            } else {
              alert("Delete Unsuccessful");
            }
          })
          .catch((err) => {
            alert("Delete Unsuccessful");
          });
      }
    });
  });