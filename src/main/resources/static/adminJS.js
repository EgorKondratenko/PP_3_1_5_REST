'use strict';
function currEmail() {
    $.get(`/api/auth/`, function (data) {
        let authUserEmail = data.email;
        $("#currentUserEmail").html(authUserEmail);
    })
}

function currRoles() {
    $.get(`/api/auth/`, function (data) {

        let authUserRoles = getRolesToString(data.roles);
        $("#currentUserRoles").html(authUserRoles);
    })
}
//
// const tbody = $('#test_user');
// getTableUser()
// function getTableUser() {
//     tbody.empty()
//
//     fetch("http://localhost:8080/api/users")
//
//         .then(res => res.json())
//         .then(js => {
//             js.forEach(item => {
//                 const users = `$(
//                     <tr>
//                         <td class="pt-3" id="userID">${item.id}</td>
//                         <td class="pt-3" >${item.firstName}</td>
//                         <td class="pt-3" >${item.lastname}</td>
//                         <td class="pt-3" >${item.age}</td>
//                         <td class="pt-3" >${item.email}</td>
//                         <td class="pt-3" >${getRolesToString(item.roles)}</td>
//                         <td>
//                             <button type="button" class="btn btn-info" data-toggle="modal" data-target="#edit" onclick="editModal(${item.id})">
//                             Edit
//                             </button>
//                         </td>
//                         <td>
//                             <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete" onclick="deleteModal(${item.id})">
//                             Delete
//                             </button>
//                         </td>
//                     </tr>)`;
//                 tbody.append(users)
//             })
//         })
// }
//
// function getRolesToString(rolesUser) {
//     let textRole="";
//     if (rolesUser.some(role => role.name === "ROLE_ADMIN")) {
//         textRole = textRole + "ADMIN "
//     }
//     if (rolesUser.some(role => role.name === "ROLE_USER")) {
//         textRole = textRole + "USER "
//     }
//     return textRole
// }
//
// let formEdit = document.forms["formEdit"];
// editUser();
//
// async function editModal(id) {
//     const modal = new bootstrap.Modal(document.querySelector('#edit'));
//     await openAndFillInTheModal(formEdit, modal, id);
// }
//
// function editUser() {
//     formEdit.addEventListener("submit", ev => {
//         ev.preventDefault();
//         let roles = [];
//         for (let i = 0; i < formEdit.roles.options.length; i++) {
//             if (formEdit.roles.options[i].selected) roles.push({
//                 id: formEdit.roles.options[i].value,
//                 role: "ROLE_" + formEdit.roles.options[i].text
//             });
//         }
//         fetch("http://localhost:8080/api/users/" + formEdit.id.value, {
//             method: 'PATCH',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 id: formEdit.id.value,
//                 firstName: formEdit.firstName.value,
//                 lastname: formEdit.lastname.value,
//                 age: formEdit.age.value,
//                 email: formEdit.email.value,
//                 password: formEdit.password.value,
//                 roles: roles
//             })
//         }).then(() => {
//             $('#closeEdit').click();
//             getTableUser()
//         });
//     });
// }
//
// let deleteForm = document.forms["formDelete"]
//
// async function deleteModal(id) {
//     const modal = new bootstrap.Modal(document.querySelector('#delete'));
//     await openAndFillInTheModal(deleteForm, modal, id);
//     switch (deleteForm.roles.value) {
//         case '1':
//             deleteForm.roles.value = 'ADMIN';
//             break;
//         case '2':
//             deleteForm.roles.value = 'USER';
//             break;
//     }
//     deleteUser()
// }
//
// function deleteUser() {
//     deleteForm.addEventListener("submit", ev => {
//         ev.preventDefault();
//         fetch("http://localhost:8080/api/users/" + deleteForm.id.value, {
//             method: 'DELETE',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then(() => {
//             $('#closeDelete').click();
//             getTableUser();
//         });
//     });
// }
//
// async function getOneUser(id) {
//     let url = "http://localhost:8080/api/users/" + id;
//     let response = await fetch(url);
//     return await response.json();
// }
//
// async function openAndFillInTheModal(form, modal, id) {
//     modal.show();
//     let user = await getOneUser(id);
//     form.id.value = user.id;
//     form.firstName.value = user.firstName;
//     form.lastname.value = user.lastname;
//     form.age.value = user.age;
//     form.email.value = user.email;
//     form.roles.value = user.roles;
// }
//
// let form = document.forms["create"];
// createNewUser()
// function createNewUser() {
//     form.addEventListener("submit", ev => {
//         ev.preventDefault();
//         let roles = [];
//         for (let i = 0; i < form.roles.options.length; i++) {
//             if (form.roles.options[i].selected) roles.push({
//                 id: form.roles.options[i].value,
//                 role: "ROLE_" + form.roles.options[i].text
//             });
//         }
//
//         fetch("http://localhost:8080/api/users", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 firstName: form.firstName.value,
//                 lastname: form.lastname.value,
//                 age: form.age.value,
//                 email: form.email.value,
//                 password: form.password.value,
//                 roles: roles
//             })
//         }).then(() => {
//             form.reset();
//             $('#userTable').click();
//             getTableUser()
//         });
//     });
// }
//
// $(document).ready(function () {
//     currEmail();
//     currRoles();
// })

