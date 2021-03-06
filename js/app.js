// Create a movie list object with title and id
let unorderedMovieList = {
  "Зигота (2017)": "1046599",
  "Ищу друга на конец света (2011)": "464573",
  "Звёздные войны, Эпизод 4 – Новая надежда": "333",
  "Список Шиндлера": "329",
  "Крестный отец": "325",
  "Криминальное чтиво": "342",
  "Молчание ягнят": "345",
  "Темный рыцарь": "111543",
  Титаник: "2213",
  Психо: "344",
  "Унесенные ветром": "456",
  "Король Лев": "2360",
  "Форрест Гамп": "448",
  "Властелин колец, Возвращение Короля": "3498",
  "Властелин колец, Братство кольца": "328",
  "Апокалипсис сегодня": "354",
  "Крестный отец 2": "327",
  "В джазе только девушки": "356",
  Начало: "447301",
  "ВАЛЛ·И": "279102",
  "2001 год, Космическая одиссея": "380",
  "Эта замечательная жизнь": "348",
  "Лоуренс Аравийский": "347",
  "Пролетая над гнездом кукушки": "336",
  "Назад в будущее": "476",
  "Звёздные войны, Эпизод 5 – Империя наносит ответный удар": "338",
  Инопланетянин: "544",
  Челюсти: "396",
  Матрица: "301",
  Гладиатор: "474",
  Чужой: "386",
  "Унесённые призраками": "370",
  "Красавица и чудовище": "540",
  "Индиана Джонс, В поисках утраченного ковчега": "339",
  "Славные парни": "350",
  "История игрушек, Большой побег": "258328",
  Касабланка: "330",
  "История игрушек": "482",
  "Поющие под дождем": "368",
  Головоломка: "645118",
  "Огни большого города": "414",
  "Семь самураев": "332",
  "Гражданин Кейн": "331",
  "Терминатор 2, Судный день": "444",
  "Спасти рядового Райана": "371",
  "Китайский квартал": "365",
  "Энни Холл": "390",
  "Побег из Шоушенка": "326",
  Аватар: "251733",
  "Тайна Коко": "679486",
  "Город Бога": "439",
  Амели: "341",
  "Властелин колец, Две крепости": "312",
  "Звёздные войны, Эпизод 6 – Возвращение Джедая": "447",
  Рокки: "6462",
  "Бешеный бык": "374",
  Головокружение: "352",
  Интерстеллар: "258687",
  "Жизнь прекрасна": "381",
  Семь: "377",
  Вверх: "325381",
  "В поисках Немо": "7908",
  "Волшебник страны Оз": "379",
  "Бегущий по лезвию": "403",
  "Храброе сердце": "399",
  Чужие: "406",
  Аладдин: "2361",
  Квартира: "404",
  "Андрей Рублев": "8385",
  "Темный рыцарь, Возрождение легенды": "437410",
  "Бойцовский клуб": "361",
  "Гарри Поттер и Дары Смерти, Часть II": "407636",
  "Как приручить дракона": "280172",
  "Заводной апельсин": "391",
  Амадей: "397",
  "Корпорация монстров": "458",
  "Изгоняющий дьявола": "491",
  "Джанго освобожденный": "586397",
  "Вечное сияние чистого разума": "5492",
  "Зеленая миля": "435",
  "Хороший, плохой, злой": "349",
  Таксист: "358",
  Рататуй: "89514",
  "Парк Юрского периода": "7121",
  "Доктор Стрейнджлав, или Как я научился не волноваться и полюбил атомную бомбу":
    "334",
  "Бен-Гур": "436",
  "Сансет бульвар": "353",
  "М убийца": "373",
  "Двойная страховка": "364",
  Зверополис: "775276",
  Пианист: "355",
  "Шестое чувство": "395",
  "Ла-Ла Ленд": "841081",
  Сияние: "409",
  "Окно во двор": "337",
  Метрополис: "417",
  "Седьмая печать": "425",
  "Мстители, Война бесконечности": "843649",
  Мстители: "263531",
  "Пираты Карибского моря, Проклятие Черной жемчужины": "4374",
  "Красота по-американски": "351",
  "Звёздные войны, Эпизод 3 – Месть Ситхов": "5619",
  Олдбой: "75871",
  "Секреты Лос-Анджелеса": "363",
  "На север через северо-запад": "343",
  Выпускник: "422",
  "Новые времена": "408",
  "Дикая банда": "450",
  Отступники: "81314",
  "Безумный Макс, Дорога ярости": "453406",
  "12 разгневанных мужчин": "346",
  Непрощенный: "451",
  "Крепкий орешек": "471",
  "Буч Кэссиди и Сандэнс Кид": "421",
  "Всё о Еве": "372",
  Расёмон: "388",
  "Звуки музыки": "7665",
  "Мост через реку Квай": "369",
  "Кинг Конг": "534",
  "Звёздные войны, Пробуждение силы": "714888",
  "1+1": "535341",
  "Хоббит, Нежданное путешествие": "278522",
  Леон: "389",
  "Жизнь других": "126196",
  Джокер: "1048334",
  "Человек дождя": "519",
  "Железный человек": "61237",
  "День сурка": "527",
  "Танцующий с волками": "2037",
  "Миллионер из трущоб": "413362",
  Солярис: "43911",
  Афера: "383",
  "Иди и смотри": "42571",
  "Охотник на оленей": "428",
  "Летят журавли": "7724",
  "Бонни и Клайд": "516",
  "Четыреста ударов": "510",
  "В порту": "398",
  "Броненосец «Потемкин»": "481",
  Искатели: "416",
  Выживший: "522941",
  "Игры разума": "530",
  "Волк с Уолл-стрит": "462682",
  "Стражи Галактики": "689066",
  Помни: "335",
  Гравитация: "468466",
  Артист: "539550",
  "Рапунцель, Запутанная история": "84049",
  "Пираты Карибского моря, Сундук мертвеца": "63991",
  "Гарри Поттер и узник Азкабана": "322",
  "Подозрительные лица": "340",
  Терминатор: "507",
  "Человек-паук, Через вселенные": "920265",
  "Вестсайдская история": "1289",
  "Похитители велосипедов": "432",
  Престиж: "195334",
  "12 лет рабства": "606646",
  "Король говорит!": "485311",
  "Зеленая книга": "1108577",
  Другие: "494",
  "Бешеные псы": "394",
  "Жизнь Пи": "158786",
  Взвод: "468",
  "Мой сосед Тоторо": "8221",
  Сталкер: "43970",
  "Бриллиантовая рука": "46225",
  "Белоснежка и семь гномов": "551",
  "Это случилось однажды ночью": "437",
  Кабаре: "7745",
  "Остров проклятых": "397667",
  "Хоббит, Пустошь Смауга": "408876",
  "Отель «Гранд Будапешт»": "683999",
  "Холодное сердце": "493208",
  "Гарри Поттер и философский камень": "689",
  Догвилль: "7226",
  Нефть: "196604",
  "Москва слезам не верит": "46708",
  "Назад в будущее 2": "5502",
  "Люди в черном": "1091",
  "8 с половиной": "535",
  "Золотая лихорадка": "478",
  "Мальтийский сокол": "366",
  "Лучшие годы нашей жизни": "429",
  "Восход солнца": "8441",
  Одержимость: "725190",
  "Железный человек 3": "462762",
  "Шоу Трумана": "4541",
  "Бэтмен, Начало": "47237",
  "Горбатая гора": "77647",
  "Лабиринт Фавна": "103733",
  "Принцесса Мононоке": "441",
  "1917": "1171976",
  "В бой идут одни «старики»": "25108",
  "Операция «Ы» и другие приключения Шурика": "42782",
  "Джентльмены удачи": "44386",
  "Кавказская пленница, или Новые приключения Шурика": "44745",
  "Крадущийся тигр, затаившийся дракон": "378",
  "Любовное настроение": "656",
  "Однажды на Диком Западе": "376",
  "На последнем дыхании": "18511",
  "Французский связной": "567",
  "Токийская повесть": "79836",
  "Печать зла": "384",
  "Сокровища Сьерра Мадре": "393",
  "Третий человек": "359",
  Исчезнувшая: "692861",
  "Мстители, Финал": "843650",
  "Бесславные ублюдки": "9691",
  "Ходячий замок": "49684",
  "Однажды в Америке": "469",
  "Малхолланд Драйв": "466",
  "Большой Лебовски": "555",
  "Ультиматум Борна": "87672",
  Мулан: "5277",
  "Убить пересмешника": "357",
  "Охотники за привидениями": "2467",
  Суперсемейка: "38903",
  "Индиана Джонс и последний крестовый поход": "472",
  "Ребенок Розмари": "8425",
  "Сладкая жизнь": "7722",
  "Близкие контакты третьей степени": "552",
  "История игрушек 2": "405",
  "Носферату, симфония ужаса": "521",
  "Вся президентская рать": "493",
  "Полуночный ковбой": "506",
  "Ночь охотника": "453",
  "Поймай меня, если сможешь": "324",
  "Грань будущего": "505851",
  Гонка: "596125",
  "Малышка на миллион": "81297",
  "Пираты Карибского моря, На краю Света": "102124",
  Казино: "2494",
  Привидение: "1991",
  "Иван Васильевич меняет профессию": "42664",
  "Римские каникулы": "497",
  Нечто: "8366",
  "Английский пациент": "7636",
  "Могила светлячков": "8219",
  Шрэк: "430",
  "...А зори здесь тихие": "43395",
  "Кошмар перед Рождеством": "8222",
  "Служебный роман": "43869",
  Зеркало: "45275",
  "Влюбленный Шекспир": "7662",
  Ганди: "513",
  "Моя прекрасная леди": "7666",
  "Иваново детство": "42667",
  "Барри Линдон": "5032",
  "Ночь живых мертвецов": "8370",
  "Берегись автомобиля": "46089",
  "Агирре, гнев божий": "8206",
  "Страсти Жанны д`Арк": "568",
  "Великая иллюзия": "473",
  "Правила игры": "38893",
  "Паровоз Генерал": "415",
  "Первый мститель, Противостояние": "822708",
  "Тор, Рагнарёк": "822709",
  "Люди Икс, Дни минувшего будущего": "597687",
  "Пираты Карибского моря, На странных берегах": "427076",
  "Шерлок Холмс": "420923",
  "Чёрная Пантера": "623250",
  "Голодные игры, И вспыхнет пламя": "602373",
  "Первый мститель, Другая война": "676266",
  "Три билборда на границе Эббинга, Миссури": "944098",
  "Реквием по мечте": "367",
  "Умница Уилл Хантинг": "539",
  "Город героев": "693126",
  Схватка: "571",
  "Общество мертвых поэтов": "4996",
  "Хатико, Самый верный друг": "387556",
  "Звёздные войны, Эпизод 1 – Скрытая угроза": "6695",
  "Лицо со шрамом": "4695",
  Паразиты: "1043758",
  "Пятый элемент": "2656",
  "Любовь и голуби": "45146",
  "Мулен Руж": "558",
  Девчата: "44168",
  "Добро пожаловать, или Посторонним вход воспрещен": "44238",
  Офицеры: "42736",
  "Голова-ластик": "15780",
  "Кто подставил кролика Роджера": "7108",
  "Великий диктатор": "431",
  Бэмби: "8154",
  "Ровно в полдень": "401",
  "Книга джунглей": "779024",
  "Стражи Галактики. Часть 2": "841263",
  "Бегущий по лезвию 2049": "589290",
  "Американская история X": "382",
  "Социальная сеть": "427198",
  "Железный человек 2": "411924",
  "Старикам тут не место": "195434",
  "Ford против Ferrari": "835086",
  "Человек-паук": "838",
  "Один дома": "8124",
  Фарго: "402",
  "Стальной гигант": "538",
  "Университет монстров": "468904",
  "Цельнометаллическая оболочка": "418",
  "Люди Икс 2": "298",
  "Человек-паук 2": "2898",
  "Назад в будущее 3": "7103",
  Русалочка: "8147",
  Бункер: "48246",
  Хэллоуин: "8435",
  "Последний император": "7663",
  "Новый кинотеатр &laquo;Парадизо&raquo;": "424",
  "Подводная лодка": "362",
  "Баллада о солдате": "46019",
  "Кабинет доктора Калигари": "8418",
  "Дурная слава": "419",
  "Гроздья гнева": "446",
  "Мстители, Эра Альтрона": "679830",
  "Большой куш": "526",
  "Голодные игры": "468581",
  Отверженные: "566055",
  Искупление: "255611",
  "Изгой-один, Звёздные войны. Истории": "840152",
  "По соображениям совести": "649917",
  Прибытие: "718811",
  "Искусственный разум": "594",
  "Интервью с вампиром": "8151",
  "Суперсемейка 2": "839650",
  Ральф: "586260",
  "Человек-слон": "464",
  "Гарри Поттер и Тайная комната": "688",
  "Звёздные войны, Эпизод 2 – Атака клонов": "844",
  "История игрушек 4": "846824",
  Чикаго: "634",
  Манхэттен: "420",
  "12 стульев": "46789",
  "Синий бархат": "5893",
  "Ирония судьбы, или С легким паром!": "77331",
  "Белый Бим Черное ухо": "46068",
  Спартак: "475",
  "Небо над Берлином": "8403",
  "Обыкновенное чудо": "77282",
  Персона: "79506",
  "Принцесса-невеста": "412",
  Ребекка: "426",
  "Земляничная поляна": "508",
  "Собачий полдень": "500",
  "Американские граффити": "7332",
  "Доктор Живаго": "6643",
  "Филадельфийская история": "438",
  "The Beatles, Вечер трудного дня": "8330",
  Дилижанс: "524",
  Нэшвилл: "912",
  "Невеста Франкенштейна": "8359",
  Дэдпул: "462360",
  "Отряд самоубийц": "468522",
  Прислуга: "470553",
  "Доктор Стрэндж": "409600",
  "Гарри Поттер и Дары Смерти, Часть I": "276762",
  "Счастливое число Слевина": "86326",
  "Гран Торино": "408410",
  "Звёздные войны, Последние джедаи": "718223",
  "Алиса в Стране чудес": "405609",
  Она: "577488",
  "007, Координаты «Скайфолл»": "408871",
  "Легенда №17": "601564",
  "Песнь моря": "714248",
  "Одиннадцать друзей Оушена": "770",
  Брат: "41519",
  "День независимости": "2022",
  "12 обезьян": "502",
  "Клуб &laquo;Завтрак&raquo;": "21844",
  "Судьба человека": "44027",
  "Поговори с ней": "463",
  "Жестокий романс": "45314",
  Акира: "8224",
  "Холодное лето пятьдесят третьего...": "7660",
  "Фанни и Александр": "8400",
  Разговор: "461",
  Телесеть: "520",
  "Плата за страх": "7727",
  "Человек с киноаппаратом": "45465",
  "Весь этот джаз": "7708",
  "Рим, открытый город": "7731",
  "Сказки туманной луны после дождя": "156647",
  "Утиный суп": "411",
  "Шерлок младший": "11380",
  Алчность: "26198",
  "Песнь дороги": "97788",
  "В центре внимания": "834394",
  "Омерзительная восьмерка": "819101",
  "Человек-паук, Возвращение домой": "690593",
  Марсианин: "841700",
  Воин: "442568",
  "Новый Человек-паук": "278217",
  "Великий Гэтсби": "463724",
  "Хоббит, Битва пяти воинств": "694633",
  "Карты, деньги, два ствола": "522",
  Логан: "807682",
  "Загадочная история Бенджамина Баттона": "81555",
  "Голодные игры, Сойка-пересмешница. Часть I": "661911",
  "Тор 2, Царство тьмы": "595938",
  "Звездный путь": "255129",
  "Гарри Поттер и Принц-полукровка": "89515",
  "Район №9": "397494",
  "Сонная Лощина": "5622",
  "Трасса 60": "3563",
  "28 дней спустя": "577",
  Аладдин: "1007049",
  "Повелитель бури": "281040",
  "Как приручить дракона 2": "512883",
  Авиатор: "6374",
  "В поисках Дори": "692957",
  "Трудности перевода": "5930",
  "Убить Билла": "2717",
  "Танцующая в темноте": "646",
  "Крамер против Крамера": "1902",
  "Когда Гарри встретил Салли": "1589",
  Курьер: "45028",
  "Они сражались за Родину": "42770",
  Пианино: "3663",
  "Джон Ф. Кеннеди, Выстрелы в Далласе": "1107",
  Тутси: "4520",
  "Тот самый Мюнхгаузен  (ТВ)": "77283",
  "Развод Надера и Симин": "579739",
  "Ночи Кабирии": "63929",
  Конформист: "58763",
  "Дни жатвы": "18431",
  Дорога: "531",
  Восхождение: "7765",
  "Я шагаю по Москве": "42398",
  "Мэри Поппинс": "8156",
  "Карнавальная ночь": "44720",
  Дамбо: "8225",
  Виридиана: "49941",
  "Военно-полевой госпиталь М.Э.Ш.": "537",
  Пиноккио: "8220",
  "Воспитание крошки": "440",
  "Гарольд и Мод": "20049",
  "Рождение нации": "1221",
  "Сверкающие седла": "8456",
  "Красные башмачки": "8443",
  "Битва за Алжир": "8384",
  "Сладкий запах успеха": "8282",
  "Леди Ева": "8251",
  "Бэтмен против Супермена, На заре справедливости": "770631",
  "Игра престолов  (сериал)": "464963",
  Прометей: "467099",
  Бёрдмэн: "722827",
  "Остаться в живых  (сериал)": "104122",
  Веном: "463634",
  Тор: "258941",
  "Капитан Марвел": "843859",
  "Богемская рапсодия": "568289",
  "Красавица и чудовище": "744987",
  "300 спартанцев": "81924",
  "На игле": "515",
  "Казино Рояль": "49844",
  "Твоё имя": "958722",
  Моана: "837530",
  "На гребне волны": "1990",
  "Зомби по имени Шон": "64021",
  "Завтрак у Тиффани": "17721",
  "Кинг Конг": "5908",
  "Ведьма из Блэр, Курсовая с того света": "8134",
  "Собачье сердце  (ТВ)": "77335",
  "Грязные танцы": "1996",
  "Ледниковый период": "707",
  Бразилия: "483",
  "Безумный Макс 2, Воин дороги": "8374",
  Стена: "23712",
  Мотылек: "4525",
  Пустоши: "6977",
  "Человек с бульвара Капуцинов": "45463",
  Уродцы: "8430",
  "Рассвет мертвецов": "8371",
  Птицы: "559",
  "Книга джунглей": "8133",
  "Грязный Гарри": "10857",
  "Последний киносеанс": "1864",
  "Кто боится Вирджинии Вульф?": "490",
  Голдфингер: "8192",
  Жить: "64131",
  "Делай, как надо": "4328",
  Франкенштейн: "8360",
  Фантазия: "536",
  "Рио Браво": "545",
  Нетерпимость: "1210",
  Аталанта: "88694",
  "МакКейб и миссис Миллер": "916",
  "Американец в Париже": "7671",
  "Приключения Робин Гуда": "484",
  "Человек из стали": "252667",
  "Форсаж 7": "754481",
  "Дэдпул 2": "961715",
  "Реальная любовь": "6144",
  "Сумерки. Сага. Рассвет, Часть 1": "432424",
  Пассажиры: "470689",
  "Чёрный лебедь": "278273",
  "Запах женщины": "4871",
  Изгой: "627",
  "Человек-муравей": "195496",
  Малефисента: "496849",
  Нокдаун: "12244",
  "Люди в черном 3": "455773",
  "Полночь в Париже": "504465",
  "Гадкий я": "432724",
  "Первый мститель": "160946",
  "Форма воды": "977743",
  "Донни Дарко": "410",
  "Люди Икс": "886",
  "Гарри Поттер и Орден Феникса": "48356",
  "Гарри Поттер и Кубок огня": "8408",
  "Невидимый гость": "959365",
  Меланхолия: "484488",
  "Человек-муравей и Оса": "935940",
  "Оз, Великий и Ужасный": "506005",
  Бэтмен: "4205",
  "Самый быстрый Indian": "81512",
  Армагеддон: "2941",
  Красотка: "8125",
  "Весна, лето, осень, зима... и снова весна": "47814",
  "Превосходство Борна": "41947",
  Служанка: "851960",
  "Вам и не снилось...": "45660",
  "Тайна в его глазах": "428003",
  "Навсикая из долины ветров": "8240",
  Вольт: "70955",
  "Отель &laquo;Руанда&raquo;": "77859",
  "Шерлок Холмс и доктор Ватсон, Знакомство  (ТВ)": "77269",
  "Шрэк 2": "5273",
  "Всё о моей матери": "517",
  "Планета обезьян": "542",
  "Тропы славы": "360",
  Бриолин: "2349",
  "Доживем до понедельника": "44299",
  Фотоувеличение: "7715",
  Мимино: "46638",
  "Техасская резня бензопилой": "16015",
  "Монти Пайтон и священный Грааль": "375",
  "Белое солнце пустыни": "46066",
  "А теперь не смотри": "6268",
  "Отец солдата": "44218",
  "Скромное обаяние буржуазии": "47130",
  Телохранитель: "445",
  "Рокко и его братья": "13540",
  Амаркорд: "77163",
  "Декалог  (сериал)": "94660",
  "Дерсу Узала": "8208",
  "Белорусский вокзал": "46063",
  Леопард: "7719",
  "На западном фронте без перемен": "460",
  Ран: "400",
  Приключение: "63930",
  "Хладнокровный Люк": "443",
  "Вторжение похитителей тел": "8361",
  Бильярдист: "459",
  "Его девушка Пятница": "470",
  Лора: "528",
  "Странствия Салливана": "8203",
  "Пираты Карибского моря, Мертвецы не рассказывают сказки": "575180",
  "Достучаться до небес": "32898",
  Игра: "12198",
  "Невидимая сторона": "450213",
  Дюнкерк: "931677",
  "Исходный код": "409295",
  "Иллюзия обмана": "522892",
  "Сумерки. Сага. Новолуние": "420224",
  "Облачный атлас": "464484",
  "Друзья  (сериал)": "77044",
  Хранители: "252641",
  "Чудо-женщина": "102383",
  "Люди Икс, Первый класс": "462358",
  "Однажды в… Голливуде": "1047883",
  "В диких условиях": "252626",
  "Стартрек, Возмездие": "455165",
  "Далласский клуб покупателей": "260162",
  "Мир Юрского периода": "594554",
  "Адвокат дьявола": "3797",
  Боец: "279580",
  "Операция «Арго»": "462487",
  "Королевство полной луны": "571892",
  Гангстер: "252156",
  "Трансформеры, Месть падших": "373391",
  "Особое мнение": "496",
  "Я – легенда": "195524",
  Троя: "3442",
  "«V» значит Вендетта": "86208",
  "Как приручить дракона 3": "706655",
  "Трансформеры 3, Тёмная сторона Луны": "452899",
  "Человек-паук, Вдали от дома": "1008445",
  "Человек-паук 3, Враг в отражении": "82441",
  "Последний самурай": "6764",
  "Хан Соло, Звёздные войны. Истории": "841277",
  "Дикие истории": "775727",
  Охота: "647671",
  Чудо: "722951",
  "Код Да Винчи": "77711",
  "Хроники Нарнии, Лев, колдунья и волшебный шкаф": "48162",
  Капернаум: "1118042",
  Мертвец: "2272",
  Маска: "6039",
  "ЛЕГО Фильм": "471644",
  Герой: "889",
  "Кунг-фу Панда": "103734",
  Патриот: "781",
  "Кошмар на улице Вязов": "5198",
  "Ральф против интернета": "988782",
  "На несколько долларов больше": "8190",
  "Призрак в доспехах": "8228",
  Робокоп: "7410",
  "В случае убийства набирайте &laquo;М&raquo;": "9028",
  "Последнее танго в Париже": "7147",
  "Покровские ворота  (ТВ)": "77203",
  "Золотой теленок": "45389",
  "Кин-дза-дза!": "44811",
  "Индиана Джонс и Храм судьбы": "7122",
  "Тельма и Луиза": "2614",
  Супермен: "7145",
  "Трамвай &laquo;Желание&raquo;": "486",
  "Весна на Заречной улице": "45748",
  "Из Африки": "1895",
  "Злые улицы": "3880",
  "Андалузский пес": "40473",
  "Путешествие на Луну": "185281",
  "Париж, Техас": "4401",
  "Лихорадка субботнего вечера": "8132",
  Дьяволицы: "8342",
  "Смех и горе у Бела моря": "279828",
  Избавление: "550",
  "Жюль и Джим": "18506",
  "Полуночная жара": "547",
  "Будучи там": "541",
  "Туз в рукаве": "8287",
  "Место под солнцем": "7693",
  "Это – Spinal Tap": "518",
  "Мистер Смит едет в Вашингтон": "387",
  "Человек, который застрелил Либерти Вэланса": "492",
  "Дети райка": "8442",
  "Быть или не быть": "512",
  "Белая горячка": "8281",
  Шейн: "8453",
  "Крупный план": "245805",
  Варкрафт: "277328",
  "Сумерки. Сага. Затмение": "432423",
  "Фантастические твари и где они обитают": "797840",
  "Господин Никто": "232785",
  "Доктор Хаус  (сериал)": "178710",
  "Сумерки. Сага. Рассвет, Часть 2": "527662",
  "Девушка с татуировкой дракона": "491724",
  "Области тьмы": "462606",
  Хористы: "51481",
  "Первому игроку приготовиться": "538225",
  "Декстер  (сериал)": "277537",
  "2012": "413447",
  "Люди Икс, Начало. Росомаха": "104904",
  Ной: "596001",
  "Форсаж 5": "496943",
  "Время первых": "885316",
  "Дивергент, глава 2, Инсургент": "762225",
  "Город грехов": "77443",
  "Мой парень – псих": "462938",
  Пипец: "419200",
  "Афера по-американски": "635177",
  "Хранитель времени": "462247",
  Джентльмены: "1143242",
  Трансформеры: "81288",
  "Луна 2112": "406671",
  "Твин Пикс  (сериал)": "84358",
  Золушка: "533954",
  Годзилла: "260991",
  Прочь: "944708",
  "Выживут только любовники": "565819",
  "Достать ножи": "1188529",
  "О чём говорят мужчины": "468102",
  Балто: "7097",
  "Люди Икс, Последняя битва": "61361",
  "Я, робот": "4886",
  "Сука-любовь": "488",
  "Война миров": "81289",
  "Как украсть миллион": "10156",
  "Эдвард руки-ножницы": "8421",
  Джуно: "197488",
  "Кунг-фу Панда 2": "427878",
  Апгрейд: "1009784",
  "Остров собак": "939785",
  "Чарли и шоколадная фабрика": "38905",
  Ранго: "426053",
  "Гадкий я 2": "550910",
  "Идентификация Борна": "619",
  "Звезда родилась": "474935",
  "Брат 2": "41520",
  "Впусти меня": "411761",
  "Матрица, Перезагрузка": "299",
  Магнолия: "477",
  "Вспомнить всё": "2443",
  Беглец: "3915",
  Малыш: "2127",
  "Приключения Паддингтона 2": "906042",
  Тачки: "61249",
  "Мэри и Макс": "378246",
  "Джерри Магуайер": "4561",
  "Один дома 2, Затерянный в Нью-Йорке": "5928",
  "Ромео и Джульетта": "15204",
  "Приключения Шерлока Холмса и доктора Ватсона, Собака Баскервилей": "470352",
  Возвращение: "102185",
  "Люди в черном 2": "6379",
  Муха: "8877",
  "Место встречи изменить нельзя  (мини-сериал)": "77202",
  Омен: "11841",
  "Свидетель обвинения": "489",
  "Нюрнбергский процесс": "13738",
  "Не может быть!": "46368",
  Вий: "45771",
  Персиполис: "257900",
  "Невероятные приключения итальянцев в России": "46421",
  Афоня: "43423",
  "Три цвета, Синий": "18348",
  "День, когда остановилась Земля": "495",
  Суспирия: "22581",
  "Беспечный ездок": "4220",
  "Шерлок Холмс и доктор Ватсон, Сокровища Агры  (ТВ)": "77264",
  "Плетеный человек": "5678",
  "Чунгкингский экспресс": "22819",
  "Парни что надо": "503",
  "Время цыган": "63782",
  "Мне двадцать лет": "46660",
  "Проверка на дорогах": "43332",
  "Незнакомцы в поезде": "407",
  "Магазинчик за углом": "9003",
  "Американский оборотень в Лондоне": "8854",
  "Хиросима, моя любовь": "80754",
  Фицкарральдо: "13499",
  Харакири: "103148",
  "Подними красный фонарь": "8483",
  "Огненные колесницы": "7584",
  Паттон: "433",
  Подглядывающий: "8434",
  "Прощай, моя наложница": "7699",
  Ниночка: "8254",
  "Человек на все времена": "564",
  "Дух улья": "151720",
  Дзета: "8344",
  "Большие надежды": "8791",
  Шоа: "149936",
  Жижи: "7668",
  Цилиндр: "8325",
  "Красная река": "556",
  "Улыбки летней ночи": "94793",
  "Моя дорогая Клементина": "1150",
  "Игра на понижение": "501333",
  "Сверхъестественное  (сериал)": "178707",
  "Пятьдесят оттенков серого": "688832",
  Пробуждение: "2950",
  Сумерки: "401177",
  Оно: "453397",
  "В погоне за счастьем": "104938",
  "Форсаж 8": "894027",
  Обливион: "470185",
  "Жизнь Дэвида Гейла": "738",
  "Шерлок Холмс, Игра теней": "474953",
  Дивергент: "582101",
  Столкновение: "61297",
  "Охотники за привидениями": "425673",
  Дурак: "808639",
  "Мальчик в полосатой пижаме": "281251",
  "Трансформеры, Эпоха истребления": "651857",
  Заложница: "276376",
  "Джуманджи, Зов джунглей": "695609",
  "Форсаж 6": "594736",
  "Новый Человек-паук, Высокое напряжение": "602409",
  "Валериан и город тысячи планет": "689960",
  "Лучшее предложение": "681849",
  "Мальчишник в Вегасе": "426004",
  "Клиника  (сериал)": "251568",
  "Терминатор, Да придёт спаситель": "160932",
  "Хранители снов": "466581",
  "Трон, Наследие": "399959",
  Драйв: "276598",
  "Добро пожаловать в Zомбилэнд": "427122",
  "Железная хватка": "462553",
  Невозможное: "518037",
  Чтец: "325439",
  "Джон Уик 3": "1009536",
  "Стартрек, Бесконечность": "734349",
  Рэй: "5319",
  "Неадекватные люди": "542581",
  "Тихое место": "1044906",
  "Планета обезьян, Революция": "646674",
  Знамение: "102510",
  Стекло: "1044601",
  "Тренер Картер": "77531",
  "Мальчишник 2, Из Вегаса в Бангкок": "455338",
  "Рождественская история": "391755",
  Миньоны: "694051",
  "Перл-Харбор": "1957",
  "Ван Хельсинг": "3491",
  "Убойные каникулы": "485261",
  "Ангелы и Демоны": "257401",
  "Правила съема, Метод Хитча": "77454",
  "Дитя человеческое": "6803",
  "Укрощение строптивого": "63912",
  Возвращение: "47040",
  "Легенда о пианисте": "8335",
  "Вики Кристина Барселона": "278171",
  "Офис  (сериал)": "253245",
  "Волшебная страна": "4511",
  "Чудо на Гудзоне": "805650",
  "Жизнь в розовом цвете": "197134",
  "Поезд на Юму": "78240",
  "Тачки 3": "839646",
  "Дневник Бриджит Джонс": "621",
  "Кот в сапогах": "102146",
  "Цель номер один": "575332",
  Хищник: "6303",
  "Без лица": "4606",
  "Разум и чувства": "6148",
  "Опасные связи": "3810",
  Ворон: "12362",
  "Приключения Паддингтона": "463897",
  "Любой ценой": "726794",
  "Сокровище нации": "61333",
  "Хроники Нарнии, Принц Каспиан": "243596",
  "Двухсотлетний человек": "7640",
  "Великая красота": "677566",
  "Море внутри": "41830",
  "Правдивая ложь": "2219",
  "Тачки 2": "409013",
  Мадагаскар: "6006",
  "Плохие парни 2": "2928",
  Скорость: "1968",
  "Сокровище нации, Книга Тайн": "195408",
  Крик: "1807",
  Кэрри: "7459",
  "Выход через сувенирную лавку ": "496740",
  "Облачно, возможны осадки в виде фрикаделек": "276363",
  "Рассекая волны": "5264",
  "Война и мир": "38898",
  "Небесный замок Лапута": "1846",
  "Леди и бродяга": "8227",
  Большой: "4688",
  "Утомленные солнцем": "40848",
  "Шрэк Третий": "84020",
  "Ариэтти из страны лилипутов": "492366",
  "Перед закатом": "50598",
  "Лучший стрелок": "7360",
  Полтергейст: "7116",
  "На обочине": "61274",
  "За пригоршню долларов": "8455",
  Аэроплан: "3231",
  "Выход Дракона": "24743",
  "Самая обаятельная и привлекательная": "43602",
  "Мужики!..": "46745",
  "История любви": "5035",
  "Тони Эрдманн": "868556",
  Кинопроба: "41833",
  Скрытое: "77624",
  "Дневная красавица": "21334",
  Самурай: "80253",
  Видеодром: "8853",
  "Три цвета, Красный": "501",
  "Неоконченная пьеса для механического пианино": "46398",
  "Шербурские зонтики": "7718",
  Золушка: "45398",
  "Шепоты и крики": "66517",
  "Житие Брайана по Монти Пайтон": "485",
  "Бунтарь без причины": "1299",
  "Жить своей жизнью": "38298",
  "Большой побег": "392",
  "Когда деревья были большими": "44838",
  "Жестяной барабан": "28521",
  "Черный нарцисс": "12450",
  "Рай и ад": "8412",
  "Взлетная полоса": "160900",
  "Десять заповедей": "8271",
  Слово: "74507",
  "Джоси Уэйлс – человек вне закона": "8458",
  "Молодой Франкенштейн": "455",
  "Отныне и во веки веков": "563",
  Продюсеры: "8316",
  Зверинец: "6258",
  "До свидания, дети": "8402",
  "Глубокий сон": "423",
  "Потерянный уик-энд": "7674",
  "Красавица и чудовище": "8204",
  "Приговоренный к смерти бежал, или Дух веет, где хочет": "143103",
  "Короткая встреча": "7730",
  "Страх съедает душу": "57936",
  "Ночь и туман": "47231",
  "Том Джонс": "7667",
  "Из прошлого": "8283",
  "Время развлечений": "63911",
  "Добрые сердца и короны": "8250",
  "Управляющий Сансё": "86297",
  "Вечер в опере": "487",
  Наполеон: "7346",
  "Встреть меня в Сент-Луисе": "8329",
  "Джонни-гитара": "8462",
  "Янки Дудл Денди": "8327",
  "Лига справедливости": "424994",
  "Дневники вампира  (сериал)": "453191",
  "Kingsman, Секретная служба": "749540",
  "…А в душе я танцую": "84014",
  "Кредо убийцы": "690615",
  "Эффект бабочки": "5167",
  "Иллюзия обмана 2": "786958",
  "007, СПЕКТР": "678552",
  "Голодные игры, Сойка-пересмешница. Часть II": "663715",
  Одержимость: "23737",
  "Война миров Z": "261636",
  "Помни меня": "461782",
  Заклятие: "468994",
  Зодиак: "102838",
  "Белоснежка и охотник": "568550",
  "Элизиум, Рай не на Земле": "487409",
  Гаттака: "5012",
  Терминал: "6877",
  Люси: "760326",
  "Джонни Д.": "400599",
  "Миссия невыполнима, Протокол Фантом": "472362",
  "Тайная жизнь домашних животных": "743088",
  "Черепашки-ниндзя": "461206",
  Гнев: "6889",
  "Ип Ман": "409507",
  Солт: "447284",
  "Малыш на драйве": "902939",
  "Робин Гуд": "278177",
  "Отпуск по обмену": "104927",
  "Суини Тодд, демон-парикмахер с Флит-стрит": "81845",
  Послезавтра: "2053",
  "Восстание планеты обезьян": "463738",
  "Мир Юрского периода 2": "924311",
  "С широко закрытыми глазами": "3608",
  "Древо жизни": "256408",
  "Разлом Сан-Андреас": "652692",
  "Черный ястреб": "612",
  "Типа крутые легавые": "93377",
  "Холодная гора": "1942",
  РЭД: "450237",
  "Разрисованная вуаль": "102201",
  "Пила, Игра на выживание": "64187",
  Дракула: "1727",
  "Мачо и ботан 2": "672899",
  "Храбрая сердцем": "409118",
  Дамбо: "841636",
  "Семейка Крудс": "198116",
  "Король Лев": "1005878",
  "Капитан Филлипс": "484438",
  Александр: "4721",
  Лев: "864138",
  Отрочество: "391729",
  "Бесподобный мистер Фокс": "86621",
  "Квант милосердия": "258475",
  "Мадагаскар 3": "422792",
  "Воздушный маршал": "606826",
  Скала: "2333",
  Мегамозг: "405608",
  "Сын Саула": "869452",
  "Жизнь Адель": "669902",
  "Тоня против всех": "1008385",
  "Легенды осени": "8827",
  Ёлки: "493768",
  "Реальные упыри": "818981",
  "Ёлки 2": "573817",
  "Лучше не бывает": "4199",
  Анастасия: "2513",
  "Маленькая мисс Счастье": "164089",
  "Индиана Джонс и Королевство хрустального черепа": "38904",
  Мамочка: "839219",
  "Звездный десант": "6025",
  "День выборов": "309408",
  Джуманджи: "8161",
  "Тонкая красная линия": "3983",
  Фрида: "676",
  "Почти знаменит": "454",
  "Лжец, лжец": "1721",
  "Простая история": "442",
  "Перед рассветом": "18368",
  Пианистка: "784",
  "Смертельное оружие": "15061",
  "Аполлон 13": "2217",
  "Убить Билла 2": "47015",
  "Шёпот сердца": "32714",
  "Роковое влечение": "8128",
  "Быть Джоном Малковичем": "462",
  "Перекресток Миллера": "523",
  "Сало, или 120 дней Содома": "39864",
  Клаус: "957887",
  "Пробуждение жизни": "873",
  "Академия Рашмор": "3586",
  "Великолепная семерка": "8207",
  "Отвращение": "8427",
  "Зловещие мертвецы 2": "2918",
  "Свой среди чужих, чужой среди своих": "44062",
  "Иллюзионист": "262765",
  "Завтра была война": "45244",
  "Приходи на меня посмотреть": "40955",
  "Нью-Йорк, Нью-Йорк": "77177",
  "Кояанискатси ": "7328",
  "Кукушка": "7967",
  "Игрок": "570",
  "Тихий Дон": "42248",
  "Язык нежности": "2561",
  "4 месяца, 3 недели и 2 дня": "318550",
  "101 далматинец": "8129",
  "Чудо на 34-й улице": "1317",
  "Южный Парк, Большой, длинный, необрезанный": "2407",
  "Мужской стриптиз": "7732",
  "Тайны и ложь": "6775",
  "Цирк": "2119",
  "Три тополя на Плющихе": "42308",
  "Пять вечеров": "43373",
  "Бэйб, Четвероногий малыш": "3829",
  "Девичий источник": "15188",
  "Поле чудес": "8420",
  "Женщина в песках": "81421",
  "Дом, в котором я живу": "44270",
  "The Beatles, Желтая подводная лодка": "16022",
  "Дневник сельского священника": "94546",
  "Причастие": "15183",
  "Час волка": "15178",
  "Евангелие от Матфея": "39876",
  "Война и мир, Андрей Болконский": "45817",
  "Веселые ребята": "45757",
  "Замужество Марии Браун": "54874",
  "Фауст": "72556",
  "39 ступеней": "529",
  "Небесный тихоход": "46376",
  "Тонкая голубая линия": "56638",
  "Маленький большой человек": "2826",
  "Пепел и алмаз": "90209",
  "Сорок первый": "43922",
  "Женщина не в себе": "1633",
  "Наудачу, Бальтазар": "54310",
  "Кес": "58778",
  "Скрипач на крыше": "8274",
  "Забытые": "120916",
  "В укромном месте": "8296",
  "Стачка": "43965",
  "Сильная жара": "8293",
  "Каникулы господина Юло": "5771",
  "Нанук с Севера": "79740",
  "Неприятности в раю": "8255",
  "Мадам де…": "25598",
  "Забойщик овец": "191394",
  "Театральный фургон": "8332",
  "Мир Апу": "8479",
  "Аквамен": "470178",
};

