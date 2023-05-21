'use strict';

function showCurrUser() {
    $.get(`/api/auth/`, function (data) {
        let userTbody =
            "<tr><td>" + data.id + "</td>" +
            "<td>" + data.firstName + "</td>" +
            "<td>" + data.lastname + "</td>" +
            "<td>" + data.age + "</td>" +
            "<td>" + data.email + "</td>" +
            "<td>" + roleToString(data.roles) + "</td></tr>";
        $("#test_user_one").html(userTbody);
    })
}

function currEmail() {
    $.get(`/api/auth/`, function (data) {
        let authUserEmail = data.email;
        $("#currentUserEmail").html(authUserEmail);
    })
}

function currRoles() {
    $.get(`/api/auth/`, function (data) {

        let authUserRoles = roleToString(data.roles);
        $("#currentUserRoles").html(authUserRoles);
    })
}
function roleToString(rolesUser) {
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
    showCurrUser();
    currEmail();
    currRoles();
})
