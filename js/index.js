window.onload = function () {
    //check that js is working
    console.log("reading js");

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store user name in a variable
        var loversName = document.f.loversName.value;
        //store user color in a variable
        var socialMedia = document.f.socialMedia.value;
        var noun1 = document.f.noun1.value;
        var verb = document.f.verb.value;
        var restaurant = document.f.restaurant.value;
        var noun2 = document.f.noun2.value;
        var yourName = document.f.yourName.value;
        //error detection
        if (loversName == "" || socialMedia == "" || noun1 == "" || verb == "" || restaurant == "" || noun2 == "" || yourName == "") {
            alert("Please fill out the form completely darling!");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");

            myMsg.innerHTML = "My dearest <strong>" + loversName + "</strong>, <br><br> I saw on <strong>" + socialMedia + "</strong> that you like <strong>" + noun1 + "</strong>. I like that stuff too! Let's hang out this weekend. We can go get dinner at <strong>" + restaurant + "</strong> and afterwards we can go <strong>" + verb + " </strong> underneath the stars as we discuss your passion for <strong>" + noun2 + "</strong>. <br><br> Sincerely, <strong><br>" + yourName + "</strong>";
            myMsg.className = "show";
        }

        //prevent page from reloading
        return false;
    }

    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the userName field
        loversName.value = "";
        socialMedia.value = "";
        noun1.value = "";
        restaurant.value = "";
        verb.value = "";
        noun2.value = "";
        yourName.value = "";
        return false;
    }
}