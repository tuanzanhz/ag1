angular.module("app", []);

angular.module("app").controller("MainController", function (){
    var vm = this;
    vm.title = "Learn Angular by example";
    vm.searchInput = "";
    vm.shows = [
        {
            title: "Đôi mắt có lửa",
            author: "Nguyễn Hùng Sơn",
            favorite: true
        },
        {
            title: "Life of P1",
            author: "Davan",
            favorite: false
        },
        {
            title: "Learn Angular by example",
            author: "Fpt - Aptech",
            favorite: true
        },
        {
            title: "Họ nhà trai",
            author: "Nguyễn Anh Tú",
            favorite: true
        },
        {
        title: "Học code today",
        author: "author",
        favorite: true
        },

    ];
vm.orders = [
    {
        id: 1,
        title: "Author Ascending",
        key: "author",
        reverse: false
    },
    {
        id: 2,
        title: "Author Descending",
        key: "author",
        reverse: false
    },
    {
        id: 3,
        title: "Title Ascending",
        key: "title",
        reverse: false
    },
    {
        id: 4,
        title: "Title Ascending",
        key: "title",
        reverse: true
    }
];
vm.order = vm.orders[0];
vm.new = {};
vm.addShow = function () {
    vm.shows.push(vm.new);
    vm.new={};
};
});