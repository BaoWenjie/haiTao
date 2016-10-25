/**
 * Created by my on 2016/10/25.
 */
var _tab = document.getElementsByClassName('tab')[0].getElementsByTagName('div')
var _subTab = document.getElementsByClassName('subT');
for (var i = 0; i < _tab.length; i++) {
    _tab[i].index = i;
    _tab[i].onmouseover = function () {
        console.log(_tab.length);
        console.log(_subTab.length);
        for (var j = 0; j < _tab.length; j++) {
            _tab[j].removeAttribute('id');
            _subTab[j].removeAttribute('id')
        }

        _tab[this.index].id = 'active';
        _subTab[this.index].id = 'show'

    }


}