(function () {

    $('.main-border-container').css('width', function () {
        return (this.children[0].offsetWidth * this.children.length) + 10;
    });

    var windowWidht = $('.overflow-border')[0].offsetWidth;
    var mainBorderContainerChildrenWidth = $('.main-border-container')[0].children[0].offsetWidth;
    var left = 0;
    var count = 0;
    var countMax = $('.main-border-container').children.length;
    var inputsContainer = $('.inputs-container');
    var inputsContainerChildren = $('.inputs-container').children();
    var delay = 3000;
    var time;

    function timer() {
        time = setInterval(function () {
            ++count;
            $.each(inputsContainerChildren, function (index, elem) {
                elem.classList.remove('active');
            });
            if (count > countMax) {
                count = 0;
                left = 0;
                $('.main-border-container')[0].style.left = left + 'px';
                inputsContainerChildren.get(count).classList.add('active');
            } else {
                left -= mainBorderContainerChildrenWidth;
                $('.main-border-container')[0].style.left = left + 'px';
                inputsContainerChildren.get(count).classList.add('active');
            }
        }, delay);
    }

    timer();

    $('#left').on('click', function (e) {
        clearInterval(time);
        --count;
        $.each(inputsContainerChildren, function (index, elem) {
            elem.classList.remove('active');
        });
        if (count < 0) {
            count = countMax;
            left = countMax * windowWidht * -1;
            $('.main-border-container')[0].style.left = left + 'px';
            inputsContainerChildren.get(count).classList.add('active');
        } else {
            left += mainBorderContainerChildrenWidth;
            $('.main-border-container')[0].style.left = left + 'px';
            inputsContainerChildren.get(count).classList.add('active');
        }
        setTimeout(timer(), delay);
    });

    $('#right').on('click', function (e) {
        clearInterval(time);
        ++count;
        $.each(inputsContainerChildren, function (index, elem) {
            elem.classList.remove('active');
        });
        if (count > countMax) {
            count = 0;
            left = 0;
            $('.main-border-container')[0].style.left = left + 'px';
            inputsContainerChildren.get(count).classList.add('active');
        } else {
            left -= mainBorderContainerChildrenWidth;
            $('.main-border-container')[0].style.left = left + 'px';
            inputsContainerChildren.get(count).classList.add('active');
        }
        setTimeout(timer(), delay);
    });

    $('.сharacterictics').get(0).addEventListener('click', function (e) {
        var target = e.target;

        if (target.className == 'label' && target.getAttribute('data-price')) {
            $('#forInputsCharacteristicsTarget').text(target.getAttribute('data-price'));
        }
        
        if (target.innerHTML == 'Характеристики') {
            if (getComputedStyle(сharacterictics).height == '190px') {
                $('#сharacterictics').css('height', '0px');
                $('.arrowUp').css('display', 'block');
                $('.arrowDown').css('display', 'none');
            } else {
                $('#сharacterictics').css('height', '190px');
                $('.arrowUp').css('display', 'none');
                $('.arrowDown').css('display', 'block');
            }
        }
    });

    $('.information').get(0).addEventListener('click', function (e) {
        var target = e.target;
        if (target.innerHTML == 'Информация') {
            if (getComputedStyle(forInformation).height == '190px') {
                $('#forInformation > p ').css('height', '0px');
                $('.arrowUp').css('display', 'block');
                $('.arrowDown').css('display', 'none');
            } else {
                $('#forInformation > p').css('height', '190px');
                $('.arrowUp').css('display', 'none');
                $('.arrowDown').css('display', 'block');
            }
        }
    });

    // $('#forInputsCharacteristicsTarget').offsetParent().find('button');


})();