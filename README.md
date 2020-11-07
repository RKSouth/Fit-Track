# Fit Track (Fitness Tracker)
![Fit-Tracker](/Assets/FinishedProduct.png)

### A simple app to track the name, type, weight, sets, reps, and duration of exercise log multiple exercises in a workout on a given day.

## Table of Contents
* [Technologies Used](Technologies_Used)
* [Deployed Site](Deployed)
* [Features](Features)
* [Usage](Usage)
* [Author](Author)
* [Credits](Credits)
* [License](License)

## Technologies_Used
* HTML 
* CSS
* Semantic UI Framework
* node.js
* express.js
* MongoDb
* heroku
* charts.js
* Mongoose
<!-- * handlebars.js -->

## Deployed Site
[Fit-Track](https://glacial-inlet-65172.herokuapp.com/)

## Features 


__1. A Way to Select Your Workout__
 
_What?_

A drop down menu that you allows to go through the process of making a selection of your workout (versus an entry).

![wkoutSelect](/Assets/wkoSelect.png)

_How?_

![wkoutSelect](/Assets/wkoSelectCode.png)

__2. A Database for storing your workouts__

_What?_

In order to store data for referencing throughout the week (a 7 day period), we need a simple and accessible database to draw from. Because we want something simple, we chose to use Mongo DB instead of Mysql. In order to easily call MongoDB and build into our code (versus writing a schema outside of the code), we used [Mongoose](https://mongoosejs.com/) -which is essentially [sequelize](https://mongoosejs.com/) for Mongo DB; a program that allows you to simply build a database instead of your javascript instead of calling to it. 

_How?_

We start off our call in the server.js file (which I had to create for this assignment)
![gettheDB](/Assets/server.js/png)

__3. A Way to View Your workouts__

_What?_
[Charts.js](https://www.chartjs.org/) allows us to build simple and beautiful charts without too much effort or too much customization.


![Charts](/Assets/ChartsDisplay.png)

_How?_

Below is an example of the donut chart code- it's pretty easy to take the examples from the [documentation](https://www.chartjs.org/docs/latest/charts/doughnut.html) and build a clean beautiful chart. Although this data was provided for me in this assignment, I felt it was an important and interesting feature worth discussion.
![DonutChart](/Assets/DonutChartCode.png)

__4. A Heroku deployed site__

_What?_

In order to deploy our code we must use a service like heroku, that allows for server side and front end code. Heroku is great because it offers a free service that allows you to use databases in the back end, a thing not offered by github pages. In order to use MongoDB with heroku a set of special steps must be followed (that are different from using either mysql or no database).

_How?_
  

## Usage
### How do you use this project? This is meant for anyone looking for a more structured approach to exercise and working out. If you are looking to keep an easy to manage website 
 
## Author 
Rachael Kelm-Southworth

* [linkedin](https://www.linkedin.com/in/rachael-kelm-southworth-87a3831b3) 

* [Portfolio](https://rksouth.github.io/Portfolio/ )

* [github](https://github.com/RKSouth/)

 ## Credits

I would like to thank Kerwin, Manuel, Roger, Jerome and all my classmates for helping me understand this subject matter and anyone that contributed to make the base code.

## License
[MIT](https://choosealicense.com/licenses/mit/)



