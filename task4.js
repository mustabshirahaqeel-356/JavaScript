
// COURSE LIST

const courses = [
    { id: 1, title: "Web Development", price: 1500 },
    { id: 2, title: "Graphic Design", price: 0 },
    { id: 3, title: "JavaScript Basics", price: 2500 },
    { id: 4, title: "Python Programming", price: 0 },
    { id: 5, title: "Database Management", price: 1800 },
    { id: 6, title: "C Programming", price: 1200 }
];

const userComment = "These courses are useful for beginners.";

// HTML ELEMENTS

const list = document.getElementById("list");
const search = document.getElementById("search");
const freeBtn = document.getElementById("freeBtn");


// PART A: DEBUG THE CODE

// Fix 1: Use filter() instead of forEach()
const cheap = courses.filter(c => c.price < 2000);

// Fix 2: Use === instead of =
const free = courses.filter(c => c.price === 0);

const one = courses.find(c => c.id === 3);

// Fix 3: find() returns one object, not an array
list.textContent = one ? one.title : "Course not found";

// Fix 4: Copy the array before sorting
const sorted = [...courses].sort((a, b) => a.price - b.price);

// Fix 5: Call toLowerCase() using parentheses
const names = courses.map(c => c.title.toLowerCase());

// Fix 6: Use textContent to safely display user input
const comment = document.createElement("p");
comment.textContent = userComment;
list.appendChild(comment);


// PART B: SEARCH AND FREE COURSES FILTER

let searchText = "";
let freeOnly = false;


// Function to display courses

function render(items) {
    list.innerHTML = "";

    if (items.length === 0) {
        list.textContent = "No courses found.";
        return;
    }

    items.forEach(course => {
        const courseCard = document.createElement("p");

        courseCard.textContent =
            course.title + " - PKR " + course.price;

        list.appendChild(courseCard);
    });
}


// Function to filter courses

function update() {
    const filteredCourses = courses.filter(course => {

        const matchesSearch = course.title
            .toLowerCase()
            .includes(searchText.toLowerCase());

        const matchesFree = !freeOnly || course.price === 0;

        return matchesSearch && matchesFree;
    });

    render(filteredCourses);
}


// Search event

search.addEventListener("input", function() {
    searchText = search.value;
    update();
});


// Free courses button event

freeBtn.addEventListener("click", function() {
    freeOnly = !freeOnly;

    freeBtn.textContent = freeOnly
        ? "Show All Courses"
        : "Free Courses Only";

    update();
});


// Display all courses initially

update();


// CHECK PART A RESULTS IN CONSOLE

console.log("Cheap courses:", cheap);
console.log("Free courses:", free);
console.log("Course with ID 3:", one);
console.log("Sorted courses:", sorted);
console.log("Course names:", names);
