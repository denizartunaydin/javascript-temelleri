const name = "Deniz Artun Aydın";
const departman = "Bilişim";
const salary = 4000;

// const a = "İsim: " + name + "\n" + "Departman: " + departman + "\n" + "Maaş :" + salary;

// `` karakterini alt gr + 2 * noktalı virgül ile oluşuyor
// const a = `İsim: ${name}\nDeparman: ${departman}\nMaaş: ${salary}`;


// const html = "<ul>" + 
//              "<li>" + name + "</li>" + 
//              "<li>" + departman + "</li>" + 
//              "<li>" + salary + "</li>" + 
//              "</ul>";

function a()
{
    return "sdfsdf";
}

const html = `
            <ul>
            <li>${name}</li>
            <li>${departman}</li>
            <li>${salary}</li>
            <li>${10 / 4}</li> 
            <li>${a()}</li> 
            </ul>
            `;

document.body.innerHTML = html;