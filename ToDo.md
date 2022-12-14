# To-Do List / Requirements

## General Requirements

[ ] Display a list of students

[ ] Must be sortable by firstname, lastname, current year, or house

[ ] Must be filterable by house

[ ] Must provide a popup

[ ] include all information from student (including house crest)

[ ] Display colors form the house

### Expansion

[ ] Administrator must be able to expel individual students

[ ] Administrator must be able to see a list of all expelled students

[ ] Two students from each house can be selected as “Prefects”, which is meant to show in their popup

### Shift in political view

[ ] In addition to prefects, students can now be appointed to join inquisitorial squad

[ ] Implement blood profiling by adding blood status to each student. (Create an algorithm to make it
happen)

### Start Hacking

[ ] Inject yourself as a student

[ ] Must be able to select house

[ ] Must not be able to be expelled by administrator

[ ] Break inquisitorial squad by removing students, shortly after administrator has added them.

[ ] Mess up the pure blood algorithm so it is random whether a student is shown as pure-, half, or muggle-blood

### Requirements on specific parts

### The data

[ ] List of students must be read from “https://petlatkea.dk/2021/hogwarts/students.json”
[ ] Download images from assignment description "https://petlatkea.dk/2021/hogwarts/images.zip"

### The list

[ ] Display a list of students that must be searchable, filterable, and sortable

### Sorting

[ ] Must be able to sort on at least first name and last name

[ ] Must be able to sort groups of students in the same house, or with certain responsibilities

### Filtering

[ ] Filter list so only students from one house can be seen

[ ] Filter through responsibilities or other shared properties

### Searching

[ ] Must be able to search for specific student by first name or last name. `

[ ] The search field that immediately limits the listed students to those matching the search criteria.

### bout page

[ ] Number of students in each house

[ ] Total number of students (not expelled)

[ ] Number of students expelled

[ ] Number of students currently displayed

### Expelling students

[ ] The user must be able to expel a student

[ ] Expelling a student could be done either from the main screen or the popup

[ ] Expelling should remove the student from a list of students and add it to a list of expelled
students
[ ] Once expelled a student cannot return to the main list

No changes will be saved through browser refresh, and it is okay

### Prefects

[ ] Only two students from each house can be selected prefects. Usually a boy and a girl

[ ] The user must be able to make any student a prefect, and also revoke the perfect-status at any time.

[ ] There must be a system that prevents more than two prefects from each house

[ ] Make the user choose what student he wants to exclude from being a prefect

[ ] After that you can choose to allow 2 people of the same gender

### Blood-status

[ ] The system must calculate blood-status for each student

[ ] Must determine if the student is from a pure wizarding family, half-wizard, half-muggle family, or just plain muggle

[ ] use the list “https://petlatkea.dk/2021/hogwarts/families.json”

[ ] Note that some pure-bloods have mixed with muggles, and have become half-bloods

[ ] Decide if a student that shows at both lists should be half blood or pure blood

### Inquisitorial Squad

[ ] The user must be able to appoint students to the inquisitorial squad, and remove them again.

[ ] Only pure-bloods or students from slytherin can be added to inquisitorial squad list

### Hacking

[ ] Create a function called hackTheSystem() that activates hacking when called.

[ ] Function can be implemented by secret button or secret keystroke

[ ] Must be possible to activate through console

[ ] Document in the report how the program can be hacked

[ ] Hacking must result in at least three things happening:

[ ] You will be injected with your own name into the list of students. You should remain in the list
until scroll happens.

[ ] If the user tries to expel you, there should be a warning “You cannot be expelled”

[ ] The blood-status is no longer trustworthy.

[ ] Former pure-bloods will get random completely random blood-status

[ ] Half-bloods and muggle-bloods will be listed as pure-blood.

[ ] If you can modify the former pure-bloods in every redisplay (sort or filter) it will be better

[ ] Adding a student to the inquisitorial squad will only work for a limited time, before the student is automatically removed again. Preferably so the user notices that the student gets removed

[ ] The system should only be hacked once, so keep track if it has been hacked

[ ] The blood status must be correct until the hackTheSystem() function is called.

### Visual Design

[ ] Add animations to when expelling a student

[ ] Add visual feedback for all actions the user can take

[ ] When the user tries and remove you, be creative and create hacking visuals stopping them

[ ] Check licenses for graphics you use on the page

### Process and code design

[ ] Divide the code into sprints

[ ] Displaying the list of students, with sorting, filtering, searching and details popup

[ ] Expelling and prefects

[ ] Blood-status and inquisitorial squad

[ ] Hacking

[ ] Draw an activity diagram for each sprint

[ ] Get someone else to try your program

### Documentation

The assignment must be handed in as a report

[ ] Wireframe for the visual design - include dialog boxes and modals

[ ] An overview of the various components of the application

[ ] A list of features / user stories (e.g.: sort by first name, sort by last name, etc.)

[ ] A can/can’t list of each component or activity, with a note on whether you know how to do it or not
(at the beginning of the design)
[ ] Pseudocode or activity diagrams for algorithms

[ ] Expelling(incl check for not-expelling you)

[ ] prefects

[ ] blood-status (Original decision-algorithm)

[ ] hackTheSystem function and additional hacking-features

[ ] Complete activity diagram for all the functions, which parameters they receive, and values they
return
[ ] A list of Student-object properties, e.g. firstName, lastName, imageName and so on. Could be a
screengrab of the Student object

Collect all documentation in one pdf a4

### Frontpage

[ ] Name

[ ] Screenshot of the product

[ ] A link to the final solution (written out, as well as clickable)

[ ] a link to your github repository (written out, as well as clickable)
