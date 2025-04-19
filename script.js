    var namee = document.getElementById("name")
    var age = document.getElementById("age")
    var male = document.getElementById("male")
    var female = document.getElementById("female")
    var course = document.getElementById("course")
    var email = document.getElementById("email")
    var saveBtn = document.getElementById("saveBtn")
    var outPut = document.getElementById("outPut")


    saveBtn.addEventListener("click", function () {
        var tr = document.createElement("tr")
        outPut.append(tr)

        var nameinput = document.createElement("td")
        nameinput.textContent = namee.value
        tr.append(nameinput)

        var ageinput = document.createElement("td")
        ageinput.textContent = age.value
        tr.append(ageinput)

        var genderinput = document.createElement("td")
        genderinput.textContent = male.checked ? "Male" : (female.checked ? "Female" : "")
        tr.append(genderinput)

        var courseinput = document.createElement("td")
        courseinput = course.value
        tr.append(courseinput)

        var emailinput = document.createElement("td")
        emailinput.textContent = email.value
        tr.append(emailinput)

        var deletecol = document.createElement("td")

        var deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"
        deletebtn.style.backgroundColor = "red"
        deletebtn.style.color = "white"
        deletecol.append(deletebtn)
        tr.append(deletecol)

        deletebtn.addEventListener("click", function (event) {
            tr.remove(event)
        })
    })

    // Disable save button initially
    saveBtn.disabled = true;

    // Function to check if all fields are filled
    function checkFields() {
        const genderSelected = male.checked || female.checked;
        const allFilled = namee.value.trim() !== "" &&
            age.value.trim() !== "" &&
            email.value.trim() !== "" &&
            course.value !== "" &&
            genderSelected;

        saveBtn.disabled = !allFilled;
    }

    // Add listeners to all inputs
    [namee, age, email, course, male, female].forEach(input => {
        input.addEventListener("input", checkFields);
        input.addEventListener("change", checkFields);
    });


