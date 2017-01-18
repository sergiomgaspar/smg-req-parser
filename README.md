# Request Header Parser Microservice

This api was created for the FreeCodeCamp exercice "Request Header Parser Microservice"

* [FreeCodeCamp] - Link to the exercice
* [Heroku] - Online deployed version

### API description

The Request Header Parser API must return the IP Address, Language code and Software description present in the header of the HTTP request.

  - **Use-case 1:** API returns the IP address, language and operating system for the requester browser.

## Example (usage)
Use the URL below to get the date in the desired format
```sh
https://smg-req-parser.herokuapp.com/
```
## Example (result)
Below is shown the result returned from the URL above.
```sh
{"ipaddress": "75.748.86.91",
  "language": "pt-PT",
  "software": "OS: Windows 10.0 || Browser: Chrome || Platform: Microsoft Windows"}
```
***special kudos** if you recognize the address*
## Local Installation

You'll need to have the latest verison of node.js installed. Either use your OS's package manager or follow the installation instructions on the [official website](http://nodejs.org).

Next, [install git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) if it is not already installed. To clone this repository to your local machine, open a command line interface and navigate to your projects directory. Then type

`$ git clone https://github.com/sergiomgaspar/smg-req-parser.git`

Move to the `smg-req-parser` subdirectory and type `npm install`. This installs all of the API dependencies.

Finally, type `npm start` to start the application. If all goes well, it will be available at `http://localhost:3000`.


## Technologies used
This is a very small example of an API created in NodeJS using the Express Framework.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

[FreeCodeCamp]: <https://www.freecodecamp.com/challenges/request-header-parser-microservice>
[Heroku]: <https://smg-req-parser.herokuapp.com/>