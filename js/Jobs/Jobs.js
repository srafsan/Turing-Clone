let i =0
let placeholder = ""
const text = "NodeJs Python Golang..."
const speed = 120

function type(){
    placeholder += text.charAt(i)
    document.getElementById('search').setAttribute("placeholder", placeholder);
    i++;
    setTimeout(type, speed)

}

type()