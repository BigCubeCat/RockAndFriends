type ruleTextObject = {
  title: string;
  img: string;
  body: string;
}
export const RulesText: { [key: string]: ruleTextObject } = {
  "classic": {
    title: "Классический режим",
    img: "/img/classic.jpg",
    body: "Правила игры описываются следующим образом:\nНожницы режут бумагу. Бумага заворачивает камень. "
  },
  "spock": {
    title: "Камень, ножницы, бумага, ящерица, Спок",
    img: "/img/5.svg",
    body: "Правила игры описываются следующим образом:\nНожницы режут бумагу. Бумага заворачивает камень. Камень давит ящерицу, а ящерица травит Спока, в то время как Спок ломает ножницы, которые, в свою очередь, отрезают голову ящерице, которая ест бумагу, на которой улики против Спока."
  },
  "custom": {
    title: "God mode: Создайте правила сами!",
    body: "Мой режим - мои правила!\nСоздайте свою вариацию игры!",
    img: "/img/bg.webp"
  }
}

