/**
 * Created by Administrator on 2016/10/22 0022.
 */



function tab(tab,subTab) {
    var _tab = document.getElementsByClassName(tab)[0].getElementsByTagName('div');
    var _subTab = document.getElementsByClassName(subTab);
    for (var i = 0; i < _tab.length; i++) {
        _tab[i].index = i;
        _tab[i].onclick = function () {
            for (var i = 0; i < _tab.length; i++) {
                _subTab[i].className = subTab;
                _tab[i].id = ''
            }
            _subTab[this.index].className = 'subTab show';
            _tab[this.index].id = 'active'
        }
    }
}
tab('tab','subTab')