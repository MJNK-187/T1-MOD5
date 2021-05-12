const user_title = document.querySelector('#user-title');
const user_detail_info = document.querySelector('#user-details');
const user_title2 = document.querySelector('#user-title2');
const user_detail_info2 = document.querySelector('#user-details2');
let user_details = {};
let user_details2 = {};


window.onload = function() 
{
    getUserDetails(getURLParameter('user_id'));
    getUserDetails2(getURLParameter('user_id'));
}


async function getUserDetails(id)
{
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(response => response.json())
            .then(data => {
                user_details = data;
                showUserDetails();
            })
            .catch(error => console.log(error));
}
async function getUserDetails2(id)
{
    await fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments/')
            .then(response2 => response2.json())
            .then(data => {
                user_details2 = data;
                showUserDetails2();
                console.log(data);
            })
            .catch(error => console.log(error));
}
function showUserDetails2()
{
    for (var i=0; i < user_details2.length ;i++) {
    var div = document.createElement("div")
    user_title2.innerHTML += `
    ${user_details2[i].name}<br/>(${user_details2[i].email}) <br/>
    <p>${user_details2[i].body}</p><hr></hr>
    `;

    }
}
function showUserDetails()
{
    user_title.innerHTML = `
    (${user_details.userId}) ${user_details.title}
    `;

    user_detail_info.innerHTML = `
        <p>${user_details.body}</p>
    `;
}


function getURLParameter(name) 
{
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

