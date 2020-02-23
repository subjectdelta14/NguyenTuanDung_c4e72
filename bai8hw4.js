clear()
const square = {
  x: 100,
  y: 50,
  width: 20
};
rt(90);
penup()
fd(square.x);
lt(90);
fd(square.y);
pendown();
for (let i = 0; i < 4; i++) {
  fd(square.width);
  rt(90);
}