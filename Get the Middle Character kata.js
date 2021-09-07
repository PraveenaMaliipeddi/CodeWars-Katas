function getMiddle(s)
{
    let place = 0;
    let length = 0;

        if(s.length % 2 == 1) {
            place = s.length /2;
            length = 1;
        } else {
            place = s.length / 2 - 1;
            length = 2;
        }

        return s.substring(place, place + length)
}