// function currEmail() {
//     $.get(/api/auth/, function (data) {
//         let authUserEmail = data.email;
//         $("#currentUserEmail").html(authUserEmail);
//     })
// }
//
// function currRoles() {
//     $.get(/api/auth/, function (data) {
//
//         let authUserRoles = getRolesToString(data.roles);
//         $("#currentUserRoles").html(authUserRoles);
//     })
// }
function getRolesToString(rolesUser) {
    let textRole="";
    if (rolesUser.some(role => role.name === "ROLE_ADMIN")) {
        textRole = textRole + "ADMIN "
    }
    if (rolesUser.some(role => role.name === "ROLE_USER")) {
        textRole = textRole + "USER "
    }
    return textRole
}

$(document).ready(function () {
    //   showCurrUser();
    currEmail();
    currRoles();
})
const tbody = $('#test_user');
getTableUser()
function getTableUser() {
    tbody.empty()

    fetch("http://localhost:8080/api/users")

        .then(res => res.json())
        .then(js => {
            js.forEach(item => {
                const users = `$(
                <tr>
                    <td class="pt-3" id="userID">${item.id}</td>
                    <td class="pt-3" >${item.firstName}</td>
                    <td class="pt-3" >${item.lastname}</td>
                    <td class="pt-3" >${item.age}</td>
                    <td class="pt-3" >${item.email}</td>
                    <td class="pt-3" >${getRolesToString(item.roles)}</td>
                    <td>
                        <button type="button" class="btn btn-info" data-toggle="modal" data-target="#edit" onclick="editModal(${item.id})">
                        Edit
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#delete" onclick="deleteModal(${item.id})">
                        Delete
                        </button>
                    </td>
                </tr>)`;
                tbody.append(users)
            })
        })
}

let formEdit = document.forms["formEdit"];
editUser();

async function editModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#edit'));
    await openAndFillInTheModal(formEdit, modal, id);
}

function editUser() {
    formEdit.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles = [];
        for (let i = 0; i < formEdit.roles.options.length; i++) {
            if (formEdit.roles.options[i].selected) roles.push({
                id: formEdit.roles.options[i].value,
                role: "ROLE_" + formEdit.roles.options[i].text
            });
        }
        fetch("http://localhost:8080/api/users/" + formEdit.id.value, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: formEdit.id.value,
                firstName: formEdit.firstName.value,
                lastname: formEdit.lastname.value,
                age: formEdit.age.value,
                email: formEdit.email.value,
                password: formEdit.password.value,
                roles: roles
            })
        }).then(() => {
            $('#closeEdit').click();
            getTableUser()
        });
    });
}

let deleteForm = document.forms["formDelete"]

async function deleteModal(id) {
    const modal = new bootstrap.Modal(document.querySelector('#delete'));
    await openAndFillInTheModal(deleteForm, modal, id);
    switch (deleteForm.roles.value) {
        case '1':
            deleteForm.roles.value = 'ADMIN';
            break;
        case '2':
            deleteForm.roles.value = 'USER';
            break;
    }
    deleteUser()
}

function deleteUser() {
    deleteForm.addEventListener("submit", ev => {
        ev.preventDefault();
        fetch("http://localhost:8080/api/users/" + deleteForm.id.value, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            $('#closeDelete').click();
            getTableUser();
        });
    });
}

async function getOneUser(id) {
    let url = "http://localhost:8080/api/users/" + id;
    let response = await fetch(url);
    return await response.json();
}

async function openAndFillInTheModal(form, modal, id) {
    modal.show();
    let user = await getOneUser(id);
    form.id.value = user.id;
    form.firstName.value = user.firstName;
    form.lastname.value = user.lastname;
    form.age.value = user.age;
    form.email.value = user.email;
    form.roles.value = user.roles;
}

let form = document.forms["create"];
createNewUser()
function createNewUser() {
    form.addEventListener("submit", ev => {
        ev.preventDefault();
        let roles = [];
        for (let i = 0; i < form.roles.options.length; i++) {
            if (form.roles.options[i].selected) roles.push({
                id: form.roles.options[i].value,
                role: "ROLE_" + form.roles.options[i].text
            });
        }

        fetch("http://localhost:8080/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: form.firstName.value,
                lastname: form.lastname.value,
                age: form.age.value,
                email: form.email.value,
                password: form.password.value,
                roles: roles
            })
        }).then(() => {
            form.reset();
            $('#userTable').click();
            getTableUser()
        });
    });
}