const orderedMovieList = {};
Object.keys(unorderedMovieList)
  .sort()
  .forEach(function (key) {
    orderedMovieList[key] = unorderedMovieList[key];
  });
// Create list element for each movie and add it to the page
for (const property in orderedMovieList) {
  let listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.classList.add("movie-item");
  let text = document.createTextNode(property);
  listItem.appendChild(text);
  document.querySelector("ul").appendChild(listItem);
  // console.log(`${property} ${movieList[property]}`);
  // https"://picsum.photos/200/300
  let iframe = `<img src="https://picsum.photos/700/500">`;
  document.querySelector(".movieContainer").innerHTML = iframe;
}

// Iterate through movieList, create iframe and assign it's src address of choosed movie
let ul = document.querySelector("ul");
let linkList = [...document.querySelectorAll("li")];
for (let i = 0; i < linkList.length; i++) {
  linkList[i].addEventListener("click", function () {
    let title = linkList[i].textContent;
    let id = orderedMovieList[title];
    let url = `https://vid${Date.now()}.vb17110frankfoley.pw/api/idkp?kp_id=${id}`;
    window.location.replace(url);
    // let iframe = `<iframe width="700" height="500" src="${url}" frameborder="0" allowfullscreen=""></iframe>`;
    // document.querySelector(".movieContainer").innerHTML = iframe;
    let header = document.createElement("h1");
    let backBtn = document.createElement("i");
    backBtn.classList.add("backBtn");
    let text = document.createTextNode(title);
    header.appendChild(text);
    let list = document.querySelector(".list");
    let searchBar = document.getElementById("search-item");
    list.appendChild(header);
    list.appendChild(backBtn);
    ul.style.display = "none";
    searchBar.style.display = "none";
    backBtn.addEventListener("click", function () {
      ul.style.display = "block";
      searchBar.style.display = "block";
      list.removeChild(header);
      list.removeChild(backBtn);
      // document.querySelector(".movieContainer").innerHTML = "";
    });
  });
}

// search input
(function () {
  // target search box
  const search = document.getElementById("search-item");
  search.addEventListener("keyup", function () {
    let value = search.value.toLowerCase().trim();
    // console.log(value);
    const items = document.querySelectorAll(".movie-item");

    items.forEach(function (item) {
      let type = item.textContent;

      // console.log(type);
      // if(type.includes(value)) {
      //     item.style.display = "block";
      // } else {
      //     item.style.display = "none";
      // }

      let length = value.length;
      let match = type.slice(0, length).toLowerCase();

      // console.log(value);
      // console.log(match);

      if (value === match || type.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
