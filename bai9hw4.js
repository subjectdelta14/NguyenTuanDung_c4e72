clear()
const rect = { 
x: 100,
y: 50, 
width: 20,
height: 40,
};
penup();
rt(90);
fd(rect.x);
lt(90);
fd(rect.y);
pendown()
for (let i = 0; i < 4; i++) {
  fd(rect.width);
  rt(90);
}