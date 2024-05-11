// callbacks , callback hell , pyramid of doom

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
// setTimeout(()=>{
//     heading1.textContent = "Heading 1";
//     heading1.style.color = "violet"
//     setTimeout(()=>{
//         heading2.textContent = "Heading 2";
//         heading2.style.color = "purple"
//         setTimeout(()=>{
//             heading3.textContent = "Heading 3";
//             heading3.style.color = "red";
//             setTimeout(()=>{
//                 heading4.textContent = "Heading 4";
//                 heading4.style.color = "pink";
//                 setTimeout(()=>{
//                     heading5.textContent = "Heading 5";
//                     heading5.style.color = "green";
//                     setTimeout(()=>{
//                         heading6.textContent = "Heading 6";
//                         heading6.style.color = "blue";
//                         setTimeout(()=>{
//                             heading7.textContent = "Heading 7";
//                             heading7.style.color = "brown"
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);

//doing above thing by function
function changeText(
  element,
  text,
  color,
  time,
  onSucesscallback,
  onFailurecallback
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSucesscallback) onSucesscallback();
    } else if (onFailurecallback) onFailurecallback();
  }, time);
}
// console.log("hello world");
// pyramid of doom
changeText(
  heading1,
  "one",
  "violet",
  1000,
  () => {
    changeText(
      heading2,
      "two",
      "purple",
      1000,
      () => {
        changeText(
          heading3,
          "three",
          "red",
          1000,
          () => {
            changeText(
              heading4,
              "four",
              "pink",
              1000,
              () => {
                changeText(
                  heading5,
                  "five",
                  "green",
                  1000,
                  () => {
                    changeText(
                      heading6,
                      "six",
                      "blue",
                      1000,
                      () => {
                        changeText(
                          heading7,
                          "seven",
                          "brown",
                          1000,
                          () => {},
                          () => {
                            console.log("heading 1 does not exist");
                          }
                        );
                      },
                      () => {
                        console.log("heading 2 does not exist");
                      }
                    );
                  },
                  () => {
                    console.log("heading 3 does not exist");
                  }
                );
              },
              () => {
                console.log("heading 4 does not exist");
              }
            );
          },
          () => {
            console.log("heading 5 does not exist");
          }
        );
      },
      () => {
        console.log("heading 6 does not exist");
      }
    );
  },
  () => {
    console.log("heading 7 does not exist");
  }
);
