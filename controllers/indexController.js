const messages = [
    { username: "bob", message: "How's everyone doing?", date: "2025-06-02" },
    { username: "charlie", message: "Just joined this board.", date: "2025-06-03" },
    { username: "frank", message: "Can't wait for the weekend.", date: "2025-06-06" },
    { username: "george", message: "This is my first post.", date: "2025-06-07" },
    { username: "hannah", message: "Love this community!", date: "2025-06-08" },
    { username: "ian", message: "Working on a new project.", date: "2025-06-09" },
    { username: "julia", message: "Good morning everyone.", date: "2025-06-10" }
];

function indexParse(req,res){
    res.render('index' , { title: 'Mini Message Board', messages: messages });
}

module.exports = { indexParse , messages };
