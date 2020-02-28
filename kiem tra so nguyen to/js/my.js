function check(x) {
    if (x > 1) {
        for (let i = 2; i < x; i++) {
            if (x % i == 0) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}
html = '';
for(i=1;i<10001;i++){
    if(check(i)){
        html += i+'<br>';
    }
}
document.write(html);
