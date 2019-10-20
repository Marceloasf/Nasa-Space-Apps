var buildModal = function () {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems);
    });

    $('.modal1').modal();
}

buildModal();