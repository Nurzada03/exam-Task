# Requirements

* Есть два варианта, можно писать на JS либо на TS
  * Если решили писать на JS то работаем в папке JS/
  * Если решили писать на TS то работаем в папке TS/
  
* Есть не завершенный компонент <Checkout />.
* Вам не разрешено добавлять какие-либо дополнительные элементы HTML.
* Нужно обьязательно использовать Redux-Tookit, createAsyncThunk

* Demo video - можно посмотреть демо видео по ссылке: https://drive.google.com/file/d/1o2Rz5HBOPOEp9DlvE9FWnLJoW9KUp5-C/view?usp=sharing

* Как только компонент <Checkout /> первый раз монтируется(mount), нужно получить список продуктов(products) используя getProducts function.
* Как только данные успешно получены, надо спрятать loading icon.
* Иногда getProducts функция будет возвращать ошибку, если ошибка то нужно показывать текст "Some thing went wrong"
* Надо отрендерить каждый обьект используя компонент <Product/>, и нужно передать необходимые props.
* Нужно выполнить следующие функционалы:
  * Increment и decrement кнопки должны работать как надо
  * Количество минуска кетпеш керек и доступный количестводон ашпаш керек.
  * Ар бир заказдын Total price количествосуна(quantity) жана баасына(price) жараша эсептелиш керек
  * Ошондой эле баардык заказдардын total price дагы эсептелиш керек summary болугундо
  * Если общий заказдын баасы  $1000 дан ашып калса то 10% скидка кылабыз. И скидканы дагы коргозуш керек
  * Баардык акчалардын суммасын 2 decimal кылып округляйтетиш керек. Мисалы $1000.34554 -> $1000.34
---