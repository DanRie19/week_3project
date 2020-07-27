//form//
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
function handleSubmit(noRefresh) {
  noRefresh.preventDefault();
  const meMyselfI = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
  submitMes(meMyselfI, input.value);
  form.reset();
}
const input = document.querySelector("input");

// box //
const chatbox = document.querySelector("#chatbox");

//date//
const time = new Date().toLocaleTimeString();
//message text//
let deleteIt = false;
function submitMes(send, theText) {
  if (!theText.length) return;
  deleteIt++;

  const text = 
  `<ul class='message' id='${deleteIt}'>
  <li>${time}</li>
  <li class="send">${send}:</li>
<li>${theText}</li>
 <li class="delete" onclick='deleteMe(${deleteIt})'>Delete Me</li>
                        </ul>`;
  chatbox.innerHTML += text;
  chatbox.scrollTop = chatbox.scrollHeight;

}

//delete message//
function deleteMe(deleteIt) {
    const text = document.getElementById(deleteIt);
    text.remove();
  }
  
//button stuff//
const button = document.querySelector("button");
button.addEventListener("click", getLeJoke);

function getLeJoke() {
  fetch("https://api.icndb.com/jokes/random?limitTo=[nerdy]")
    .then((resp) => resp.json())
    .then((json) => submitMes("Did you know?", json.value.joke));
}
