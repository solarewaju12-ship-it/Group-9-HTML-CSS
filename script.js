// Modal code

const modal = document.getElementById('modal');

const openButtons = document.querySelectorAll('.open-modal');

const closeBtn = document.querySelector('.close-btn');

if(openButtons.length > 0 && closeBtn){

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

}

// Members page form

const memberForm = document.getElementById("memberForm");

if(memberForm){

    memberForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Member Registered Successfully!");

        memberForm.reset();

    });

}