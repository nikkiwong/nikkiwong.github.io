container = document.getElementById("byteimages");
var img = [
  ["images/1.jpg","Oats, cranberry and sesame Bytes (GF)"],
  ["images/chickpeacookie.png","Cranberry and chocolate Bytes (GF)"],
  ["images/3.jpg","Oats and cranberry Bytes (GF)"],
    ["images/bao.jpg","Fluffy bao with Chinese BBQ vegan filling (not GF)"],
      ["images/brownie1.jpg","Chocolate brownie Bytes (GF)"],
        ["images/brownie2.jpg","Chocolate brownie Bytes (GF)"],
        ["images/matcha.jpg","Matcha Bytes (GF)"],
        ["images/matcha2.jpg","Lemon Bytes (GF)"],
        ["images/whitechoc.jpg","Vanillo Bytes (GF)"],
        ["images/2.png","Vanillo Bytes (GF)"],
        ["images/mochi2.jpg","Peanut butter and Chocolate Mochi Bytes (GF)"]
];

function gallery(item) {
    container.innerHTML = container.innerHTML + "<div class='container'><img id='gallery' src='"
    + item[0] + "'><div class='middle'><div class='text'>" + item[1] + "</div></div></div>"
}
