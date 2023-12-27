# Sedona

Учебный проект Седона выполнен в рамках курса Фронтенд разработчик от [htmlacademy](https://htmlacademy.ru)
![htmlacademy](https://ritfest.ru/i/ritfest/2018/reunion/members/html_academy.png)

## В рамках проекта освоены такие знания как:
  -  ### Разметка
##### Пример разметки блока навигации
```html
   <nav class="header_navigation">
          <ul class="navigation__menu">
            <li class="menu__item logo">
              <a href="#" class="navigation__logo"
                ><img
                  src="./img/logo.svg"
                  alt="Логотип Седона"
                  width="139"
                  height="70"
              /></a>
            </li>
            <li class="menu__item menu__item-active">
              <a href="#" class="menu__link">Главная</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">О Седоне</a>
            </li>
            <li class="menu__item">
              <a href="./catalog.html" class="menu__link">Гостиницы</a>
            </li>
          </ul>
        </nav>
```
  - ### Графика и базовая стилизация
  ##### Пример базовой стилизации
  ```css
*, html {
  margin: 0;
  padding: 0;
}

.page__container {
  margin: 0;
  padding: 0;
  width: 1200px;
  background: #ffffff;
}

.promotion__box {
  background: url("../img/background/mail.jpg");
}

  ```
  - ### Создание и использование флекс и грид сеток на странице
##### Пример создания сеток
``` css
.navigation__menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
}

.advantages__sublist {
  height: 384px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```
  -  ### Создание декоративных элементов верстки
##### Пример создания декоративного элемента
``` css
.page__popup {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(242, 242, 242, 0.8);
  width: 100%;
  height: 100%;
  display: none;
}
```
## Цель создания и описание работы:
  1. Цель создания:
     - получение практических навыков
     - создание учебного проекта
  2. Описание работы:
     - верстка макету по псевдо БЭМ-нотации
     - стилизация компонентов и сеток в соответствии с требованием макета
# Результат работы
  ### Результат доступен по ссылке [https://lebedev05tmn.github.io/Sedona](https://lebedev05tmn.github.io/Sedona)
  ##### Вид главной страницы при загрузке
  ![Вид главной страницы при загрузке](https://github.com/lebedev05tmn/Sedona/blob/main/img/Снимок%20экрана%202023-12-27%20в%2016.53.11.png)
