/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)

import './styles/app.css';
console.log('Hello encore');

// start the Stimulus application
import './bootstrap';
console.log('Hello encore');

import $ from 'jquery';




if ($('.ty-compact-list1').length > 3) {
    $('.ty-compact-list1:gt(5)').hide();
    $('.show-more1').show();
  }
  
  $('.show-more1').on('click', function() {
    //toggle elements with class .ty-compact-list that their index is bigger than 2
    $('.ty-compact-list1:gt(5)').toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === 'Voir plus' ? $(this).html('<td>Voir moins</td>') : $(this).html('<td>Voir plus</td>');
  });



  if ($('.ty-compact-list2').length > 3) {
    $('.ty-compact-list2:gt(5)').hide();
    $('.show-more2').show();
  }
  
  $('.show-more2').on('click', function() {
    //toggle elements with class .ty-compact-list that their index is bigger than 2
    $('.ty-compact-list2:gt(5)').toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === 'Voir plus' ? $(this).html('<td>Voir moins</td>') : $(this).html('<td>Voir plus</td>');
  });


  if ($('.ty-compact-list3').length > 3) {
    $('.ty-compact-list3:gt(5)').hide();
    $('.show-more3').show();
  }
  
  $('.show-more3').on('click', function() {
    //toggle elements with class .ty-compact-list that their index is bigger than 2
    $('.ty-compact-list3:gt(5)').toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === 'Voir plus' ? $(this).html('<td>Voir moins</td>') : $(this).html('<td>Voir plus</td>');
  });

  if ($('.ty-compact-list4').length > 3) {
    $('.ty-compact-list4:gt(5)').hide();
    $('.show-more4').show();
  }
  
  $('.show-more4').on('click', function() {
    //toggle elements with class .ty-compact-list that their index is bigger than 2
    $('.ty-compact-list4:gt(5)').toggle();
    //change text of show more element just for demonstration purposes to this demo
    $(this).text() === 'Voir plus' ? $(this).html('<td>Voir moins</td>') : $(this).html('<td>Voir plus</td>');
  });




//// BOUTONS VOIR PLUS 
//this will execute on page load(to be more specific when document ready event occurs)




