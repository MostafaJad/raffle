const employees = [
  "Naveen ",
  "Gaganajeet ",
  "Aran ",
  "Aliah ",
  "Tiffan ",
  "John Mason ",
  "Kevin Medeiros ",
  "Melissa ",
  "Hasnian ",
  "Philip ",
  "David Pham ",
  "Michael Pham ",
  "Quintin Rodriguez ",
  "Ricardo ",
  "Owura Ofori ",
  "Malik ",
  "Prerit ",
  "Jerome ",
  "Brandon ",
  "Rebecca ",
  "Jason Ng ",
];
const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;
  //while there remain elements to shuffle
  while (currentIndex != 0) {
    // pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};

shuffle(employees);
console.log(employees);

const chooseRandom = (arr, num = 1) => {
  const res = [];
  for (let i = 0; i < num; ) {
    const random = Math.floor(Math.random() * arr.length);
    if (res.indexOf(arr[random]) !== -1) {
      continue;
    }
    res.push(arr[random]);
    i++;
  }
  return res;
};
console.log(chooseRandom(employees, 5));
var myEl = document.getElementById("#ticketPicker");

$("#ticketPicker").ready(function () {
  $.each(chooseRandom(employees, 5), function (key, value) {
    $("#winningTicket").html(
      "<span>" + "<br/>" + chooseRandom(employees, 5) + "</span>"
    );
  });
});
