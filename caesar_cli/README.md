# Caesar cipher CLI tool

## Загрузка и установка зависимостей

Скопировать репозиторий:
`git clone https://github.com/akurlovich/basic_node_JS.git`

Перейти в папку с приложением
`cd caesar_cli`

Установить зависимости:
`npm i`

## Использование

Приложение запускается с помощью node.js `node app`, принимает следующие опции:

* **-s, --shift** - сдвиг ключа. Обязательный параметр!!!
* **-a, --action** - действие шифровка/дешифровка. Значения: **encode/decode**. Обязательный параметр!!!
* **-i, --input** - файл входных данных. 
* **-o, --output** - файл выходных данных. 

Для завершения работы приложения в режиме работы со строкой, необходимо нажать **ctrl + c** или для MacOS **control + c**

### Примеры 

```
node app -s 2 -a decode 
hello world
fcjjm umpjb

```

```
node app --shift 2 --action encode --input input.txt --output output.txt

input.txt >
Hello World!!!
Привет мир)))
1234567890

output.txt >
Xkevqta qt fgcvj.
jgnnq
Привет мир!
```