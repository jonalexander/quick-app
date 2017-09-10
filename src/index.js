import jQuery from 'jQuery'
import scss from './styles/app.scss';

let $ = jQuery

const video = $('<video />', {
    id: 'video',
    src: 'https://media.giphy.com/media/OcO1mg91Ct4CA/giphy.mp4',
    type: 'video/mp4',
    controls: false,
    autoplay: true,
    loop: true
});

$('body').append(video)

/*

<video poster="https://media.giphy.com/media/OcO1mg91Ct4CA/200_s.gif" style="margin:0;padding:0" width="500" height="373" autoplay="" loop="">
  <source src="https://media.giphy.com/media/OcO1mg91Ct4CA/giphy.mp4" type="video/mp4">
  Your browser does not support the mp4 video codec.
</video>

*/
