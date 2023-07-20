// Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan", и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".
//
//     let passport = {
//     name: "Petr",
//     surname: "Petrov",
// };
//
// ❗Для того, чтобы проверить правильность данного задания должно быть выведено 2 console.log


let passport = {
    name: "Petr",
    surname: "Petrov",
};

const passport2  = Object.assign({}, passport)
passport2.name = "Ivan"
console.log(passport.name)
console.log(passport2.name)
