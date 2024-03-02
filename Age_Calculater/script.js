let disBlock = document.getElementById("disBlock");
let age = document.getElementById("age");
let time = document.getElementById("time");
let dobDate = document.getElementById("dobDate");
let calcBtn = document.getElementById("calcBtn");
let resetBtn = document.getElementById("resetBtn");

disBlock.style.display = 'none';
let dob = new Date(), today = new Date()


function samay() {
    let d = new Date();
    time.innerHTML = d.getHours() + " Hours, " + d.getMinutes() + " Minutes, and " + d.getSeconds() + " Seconds ⏳";
}
function calculate() {
    disBlock.style.display = 'block';
    let dobVal = dobDate.value;
    dob = new Date(dobVal);
    console.log(dob);

    let year, month, day;
    day = (function () {
        if (today.getDate() > dob.getDate()) {
            return today.getDate() - dob.getDate() - 1;
        } else if (today.getDate() == dob.getDate()) {
            return today.getDate() - dob.getDate();
        } else {
            let calDate = new Date(dob.getFullYear(), dob.getMonth() + 1, 0);
            return (today.getDate() + calDate.getDate()) - dob.getDate() - 1;
        }
    }());

    month = (function () {
        if (today.getMonth() >= dob.getMonth()) {
            if (today.getDate() >= dob.getDate()) {
                return today.getMonth() - dob.getMonth();
            } else {
                if ((today.getMonth() - 1) >= dob.getMonth()) {
                    return (today.getMonth() - 1) - dob.getMonth();
                } else {
                    return ((today.getMonth() - 1) + 12) - dob.getMonth()
                }
            }
        } else {
            if (today.getDate() >= dob.getDate()) {
                return (today.getMonth() + 12) + dob.getMonth();
            } else {
                return ((today.getMonth() - 1) + 12) - dob.getMonth()
            }
        }
    }());

    year = (function () {
        if (dob.getMonth() == today.getMonth()) {
            if (dob.getDate() > today.getDate()) {
                return (today.getFullYear() - 1) - dob.getFullYear();
            } else {
                return today.getFullYear() - dob.getFullYear();
            }
        } else {
            if (dob.getMonth() > today.getMonth()) {
                return (today.getFullYear() - 1) - dob.getFullYear();
            } else {
                return today.getFullYear() - dob.getFullYear();
            }
        }
    }());

    age.innerHTML = "You are ⮞⮞⮞⮞ <br>" + year + " Year, " + month + " months, " + day + " days old.♕";
    calTime = setInterval(samay, 1000);
}
calcBtn.onclick = calculate;

function reset() {
    age.innerHTML = "";
    time.innerHTML = "";
    clearInterval(calTime);
    disBlock.style.display = "none"
}

resetBtn.onclick = reset;